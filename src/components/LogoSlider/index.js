import Slider from "react-slick";
import Image from "next/image";

const LogosSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: false,
    cssEase: 'linear',
    variableWidth: false,
    pauseOnHover: true,
    useTransform: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <div className="w-full bg-white pb-4 md:pb-16 pt-4 md:pt-8">
      {/* Outer container with padding */}
      <div className="relative px-6 sm:px-12 md:px-24">
        {/* Overlay gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Slider container */}
        <div className="overflow-hidden">
          <Slider {...settings}>

            {[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
                alt: "Infosys Logo"
              },
              {
                src: "https://1000logos.net/wp-content/uploads/2021/12/Glassdoor-Logo.png",
                alt: "Glassdoor Logo"
              },
              {
                src: "/images/microsoftlogo.svg",
                alt: "Microsoft Logo"
              },
              {
                src: "/images/GoogleLogo.svg",
                alt: "Google Logo"
              },
              {
                src: "https://download.logo.wine/logo/Siemens/Siemens-Logo.wine.png",
                alt: "Siemens Logo"
              }
            ].map((logo, index) => (
              <div key={index} className="px-2">
                <div className="border-2 rounded-lg shadow-lg bg-white 
                              h-[60px] sm:h-[72px] lg:h-[92px]
                              w-[140px] sm:w-[160px] lg:w-[193px]
                              flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={44}
                    className="object-contain max-w-[80%] max-h-[80%]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;
