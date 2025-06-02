import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-end justify-start text-white">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/jesus-hero.jpg')"
        }}
      >
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-left px-4 mb-16 ml-12 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-8">
          Digital Temple
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          당신의 영적 성장을 위한 디지털 성소.<br />
          기도와 말씀으로 하나님과 더 가까워지세요.
        </p>
        <Link
          to="/auth"
          className="inline-block px-8 py-4 bg-yellow-300 text-black rounded-full text-lg font-medium hover:bg-yellow-400 transition duration-300"
        >
          시작하기
        </Link>
      </div>
    </div>
  );
};

export default Hero;
