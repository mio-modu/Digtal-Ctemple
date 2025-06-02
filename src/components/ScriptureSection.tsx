import React from 'react';

const ScriptureSection = () => {
  const verses = [
    {
      verse: "내가 너희에게 말하노니, 무엇이든지 기도하고 구하는 것은 받은 줄로 믿으라. 그리하면 너희에게 그대로 되리라.",
      reference: "마가복음 11:24",
      theme: "기도의 응답"
    },
    {
      verse: "너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라. 그리하면 이루리라.",
      reference: "요한복음 15:7",
      theme: "하나님과의 교제"
    },
    {
      verse: "모든 일에 감사하라. 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라.",
      reference: "데살로니가전서 5:18",
      theme: "감사"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
            오늘의 말씀
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            매일 새로운 성경 말씀으로 하나님의 은혜를 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verses.map((verse, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  {verse.theme}
                </span>
              </div>
              <blockquote className="text-xl text-secondary-800 mb-6 leading-relaxed">
                "{verse.verse}"
              </blockquote>
              <p className="text-secondary-600 font-medium">
                {verse.reference}
              </p>
            </div>
          ))}
        </div>

        {/* 성경 공부 섹션 */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-serif font-bold text-secondary-900 mb-6">
                매일 성경 공부
              </h3>
              <p className="text-secondary-600 mb-8 text-lg leading-relaxed">
                체계적인 성경 공부를 통해 하나님의 말씀을 더 깊이 이해하고 적용해보세요.
                매일 새로운 주제로 성경을 탐구하며 영적 성장을 경험하실 수 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>일일 성경 말씀</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>주제별 성경 공부</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>성경 퀴즈</span>
                </div>
              </div>
              <button className="mt-8 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-medium">
                성경 공부 시작하기
              </button>
            </div>
            <div className="bg-primary-50 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4">📖</span>
                <h4 className="text-xl font-medium text-secondary-900 mb-2">
                  오늘의 성경 공부
                </h4>
                <p className="text-secondary-600">
                  "기도의 능력" - 마태복음 6장
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureSection; 