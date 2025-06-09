import React, { useState } from 'react';

const Meditation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState('');

  const meditationMusic = [
    { id: 1, title: '평화로운 명상', duration: '10:00' },
    { id: 2, title: '숲속의 기도', duration: '15:00' },
    { id: 3, title: '바다의 평화', duration: '20:00' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">명상과 기도의 시간</h2>
      <div className="space-y-4">
        {meditationMusic.map((music) => (
          <div
            key={music.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => setSelectedMusic(music.title)}
          >
            <div>
              <h3 className="font-medium">{music.title}</h3>
              <p className="text-sm text-gray-500">길이: {music.duration}</p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? '일시정지' : '재생'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation; 