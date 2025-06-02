import React, { useState } from 'react';

interface PrayerRequest {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  prayerCount: number;
}

const PrayerRequest = () => {
  const [requests, setRequests] = useState<PrayerRequest[]>([
    {
      id: 1,
      title: "가족을 위한 기도",
      content: "우리 가족이 하나님의 은혜 안에서 건강하게 지내기를 원합니다.",
      author: "김성도",
      date: "2024-03-20",
      prayerCount: 12
    }
  ]);

  const [newRequest, setNewRequest] = useState({
    title: '',
    content: ''
  });

  const addRequest = () => {
    if (!newRequest.title.trim() || !newRequest.content.trim()) return;

    const request: PrayerRequest = {
      id: Date.now(),
      title: newRequest.title,
      content: newRequest.content,
      author: "나", // 실제로는 로그인한 사용자 정보 사용
      date: new Date().toISOString().split('T')[0],
      prayerCount: 0
    };

    setRequests([request, ...requests]);
    setNewRequest({ title: '', content: '' });
  };

  const incrementPrayerCount = (id: number) => {
    setRequests(requests.map(request =>
      request.id === id
        ? { ...request, prayerCount: request.prayerCount + 1 }
        : request
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-serif mb-8">기도 요청 나누기</h2>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <input
          type="text"
          value={newRequest.title}
          onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
          placeholder="기도 제목"
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={newRequest.content}
          onChange={(e) => setNewRequest({ ...newRequest, content: e.target.value })}
          placeholder="기도 내용을 작성해주세요..."
          className="w-full h-32 p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addRequest}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          기도 요청 올리기
        </button>
      </div>

      <div className="space-y-6">
        {requests.map(request => (
          <div key={request.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{request.title}</h3>
            <p className="text-gray-600 mb-4">{request.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                <span>{request.author}</span>
                <span className="mx-2">•</span>
                <span>{request.date}</span>
              </div>
              <button
                onClick={() => incrementPrayerCount(request.id)}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              >
                <span>🙏</span>
                <span>{request.prayerCount}명이 기도중</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerRequest; 