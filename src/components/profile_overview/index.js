import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const ProfileOverview = () => {
  const images = [
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
    "/images/preview_top.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an array with cloned items at the start and end
  const extendedImages = [
    ...images.slice(-1),
    ...images,
    ...images.slice(0, 1),
  ];

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
    }
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Calculate the transform value based on the current index
  // const getTransformValue = () => {
  //   const baseTransform = -(currentIndex + 1) * (100 / (isLargeScreen ? 3 : 1));
  //   return `translateX(${baseTransform}%)`;
  // };

  const getTransformValue = () => {
    let baseTransform = -(currentIndex + 1) * (100 / (isLargeScreen ? 3 : 1));

    if (typeof window !== "undefined" && !isLargeScreen) {
      const screenWidth = window.innerWidth || 1; // Fallback to 1 to avoid division by 0
      const additionalOffset = (currentIndex + 1) * 5; // 2px for 1st, 4px for 2nd, etc.
      baseTransform -= (additionalOffset / screenWidth) * 100; // Convert px to percentage
    }

    return `translateX(${baseTransform}%)`;
  };

  return (
    <div className="bg-[#FBF9F8] text-[#161513] px-4 lg:px-16 py-10 md:py-12 flex justify-center items-start">
      <div className="container grid grid-cols-12 gap-y-8 lg:gap-8 items-center md:mx-4">
        <div className="col-span-12 lg:col-span-12 space-y-8 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-medium text-center">
            Explore Our Diverse Range of Professionally Crafted Profiles
          </h2>
          <p className="text-gray-700 md:px-8 !mt-4">
            Discover the endless possibilities with our customizable templates,
            tailored to suit any job role or career path. Create your unique
            profile with thousands of design variations, and create your
            interactive web profile or PDF.
          </p>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="me-3 md:me-0 text-[#3498DB] transition-colors"
            disabled={isTransitioning}
          >
            <svg
              width={isLargeScreen ? "47" : "25"} // Smaller size for mobile
              height={isLargeScreen ? "39" : "25"} // Smaller size for mobile
              viewBox="0 0 47 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2L3 19.7808L20 37.5616"
                stroke="#3498DB"
                stroke-width="4"
              />
              <path
                d="M45 8.27539L34 19.7806L45 31.2858"
                stroke="#3498DB"
                stroke-width="4"
              />
            </svg>
          </button>
        </div>

        <div className="col-span-10 overflow-hidden">
          <div
            className="flex xl:gap-1 lg:gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: getTransformValue() }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((src, index) => (
              <div key={index} className="flex-none w-full lg:w-1/3 md:w-1/2 py-2 ">
                <Image
                  src={src}
                  alt={`Profile Preview ${index}`}
                  width={300}
                  height={300}
                  className="w-auto lg:h-[400px] h-[300px] shadow-md object-cover rounded-lg transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <button
            onClick={handleNext}
            className="ms-3 md:ms-0 text-[#3498DB] transition-colors"
            disabled={isTransitioning}
          >
            <svg
              width={isLargeScreen ? "47" : "25"} // Smaller size for mobile
              height={isLargeScreen ? "39" : "25"} // Smaller size for mobile
              viewBox="0 0 47 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0625 37.5625L44.0625 19.7817L27.0625 2.00094"
                stroke="#3498DB"
                stroke-width="4"
              />
              <path
                d="M2.0625 31.2871L13.0625 19.7819L2.0625 8.27669"
                stroke="#3498DB"
                stroke-width="4"
              />
            </svg>
          </button>
        </div>

        <div className="lg:hidden col-span-12 flex justify-center gap-2 mt-0 md:mt-6">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                idx === (currentIndex + images.length) % images.length
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
