import React, { useState } from "react";
import Image from "next/image";

import { ArrowUpRight, CirclePlay, X } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_URL;

const Banner = () => {
  const [showModal, setShowModal] = useState(false); // State to toggle modal display
  const [videoUrl, setVideoUrl] = useState(""); // State to handle the video URL

  const handleOpenModal = () => {
    setVideoUrl("");
    setShowModal(true); // Show the modal and start the video
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoUrl(""); // Remove video URL to stop the video
  };

  return (
    <div className="-mr-0">
      <div
        className="w-full mt-[88px] px-4 md:px-8 md:py-12 bg-black orange_dots pb-4"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="flex w-full items-center justify-center gap-2 md:gap-4 flex-nowrap">
          <p className="text-[#FF9B00] font-medium text-xl md:text-3xl md:text-[42px] mt-6 md:mt-8 text-center md:text-left text-nowrap">
            Standout <span className="text-white">with</span>
          </p>
          
          <Image src={'/images/riseon_logo.svg'} width={413} height={144} className="mt-4 md:mt-0 h-24 md:h-auto w-[150px] md:w-[413px]" />
        </div>
        <div className="flex flex-col text-center mt-4">
          <p className="text-white text-center font-normal text-base md:text-xl leading-6 md:leading-[30px]">
          Empower your professional journey with tools designed to help you excel beyond the finish line. Start your path to success today.
          </p>
          <p className="text-[#FF9B00] font-normal text-base md:text-xl leading-6 md:leading-[30px] mt-2 pb-4">
            Start your path to success today.
          </p>
        </div>
        <div className="flex items-center justify-center mt-5 -mx-4 space-x-2">
          <button
            className="bg-[#3498DB] text-white px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-xs md:text-sm flex gap-2 items-center text-nowrap italic"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <a href="/pricing">Get Started</a> <ArrowUpRight />
          </button>
          <button
            onClick={handleOpenModal} // Open modal and play video
            className="bg-white border-2 border-[#3498DB] text-[#3498DB] px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-xs md:text-sm flex gap-2 items-center text-nowrap"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Watch Video <CirclePlay />
          </button>
        </div>

        {/* Modal with animation */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`relative bg-white w-full max-w-5xl h-[80vh] p-4 md:p-10 rounded-lg shadow-lg transform transition-all duration-300 ${
              showModal ? "scale-100 translate-y-0" : "scale-95 -translate-y-10"
            }`}
          >
            <button
              onClick={handleCloseModal} // Close modal and stop video
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="w-full h-full">
              {videoUrl && (
                <iframe
                  className="w-full h-full" // Make video fill the modal
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
