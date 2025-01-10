import React from "react";
import Image from "next/image";
// import shadows from "@mui/material/styles/shadows";

const Cards = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[calc(91%)] mx-auto text-center lg:px-0">
        {/* Header Section */}
        <div className="text-center pt-10 md:pt-12">
          {" "}
          {/* Wrapper div to center align the content */}
          <h2
            className="text-sm font-normal text-gray-500 uppercase tracking-wide"
            style={{ fontSize: "12px" }}
          >
            Even Superheroes Need the Right Tools
          </h2>
          <p className="mt-2 text-xl md:text-3xl font-normal text-[#16153]">
            Elevate Your Career with <span className="text-[#2C3E50]">Rise</span>
            <span className="text-[#FF8033]">ON</span> Intelligent Solutions
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-8 grid gap-4 md:pb-12">
          {/* First Row (12 Columns, stretched to edges) */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 md:gap-2">
            {/* Card 1 (Span 4 columns on large screens) */}
            <div style={ {boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.16)"}} className="p-4 md:p-4 lg:p-8 m-2 md:m-4 bg-white rounded-lg text-left lg:col-span-4">
              <div className="flex items-start justify-center gap-4">
                <Image
                  className="w-[32px] h-[40px]"
                  src={"/images/card1.svg"}
                  width={200}
                  height={200}
                />
                <h3 className=" md:text-base lg:text-lg font-bold text-gray-900">
                  Effortless Resume Creation And Seamless Sharing
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Create your resume in minutes and share it seamlessly across
                platforms with just a single click. Maximize your visibility
                with ease.
              </p>
            </div>

            {/* Card 2 (Span 4 columns on large screens) */}
            <div style={ {boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.16)"}} className="p-4 md:p-4 lg:p-8 m-2 md:m-4 bg-white shadow-lg rounded-lg text-left lg:col-span-4">
              <div className="flex items-start justify-center gap-4">
                <Image
                  className="w-[32px] h-[40px]"
                  src={"/images/card2.svg"}
                  width={200}
                  height={200}
                />
                <h3 className=" md:text-base lg:text-lg leading-6 font-bold text-gray-900">
                  Boost Your Professional Confidence
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Prepare with industry-leading practices, comprehensive interview
                coaching, and tailored guidance to excel in your career journey.
              </p>
            </div>

            {/* Card 3 (Span 4 columns on large screens) */}
            <div style={ {boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.16)"}} className="p-4 md:p-4 lg:p-8 m-2 md:m-4 bg-white shadow-lg rounded-lg text-left lg:col-span-4">
              <div className="flex items-start justify-center gap-4">
                <Image
                  className="w-[32px] h-[40px]"
                  src={"/images/card3.svg"}
                  width={200}
                  height={200}
                />
                <h3 className=" md:text-base lg:text-lg leading-6 font-bold text-gray-900">
                  Develop a Strong and Memorable Personal Brand
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Build a standout online presence that highlights your unique
                strengths and achievements, setting you apart from the
                competition.
              </p>
            </div>
          </div>

          {/* Second Row (12 Columns) with Gaps on Left and Right */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-4 lg:gap-4 lg:px-48 mb-6 md:mb-0">
            {/* Card 4 (Span 6 columns on large screens) */}
            <div style={ {boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.16)"}} className="p-4 md:p-4 lg:p-8 m-2 md:m-4 sm:m-0 bg-white shadow-lg rounded-lg text-left lg:col-span-6 mb-6 md:mb-0">
              <div className="flex items-start justify-center gap-4">
                <Image
                  className="w-[32px] h-[40px]"
                  src={"/images/card4.svg"}
                  width={200}
                  height={200}
                />
                <h3 className="mb-4 md:text-base lg:text-lg leading-6 font-bold text-gray-900">
                  Gain Clarity and Direction for Career Growth
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Gain valuable insights and clear direction for career growth and
                development, ensuring you stay on the right path.
              </p>
            </div>

            {/* Card 5 (Span 6 columns on large screens) */}
            <div style={ {boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.16)"}} className="p-4 md:p-4 md:m-4 md:mb-0 lg:p-8 m-2 sm:m-0 bg-white shadow-lg rounded-lg text-left lg:col-span-6">
              <div className="flex items-start justify-center gap-4">
                <Image
                  className="w-[32px] h-[40px]"
                  src={"/images/card5.svg"}
                  width={200}
                  height={200}
                />
                <h3 className="mb-4 md:text-base lg:text-lg leading-6 font-bold text-gray-900">
                  Streamline Your Efforts and Reduce Career Stress
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Leverage user-friendly tools to streamline resume creation and
                enhance your professional brand, minimizing effort and
                maximizing impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
