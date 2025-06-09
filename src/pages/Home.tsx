import React from 'react';
import Meditation from '../components/Meditation';
import DailyVerse from '../components/DailyVerse';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">디지털 성소</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DailyVerse />
              <Meditation />
            </div>
            <div className="mt-6">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">환영합니다</h2>
                <p className="text-gray-600">
                  디지털 성소에 오신 것을 환영합니다. 이곳에서 영적인 휴식과 성찰의 시간을 가져보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home; 