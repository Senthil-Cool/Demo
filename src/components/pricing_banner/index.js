import React from "react";
import Image from "next/image";

const PricingBanner = () => {
    return (
        <div className="mt-[84px] p-6 md:p-12 bg-[#FBF9F8]" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="flex w-full items-center justify-center gap-4 flex-wrap">
               
                <Image
                    src={'/images/RiseOnPricing.svg'}
                    width={413}
                    height={144}
                    className="h-[144px] w-[413px]"
                />
            </div>
            <div className="flex flex-col text-center">
                <p className="text-[#161513] font-normal text-[36px] leading-[42.19px] text-center">
                    Empowering Your Career, One Profile at a Time.
                </p>
            </div>
        </div>
    );
};

export default PricingBanner;
