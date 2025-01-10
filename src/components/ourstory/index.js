// components/OurStorySection.js
import React from 'react';
import Image from 'next/image';

export default function OurStorySection() {
  return (
    <div className="w-full bg-black py-10 md:py-16 px-4 md:px-8 lg:px-32 text-white flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section: SVG Logo */}
      <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start mb-8 lg:mb-0 w-full overflow-hidden">
        {/* SVG Logo */}
        <Image src={"/images/ourstory.svg"} width={154} height={148} />
      </div>

      {/* Right Section: Description */}
       
      <div className="col-span-12 text-center lg:text-left md:px-4 lg:px-8">
  <h3 className="text-lg lg:text-4xl font-bold tracking-wide mb-4 lg:mb-6 text-center lg:text-left">
    Innovation | Empowerment | Accessibility | Integrity
  </h3>
  <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-justify">
    <p className="text-center md:text-left col-span-12 lg:col-span-6 text-sm lg:text-base leading-relaxed lg:mr-4">
      Founded in March 2024, Happy People AI was born from a simple yet powerful idea: to make career advancement accessible, efficient, and personalized. We created a platform that helps individuals craft professional identities with confidence and ease.
    </p>
    <p className="text-center md:text-left col-span-12 lg:col-span-6 text-sm lg:text-base leading-relaxed lg:pr-4">
      We empower users by providing intelligent tools that enhance their personal brand, facilitate career growth, and maximize productivity. With a focus on user-centric design and superior experiences, Happy People AI stands committed to your success, one profile at a time.
    </p>
  </div>
</div>



    </div>
  );
}
