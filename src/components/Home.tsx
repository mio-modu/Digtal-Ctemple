import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useUserProfile } from '../hooks/useUserProfile';
import { usePrayers } from '../hooks/usePrayers';
import Hero from "./Hero";

// YouTube API 키와 채널 ID 설정
const YOUTUBE_API_KEY = 'YOUR_API_KEY';
const SEARCH_QUERIES = [
  '설교',
  '목사 설교',
  '크리스천 설교'
];

const Home = () => {
  const [user] = useAuthState(auth);
  const { userName, loading: profileLoading } = useUserProfile(user || null);
  const { prayers, loading: prayersLoading, addPrayer } = usePrayers(user || null, userName);
  const [newPrayer, setNewPrayer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const prayersPerPage = 5;
  const [verse, setVerse] = useState<{ verse: string; ref: string; date: string } | null>(null);
  const [sermonVideos, setSermonVideos] = useState<Array<{ videoId: string; title: string; channelTitle: string; viewCount: string; publishedAt: string }>>([]);

  // 오늘 날짜 문자열 생성
  const today = new Date();
  const todayString = today.toISOString().slice(0, 10);

  const handleLogout = () => {
    auth.signOut();
  };

  const handleSubmitPrayer = async () => {
    if (newPrayer.trim()) {
      await addPrayer(newPrayer);
      setNewPrayer("");
    }
  };

  const totalPages = Math.ceil(prayers.length / prayersPerPage);
  const startIndex = (currentPage - 1) * prayersPerPage;
  const endIndex = startIndex + prayersPerPage;
  const currentPrayers = prayers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const res = await fetch('/verses.json');
        const data = await res.json();
        // 오늘 날짜의 말씀을 직접 접근
        const todayVerse = data[todayString];
        setVerse(todayVerse ? { verse: todayVerse, ref: todayVerse.split(' - ')[0], date: todayString } : null);
      } catch (e) {
        setVerse(null);
      }
    };
    fetchVerse();
  }, [todayString]);

  // YouTube API를 사용하여 인기 있는 설교 영상 가져오기
  useEffect(() => {
    const fetchPopularSermons = async () => {
      try {
        const videoPromises = SEARCH_QUERIES.map(async (query) => {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${encodeURIComponent(query)}&part=snippet,id&order=viewCount&maxResults=1&type=video&relevanceLanguage=ko&regionCode=KR`
          );
          
          const data = await response.json();
          
          if (data.items && data.items.length > 0) {
            const video = data.items[0];
            
            // 영상 상세 정보 가져오기 (조회수 등)
            const videoDetailsResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${video.id.videoId}&part=statistics,contentDetails`
            );
            const videoDetails = await videoDetailsResponse.json();
            
            return {
              videoId: video.id.videoId,
              title: video.snippet.title,
              channelTitle: video.snippet.channelTitle,
              viewCount: videoDetails.items[0].statistics.viewCount,
              publishedAt: video.snippet.publishedAt
            };
          }
          return null;
        });

        const videos = await Promise.all(videoPromises);
        setSermonVideos(videos.filter(video => video !== null) as Array<{ videoId: string; title: string; channelTitle: string; viewCount: string; publishedAt: string }>);
      } catch (error) {
        console.error('설교 영상을 가져오는데 실패했습니다:', error);
      }
    };

    fetchPopularSermons();
  }, []);

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    return `${Math.floor(diffDays / 30)}개월 전`;
  };

  // 조회수 포맷팅 함수
  const formatViewCount = (count: string) => {
    const num = parseInt(count);
    if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}만회`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}천회`;
    }
    return `${num}회`;
  };

  return (
    <div className="text-gray-800 font-sans">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-yellow-300 font-serif text-xl">
              Digital Temple
            </Link>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-gray-300">Welcome, {userName}님</span>
                  <Link
                    to="/mypage"
                    className="text-gray-300 hover:text-yellow-300 transition duration-300"
                  >
                    마이성소
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-yellow-300 transition duration-300"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="text-gray-300 hover:text-yellow-300 transition duration-300"
                >
                  로그인
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      
      {/* 일상의 기도 섹션 */}
      <section className="relative py-32 px-4 text-center bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif mb-8">🙏 일상의 기도</h2>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            매일의 기도로 영적 성장을 이어가세요.<br />
            당신의 기도가 하늘에 닿는 순간을 경험하세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-xl font-serif mb-4">아침 기도</h3>
                <p className="text-sm text-gray-300">새로운 하루를 하나님과 함께 시작하세요.</p>
              </div>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-xl font-serif mb-4">저녁 기도</h3>
                <p className="text-sm text-gray-300">하루를 마무리하며 감사와 회개를 나누세요.</p>
              </div>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-xl font-serif mb-4">중보 기도</h3>
                <p className="text-sm text-gray-300">이웃과 세상을 위한 기도로 섬기세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 말씀듣기 섹션 */}
      <section className="relative py-32 px-4 text-center bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif mb-8">📖 말씀 듣기</h2>
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
            오늘의 추천 설교로 영혼을 채우세요.<br />
            하나님의 말씀이 당신의 삶을 변화시킬 것입니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sermonVideos.map((video, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 hover:border-yellow-300/40 transition-all duration-300">
                <div className="aspect-video mb-6">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-left">
                  <p className="text-lg text-yellow-300 mb-2 font-medium">{video.channelTitle}</p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{video.title}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">조회수 {formatViewCount(video.viewCount)}</span>
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <button className="px-8 py-4 bg-yellow-300 text-black rounded-full font-medium hover:bg-yellow-400 transition duration-300 text-lg">
              더 많은 설교 보기
            </button>
          </div>
        </div>
      </section>

      {/* 기존 성경 말씀 섹션에서 말씀듣기 부분 제거 */}
      <section className="relative py-32 px-4 text-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif mb-8">📖 성경 말씀</h2>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            매일의 말씀으로 영혼을 채우세요.<br />
            하나님의 말씀이 당신의 삶을 변화시킬 것입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-serif mb-4">
                오늘의 말씀 <span className="text-base text-gray-400 ml-2">({todayString})</span>
              </h3>
              {verse ? (
                <>
                  <p className="text-gray-300 text-lg mb-4">"{verse.verse}"</p>
                  <p className="text-yellow-300">- {verse.ref}</p>
                </>
              ) : (
                <p className="text-gray-300">말씀을 불러오는 중...</p>
              )}
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-serif mb-4">말씀 묵상</h3>
              <p className="text-gray-300 text-lg">하나님의 말씀을 깊이 묵상하며 당신의 삶에 적용해보세요.</p>
              <button className="mt-6 px-6 py-3 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition duration-300">
                묵상하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 공동체 섹션 */}
      <section className="relative py-32 px-4 text-center bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif mb-8">🤝 공동체</h2>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            함께 나누는 기도의 기쁨.<br />
            서로를 격려하고 위로하는 믿음의 공동체가 되세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-serif mb-4">기도 모임</h3>
              <p className="text-base text-gray-300">함께 모여 기도하며 영적 성장을 나누세요.</p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-serif mb-4">말씀 나눔</h3>
              <p className="text-base text-gray-300">성경 말씀을 함께 나누며 서로를 격려하세요.</p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-serif mb-4">봉사 활동</h3>
              <p className="text-base text-gray-300">이웃을 섬기며 하나님의 사랑을 실천하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 기도문 게시판 섹션 */}
      <section className="relative py-32 px-4 text-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-4xl font-serif mb-8">기도문 게시판</h3>
          <p className="text-xl text-gray-300 mb-8">
            당신의 마음을 담아 기도를 올려보세요.<br />
            하나님께서 당신의 기도를 들어주실 것입니다.
          </p>
          
          {/* 기도문 작성 폼 */}
          <div className="bg-black/50 p-8 rounded-lg border border-yellow-300/20 mb-12">
            <textarea
              value={newPrayer}
              onChange={(e) => setNewPrayer(e.target.value)}
              placeholder="당신의 기도를 여기에 적어주세요..."
              className="w-full p-6 bg-black/50 border border-yellow-300/30 rounded-lg resize-none h-32 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"
            />
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleSubmitPrayer}
                className="px-8 py-3 bg-yellow-300 text-black rounded-full font-medium hover:bg-yellow-400 transition duration-300"
              >
                기도 올리기
              </button>
            </div>
          </div>

          {/* 기도문 목록 */}
          <div className="space-y-6">
            {prayersLoading ? (
              <p className="text-gray-300">기도문을 불러오는 중...</p>
            ) : (
              <>
                {currentPrayers.map((prayer) => (
                  <div key={prayer.id} className="bg-black/50 p-6 rounded-lg border border-yellow-300/20 text-center">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-serif text-yellow-300">{prayer.author}</h4>
                      <span className="text-sm text-gray-400">{prayer.date}</span>
                    </div>
                    <p className="text-gray-300">{prayer.content}</p>
                  </div>
                ))}
                
                {/* 페이지네이션 */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-yellow-300/20 text-yellow-300 rounded-full font-medium hover:bg-yellow-300/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      이전
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                          currentPage === page
                            ? 'bg-yellow-300 text-black'
                            : 'bg-yellow-300/20 text-yellow-300 hover:bg-yellow-300/30'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-yellow-300/20 text-yellow-300 rounded-full font-medium hover:bg-yellow-300/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      다음
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif text-yellow-300 mb-8">Digital Temple</h3>
            <p className="text-lg mb-8">당신의 영적 성장을 위한 공간</p>
            <div className="flex justify-center gap-8 mb-8">
              <a href="#" className="hover:text-yellow-300 transition duration-300">이용약관</a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">개인정보처리방침</a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">문의하기</a>
            </div>
            <p className="text-sm">© 2024 Digital Temple. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 