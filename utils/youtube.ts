const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: string;
  publishedAt: string;
  channelTitle: string;
}

export async function getKoreanSermonVideos(): Promise<YouTubeVideo[]> {
  try {
    // 1. 먼저 검색 API로 설교 영상 ID들을 가져옵니다
    const searchResponse = await fetch(
      `${BASE_URL}/search?part=snippet&q=설교&type=video&relevanceLanguage=ko&maxResults=10&order=viewCount&key=${API_KEY}`
    );
    
    if (!searchResponse.ok) {
      throw new Error('YouTube 검색 API 호출 실패');
    }

    const searchData = await searchResponse.json();
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

    // 2. 가져온 ID들로 상세 정보를 조회합니다
    const videoResponse = await fetch(
      `${BASE_URL}/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`
    );

    if (!videoResponse.ok) {
      throw new Error('YouTube 비디오 API 호출 실패');
    }

    const videoData = await videoResponse.json();

    // 3. 응답 데이터를 가공합니다
    return videoData.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      viewCount: item.statistics.viewCount,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle
    }));
  } catch (error) {
    console.error('YouTube API 호출 중 오류 발생:', error);
    throw error;
  }
} 