import React from 'react';

const DailyVerse: React.FC = () => {
  const verses = [
    {
      verse: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라",
      reference: "요한복음 14:27"
    },
    {
      verse: "내가 네게 명한 것이 아니냐 강하고 담대하라 두려워하지 말며 놀라지 말라 네 하나님 여호와가 네가 어디로 가든지 너와 함께 있느니라",
      reference: "여호수아 1:9"
    },
    {
      verse: "여호와는 나의 목자시니 내가 부족함이 없으리로다",
      reference: "시편 23:1"
    }
  ];

  const randomVerse = verses[Math.floor(Math.random() * verses.length)];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">오늘의 말씀</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-lg text-gray-700 mb-4">{randomVerse.verse}</p>
        <p className="text-right text-gray-500">{randomVerse.reference}</p>
      </div>
    </div>
  );
};

export default DailyVerse; 