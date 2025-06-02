import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { User } from 'firebase/auth';

export const useUserProfile = (user: User | null) => {
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) {
        setUserName('');
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name || '');
        } else {
          // 사용자 문서가 없으면 생성
          await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            name: user.displayName || '',
            createdAt: new Date()
          });
          setUserName(user.displayName || '');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const updateUserName = async (newName: string) => {
    if (!user) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        name: newName
      }, { merge: true });
      setUserName(newName);
    } catch (error) {
      console.error('Error updating user name:', error);
    }
  };

  return { userName, loading, updateUserName };
}; 