'use client';

import React, { useEffect, useState } from 'react';

interface Verse {
  date: string;
  content: string;
  videoId?: string;
}

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export default function DailyVerse() {
  const [verses, setVerses] = useState<Verse[]>([]);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const response = await fetch('/verses.json');
        if (!response.ok) {
          throw new Error('Failed to fetch verses');
        }
        const versesData = await response.json();
        
        // 오늘 날짜를 기준으로 3개의 말씀을 가져옵니다
        const today = new Date();
        const verseDates = [
          today.toISOString().split('T')[0],
          new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          new Date(today.getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0]
        ];

        const selectedVerses = await Promise.all(verseDates.map(async date => {
          const content = versesData[date] || '말씀을 불러오는 중입니다...';
          
          // YouTube API를 사용하여 말씀 관련 동영상 검색
          const searchQuery = encodeURIComponent(content);
          const youtubeResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${API_KEY}&maxResults=1`
          );
          
          const youtubeData = await youtubeResponse.json();
          const videoId = youtubeData.items?.[0]?.id?.videoId;

          return {
            date,
            content,
            videoId
          };
        }));

        setVerses(selectedVerses);
      } catch (error) {
        console.error('Error fetching verses:', error);
      }
    };

    fetchVerses();
  }, []);

  if (verses.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const sectionTitles = ['오늘의 말씀', '내일의 말씀', '모레의 말씀'];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">말씀 듣기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verses.map((verse, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{sectionTitles[index]}</h3>
                <p className="text-gray-600 mb-4">{verse.date}</p>
                <div className="bg-white rounded-lg p-4 mb-4 shadow-inner">
                  <p className="text-lg text-gray-800">{verse.content}</p>
                </div>
                {verse.videoId && (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${verse.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 