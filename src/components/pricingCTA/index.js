import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircleUserRound, User } from 'lucide-react';
import Image from 'next/image';

const pricingUrl = process.env.NEXT_PUBLIC_PRICING_URL;

const PricingCTA = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };




  return (

    <div className=''>



      <div className="bg-black py-10 md:py-4">

        <div className="max-w-8xl mx-auto h-20 md:flex justify-center items-center px-5 sm:px-6 lg:px-8 md:mt-0">
          <p className="text-center text-white text-lg sm:text-xl md:text-2xl font-medium mr-0 md:mr-6">
            Ready to boost your career with Rise<span className="text-orange-500">ON</span>
          </p>
          <a
            href="#"
            className="text-center ms-12 me-12 md:ms-0 md:me-0 mt-4 md:mt-0 bg-[#3498DB] text-white text-lg font-semibold py-2 px-6 rounded-full flex md:inline-flex items-center justify-center italic"
          >
            See Pricing
            <span className="ml-2">
              <a href={pricingUrl}><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.730393 10.2929C0.339869 10.6834 0.339869 11.3166 0.730393 11.7071C1.12092 12.0976 1.75408 12.0976 2.14461 11.7071L0.730393 10.2929ZM12.4375 1C12.4375 0.447714 11.9898 -7.61451e-07 11.4375 -3.39982e-07L2.4375 -2.13542e-07C1.88522 -5.50717e-07 1.4375 0.447715 1.4375 0.999999C1.4375 1.55228 1.88522 2 2.4375 2L10.4375 2L10.4375 10C10.4375 10.5523 10.8852 11 11.4375 11C11.9898 11 12.4375 10.5523 12.4375 10L12.4375 1ZM2.14461 11.7071L12.1446 1.70711L10.7304 0.292893L0.730393 10.2929L2.14461 11.7071Z" fill="white" />
              </svg></a>

            </span>
          </a>
        </div>
      </div>
    </div >
  );
};

export default PricingCTA;
