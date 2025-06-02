import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC13BJTwwqpnxbxEpPNffbLPexhLN2BXDA",
  authDomain: "digitalctemple.firebaseapp.com",
  projectId: "digitalctemple",
  storageBucket: "digitalctemple.firebasestorage.app",
  messagingSenderId: "623594807576",
  appId: "1:623594807576:web:7feca52c23b9093251fe6d",
  measurementId: "G-W4XP3YK5QM"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth와 Firestore 인스턴스 생성
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app; 