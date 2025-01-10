// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import { Helmet } from 'react-helmet';

export default function HeroSection() {
  return (
    <div className="w-full bg-[#FBF9F8] py-4 md:py-10 px-4 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between mt-10 lg:mt-20">
      
      {/* GIF Section */}
      <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center mt-10 md:mt-0">
        <div className="rounded-[50px] rounded-tr-none rounded-bl-none shadow-lg p-2 sm:p-4 bg-white w-full max-w-xs lg:max-w-full h-[300px] md:h-[400px] sm:h-[400px] flex justify-center items-center">
          <Image src={"/images/HPA-animate.gif"} width={300} height={300} className="rounded-[30px]" />
        </div>
      </div>

      {/* Text Section */}
      <div className="order-2 lg:order-1 lg:col-span-6 pr-0 xl:pr-48 mb-8 lg:mb-0 mt-4 md:mt-0">
        <h2 className="text-center md:text-left text-lg sm:text-xl font-light mb-2 sm:mb-4 text-black">
          Welcome to <span className="font-bold text-[#161513]">Happy People AI</span>
        </h2>
        <h1 className="text-center md:text-left text-2xl sm:text-4xl font-medium leading-tight mb-4 text-[#161513]">
          Empowering Your Career, One Profile at a Time
        </h1>
        <p className="text-center md:text-left text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          We believe in the power of personalized guidance to unlock your professional potential. Our innovative AI-driven platform is designed to help you stand out in a competitive job market, offering tailored tools and insights to enhance your professional journey. From creating compelling resumes and profiles to providing intelligent career management tools, we're here to support every step of your path to success.
        </p>
        <a
          href="#get-started"
          className="italic flex ms-12 me-12 md:inline-flex items-center justify-center bg-[#3498DB] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow hover:bg-blue-600 transition md:ms-0"
        >
          Get Started
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M0.449143 10.2929C0.0586189 10.6834 0.0586189 11.3166 0.449143 11.7071C0.839668 12.0976 1.47283 12.0976 1.86336 11.7071L0.449143 10.2929ZM12.1563 1C12.1563 0.447714 11.7085 -7.61451e-07 11.1563 -3.39982e-07L2.15625 -2.13542e-07C1.60397 -5.50717e-07 1.15625 0.447715 1.15625 0.999999C1.15625 1.55228 1.60397 2 2.15625 2L10.1563 2L10.1563 10C10.1563 10.5523 10.604 11 11.1563 11C11.7085 11 12.1563 10.5523 12.1563 10L12.1563 1ZM1.86336 11.7071L11.8634 1.70711L10.4491 0.292893L0.449143 10.2929L1.86336 11.7071Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
