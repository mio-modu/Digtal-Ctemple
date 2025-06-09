import axios from 'axios';

const API_KEY = process.env.VITE_YOUTUBE_API_KEY;

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
  channelTitle: string;
}

export const fetchLatestVideos = async (maxResults: number = 3): Promise<YouTubeVideo[]> => {
  try {
    // 한국어 설교 영상 검색
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: '설교', // 검색어
        maxResults: maxResults,
        order: 'viewCount', // 조회수 순으로 정렬
        type: 'video',
        regionCode: 'KR', // 한국 지역
        relevanceLanguage: 'ko', // 한국어
        key: API_KEY
      }
    });

    const videoIds = response.data.items.map((item: any) => item.id.videoId).join(',');
    
    const statsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics',
        id: videoIds,
        key: API_KEY
      }
    });

    return response.data.items.map((item: any, index: number) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      viewCount: statsResponse.data.items[index].statistics.viewCount,
      channelTitle: item.snippet.channelTitle
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}; 