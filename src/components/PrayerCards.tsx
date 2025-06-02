import React from 'react';

const PrayerCards = () => {
  const cards = [
    {
      title: "아침 기도",
      description: "하루를 시작하는 아침 기도",
      icon: "🌅",
      time: "오전 6시",
      color: "from-orange-50 to-yellow-50"
    },
    {
      title: "점심 기도",
      description: "하루 중간의 중보 기도",
      icon: "☀️",
      time: "오후 12시",
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "저녁 기도",
      description: "하루를 마무리하는 감사 기도",
      icon: "🌙",
      time: "오후 9시",
      color: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
            매일의 기도 시간
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            하루 세 번, 하나님과 함께하는 특별한 시간을 가져보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${card.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 p-4 text-4xl">
                {card.icon}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {card.description}
                </p>
                <div className="flex items-center text-secondary-500">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{card.time}</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-white bg-opacity-90 hover:bg-opacity-100 text-secondary-900 font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                기도하기
              </button>
            </div>
          ))}
        </div>

        {/* 추가 기능 섹션 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
              기도 알림 받기
            </h3>
            <p className="text-secondary-600 mb-6">
              매일의 기도 시간을 놓치지 않도록 알림을 받아보세요
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              알림 설정하기
            </button>
          </div>
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
              기도 파트너 찾기
            </h3>
            <p className="text-secondary-600 mb-6">
              함께 기도할 파트너를 찾아 서로를 위해 기도해보세요
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              파트너 찾기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerCards; 