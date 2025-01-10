import React from 'react';
import Image from "next/image";

const ProductCards = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[calc(91%)] mx-auto text-center pb-8 sm:px-8 lg:px-0">
        {/* Header Section */}
        <div className="text-center pt-16">
          <p className="mt-2 text-3xl font-normal text-[#161513] sm:text-4xl" style={{fontSize:'36px'}}>
            Key Features of <span className='text-[#2C3E50]'>Rise</span><span className="text-[#FF8033]">ON</span> Studio
          </p>
          <h2 className="text-sm font-normal text-[#161513] opacity-70 tracking-wide py-8" style={{fontSize:'16px'}}>
            Discover the cutting-edge features that make RiseON Studio the ultimate tool for building standout, professional profiles.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="mt-8 grid gap-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 1 */}
            <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#2C3E50] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#161513]">
                Effortless AI-Enhanced Onboarding
                </h3>
              </div>
              <p className="mt-2 text-base font-normal text-[#161513]">
              Begin your profile creation journey with a streamlined 2-minute onboarding process that saves time and effort.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FF8036] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A09]">
                AI-Powered Content Curation
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Automatically populate your profile with contextually relevant, role-specific content, designed to align with industry standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#2C3E50] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A09]">
                Dynamic Multimedia Integration
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Elevate your profile by embedding videos, images, and interactive elements that vividly showcase your projects and achievements.
              </p>
            </div>
             {/* Card 4 */}
             <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A09]">
                ATS-Optimized PDF Export with Integrated QR Code
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Seamlessly export your profile as an ATS-compliant PDF, including an embedded QR code for instant digital access.
              </p>
            </div>
             {/* Card 5 */}
             <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A09]">
                Guided Product Walkthroughs
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Utilize built-in guided tours and checklists to fully understand and utilize the various features of the platform.
              </p>
            </div>
             {/* Card 6 */}
             <div className="p-8 m-4 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A09]">
                Contextual Design Variations
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Optimize every section of your profile by choosing from a variety of layout designs that best suit the type of content you're presenting.
              </p>
            </div>
          </div>

          {/* Second Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          
            <div className="p-8 m-4 bg-white shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                ATS-Optimized PDF Export with Integrated QR Code
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
              Seamlessly export your profile as an ATS-compliant PDF, including an embedded QR code for instant digital access.
              </p>
            </div>

       
            <div className="p-8 m-4 bg-white shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                Guided Product Walkthroughs
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
              Utilize built-in guided tours and checklists to fully understand and utilize the various features of the platform.
              </p>
            </div>

            <div className="p-8 m-4 bg-white shadow-lg rounded-lg text-left lg:col-span-4 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                Contextual Design Variations
                </h3>
              </div>
              <p className="mt-2 text-base text-gray-500">
              Optimize every section of your profile by choosing from a variety of layout designs that best suit the type of content you're presenting.
              </p>
            </div>
          </div> */}

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 px-4 lg:px-36 xl:px-48">
            {/* Card 7 */}
            <div className="p-8 lg:m-4 sm:m-0 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-6 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#6B7885] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
               
                <h3 className="mb-4 text-lg font-semibold text-[#0A0A09]">
                Comprehensive Section Library
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Access a rich library of pre-built, customizable sections, expertly mapped to cover all key professional and personal achievements.
              </p>
            </div>

            {/* Card 8 */}
            <div className="p-8 lg:m-4 sm:m-0 bg-[#FBF9F8] shadow-lg rounded-lg text-left lg:col-span-6 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FF8036] rounded-t-lg"></div>
              <div className="flex items-center gap-4">
                
                <h3 className="mb-4 text-lg font-bold text-[#0A0A09]">
                State-of-the-Art UX for Effortless Navigation
                </h3>
              </div>
              <p className="mt-2 text-base text-[#161513]">
              Enjoy a sleek, intuitive interface designed for fluid navigation, making profile creation and editing a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
