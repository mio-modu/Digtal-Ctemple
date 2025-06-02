import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp, where } from 'firebase/firestore';
import { db } from '../firebase';
import { User } from 'firebase/auth';

interface Prayer {
  id: string;
  author: string;
  content: string;
  date: string;
  userId: string;
}

export const usePrayers = (user: User | null, userName: string) => {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 30일 전 날짜 계산
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const q = query(
      collection(db, 'prayers'),
      where('createdAt', '>=', Timestamp.fromDate(thirtyDaysAgo)),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prayerList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().createdAt.toDate().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).replace(/\. /g, '.').replace('.', '')
      })) as Prayer[];
      
      setPrayers(prayerList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addPrayer = async (content: string) => {
    if (!user) return;

    try {
      await addDoc(collection(db, 'prayers'), {
        content,
        author: userName || '익명',
        userId: user.uid,
        createdAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error adding prayer:', error);
    }
  };

  return { prayers, loading, addPrayer };
}; 