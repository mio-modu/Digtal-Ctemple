import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [myPrayers, setMyPrayers] = useState([
    {
      id: 1,
      content: "오늘 하루도 감사합니다. 가족들의 건강과 평안을 위해 기도합니다.",
      date: "2024.03.15"
    },
    {
      id: 2,
      content: "이웃을 향한 하나님의 사랑이 더욱 커지기를 기도합니다.",
      date: "2024.03.14"
    }
  ]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');
    
    if (!isLoggedIn) {
      navigate('/auth');
      return;
    }
    
    setUsername(storedUsername || '');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* 네비게이션 바 */}
      <nav className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-yellow-300 font-serif text-xl">
              Digital Temple
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">{username}님</span>
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-300 transition duration-300"
              >
                홈으로
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-800 mb-6">마이 성소</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif text-gray-800 mb-2">나의 기도</h3>
              <p className="text-3xl font-bold text-yellow-600">{myPrayers.length}</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif text-gray-800 mb-2">묵상한 말씀</h3>
              <p className="text-3xl font-bold text-yellow-600">12</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif text-gray-800 mb-2">참여한 모임</h3>
              <p className="text-3xl font-bold text-yellow-600">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-6">나의 기도문</h3>
          <div className="space-y-6">
            {myPrayers.map((prayer) => (
              <div key={prayer.id} className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{prayer.date}</span>
                </div>
                <p className="text-gray-700">{prayer.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage; 