import Link from 'next/link';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const data = [
  {
    decs: 'Happy People AI transformed my resume into a standout masterpiece. The AI-driven tools made it easy to showcase my skills and achievements, and I landed my dream job within weeks!',
    name: 'Sarah Mitchell',
    designation: 'Marketing Manager, Bright Future Media'
  },
  {
    decs: 'The personalized guidance from Happy People AI gave me the confidence I needed for interviews. Their AI-powered platform was intuitive and tailored to my career needs. Highly recommend it to anyone serious about career growth.',
    name: 'David Lister',
    designation: 'Senior Software Engineer, TechWave Solutions'
  },
  {

    decs: 'I\'ve never experienced such a seamless process for creating my resume and building my professional brand. Happy People AI\'s platform is a game-changer in career development! I recommend this to all professionals.',

    name: 'Emily Roberts',
    designation: 'HR Specialist, TalentTree Consulting'
  },
  {
    decs: 'As a freelancer, branding is key. Happy People AI helped me craft a professional identity that stands out. Their AI tools made it easy to manage my online presence, and the results speak for themselves!',
    name: 'John Anderson',
    designation: 'Freelance Graphic Designer, CreativeEdge'
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="-mx-6 absolute top-[-40px] right-[30px] cursor-pointer bg-[#3498db] w-[40px] h-[40px] rounded-lg flex justify-center items-center"
      onClick={onClick}
    >
      <ArrowRight size={20} className="text-white" />
      
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="-mx-6 absolute top-[-40px] right-[80px] cursor-pointer bg-[#3498db] w-[40px] h-[40px] rounded-lg flex justify-center items-center"
      onClick={onClick}
    >
      <ArrowLeft size={20} className="text-white" />
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    appendDots: dots => (
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2 justify-center">
          {Array.from({ length: dots.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => dots[index].props.children.props.onClick()}
              className={`w-12 h-0.5 transition-colors duration-300 ${
                index === currentSlide ? 'bg-[#FF8A00]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className='base-img relative h-[40rem] md:h-auto w-full p-5 sm:p-20'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 sm:col-span-3 flex text-white font-black items-center text-xl sm:text-[21px] mt-4'>
          <div>
            <p>Hear from Our Happy Community</p>
            <Image src="/images/rating.svg" width="180" height="32" className='mt-3' alt="Rating" />
            <p className='text-white font-medium text-sm sm:text-base py-4 md:py-8'>
              Based on 500+ glowing reviews from our satisfied Rise<span className="text-[#FF9B00]">ON</span> users.
            </p>
          </div>
        </div>
        <div className='col-span-12 sm:col-span-9 relative mt-8'>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className='px-2 py-2'>
                <div className='bg-white p-6 rounded-lg mt-2 md:mt-0'>
                  <p className='font-normal text-[#161513B2] text-sm sm:text-base leading-6'>{item?.decs}</p>
                  <div className='flex items-center mt-5'>
                    <CircleUserRound className='text-[#8791A1] w-12 h-12 font-thin' />
                    <div className='ms-5'>
                      <p className='text-[#161513] font-medium text-sm sm:text-base leading-[18px]'>
                        {item?.name}
                      </p>
                      <p className='text-[#161513] text-xs mt-1 leading-[18px]'>
                        {item?.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;