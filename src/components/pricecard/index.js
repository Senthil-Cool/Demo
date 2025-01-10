import React from "react";

const PriceCard = () => {
  return (
    <div className="w-full bg-[#161513] h-24 md:py-4 px-4 md:px-8 gap-x-10 md:flex justify-center items-center">
      <p className="text-center md:text-left text-white text-2xl">
        Experience Rise<span className="text-orange-500">ON</span> Suite Demo — No Card Required!
      </p>
      <button className="bg-[#3898DB] italic text-center text-white rounded-full px-6 py-2 flex md:inline-flex items-center justify-center mx-auto md:mx-0 mt-4 md:mt-0">
        Get Started <span className="ml-2"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.331956 10.2929C-0.0585686 10.6834 -0.0585686 11.3166 0.331956 11.7071C0.72248 12.0976 1.35564 12.0976 1.74617 11.7071L0.331956 10.2929ZM12.0391 1C12.0391 0.447714 11.5913 -7.61451e-07 11.0391 -3.39982e-07L2.03906 -2.13542e-07C1.48678 -5.50717e-07 1.03906 0.447715 1.03906 0.999999C1.03906 1.55228 1.48678 2 2.03906 2L10.0391 2L10.0391 10C10.0391 10.5523 10.4868 11 11.0391 11C11.5913 11 12.0391 10.5523 12.0391 10L12.0391 1ZM1.74617 11.7071L11.7462 1.70711L10.332 0.292893L0.331956 10.2929L1.74617 11.7071Z" fill="white"/>
</svg></span>
      </button>
      
    
    </div>
    
    
    
  );
};

export default PriceCard;
