import React, { useState } from 'react';

interface Notification {
  id: number;
  type: 'prayer' | 'bible' | 'community';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'prayer',
      title: '기도 시간 알림',
      message: '오늘의 기도 시간이 되었습니다.',
      time: '10분 전',
      read: false
    },
    {
      id: 2,
      type: 'bible',
      title: '오늘의 말씀',
      message: '새로운 성경 말씀이 준비되었습니다.',
      time: '1시간 전',
      read: false
    },
    {
      id: 3,
      type: 'community',
      title: '기도 응답',
      message: '당신의 기도 요청에 5명이 함께 기도하고 있습니다.',
      time: '2시간 전',
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, read: true }
        : notification
    ));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'prayer':
        return '🙏';
      case 'bible':
        return '📖';
      case 'community':
        return '👥';
      default:
        return '📌';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif">알림 센터</h2>
        <span className="text-sm text-gray-500">
          {notifications.filter(n => !n.read).length}개의 새로운 알림
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.read ? 'bg-white' : 'bg-blue-50'
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter; 