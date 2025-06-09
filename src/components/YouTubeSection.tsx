import React, { useEffect, useState } from 'react';
import { fetchLatestVideos, YouTubeVideo } from '../utils/youtubeApi';

const YouTubeSection: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const latestVideos = await fetchLatestVideos(3);
        setVideos(latestVideos);
      } catch (err) {
        setError('동영상을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-[200px]">로딩 중...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">인기 설교 영상</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 text-sm">
                  {parseInt(video.viewCount).toLocaleString()}회
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-800">{video.channelTitle}</p>
                  <p>업로드: {new Date(video.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection; 