import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onNotificationClick: () => void;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onNotificationClick, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold text-primary-600">디지털 성소</span>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              홈
            </button>
            <button
              onClick={() => onPageChange('prayer-journal')}
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              기도일지
            </button>
            <button
              onClick={() => onPageChange('prayer-request')}
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              기도요청
            </button>
            <button
              onClick={onNotificationClick}
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              알림
            </button>
          </div>

          {/* 로그인 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-primary-600 text-white px-6 py-2 rounded-xl hover:bg-primary-700 transition-colors"
            >
              로그인
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                onPageChange('home');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              홈
            </button>
            <button
              onClick={() => {
                onPageChange('prayer-journal');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              기도일지
            </button>
            <button
              onClick={() => {
                onPageChange('prayer-request');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              기도요청
            </button>
            <button
              onClick={() => {
                onNotificationClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              알림
            </button>
            <button
              onClick={() => {
                onLoginClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              로그인
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 