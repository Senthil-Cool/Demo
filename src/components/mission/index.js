import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  const ourMissionValues = {   
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 900,
    fontStyle: 'normal',
    color: '#fbf9f8',
    WebkitTextStroke: '1px #2C3E50',
  };

  return (
    <div
      style={ourMissionValues}
      className="col-span-12 lg:col-start-1 lg:col-span-10 px-4 md:px-10 text-center lg:text-left text-3xl md:text-2xl lg:text-[72px] leading-tight lg:leading-[4.5rem]"
    >
      Our Mission & Values
    </div>
  );
};

const MissionSection = () => {
  const missionData = [
    {
      id: 1,
      icon: (
        <Image
          className="h-[35px] w-[30px]"
          src="/images/happy.svg"
          height={70}
          width={70}
          alt="Happy Logo"
        />
      ),
      title:
        "Happy's pawprints left an indelible mark on our hearts, and we strive to leave a positive impact on your professional journey.",
      circleSize: 70,
      topPosition: '-top-8',
    },
    {
      id: 2,
      icon: (
        <Image
          className="h-[72px] w-[60px]"
          src="/images/peoplelogo.svg"
          height={70}
          width={70}
          alt="People Logo"
        />
      ),
      title:
        "We are here to guide you, hand-in-hand, to achieve your career aspirations. Our hand symbolizes our hard work in elevating your personal brand.",
      circleSize: 100,
      topPosition: '-top-12',
    },
    {
      id: 3,
      icon: (
        <Image
          className="h-[135px] w-[105px]"
          src="/images/ailogo.svg"
          height={70}
          width={70}
          alt="AI Logo"
        />
      ),
      title:
        "Embracing the transformative power of AI, we focus on user experience to create solutions that showcase your unique strengths.",
      circleSize: 130,
      topPosition: '-top-16',
    },
  ];

  return (
    <section className="py-4 md:py-8 bg-[#FBF9F8]">
      <div className="container mx-auto grid grid-cols-12 gap-4 px-4 md:px-8 lg:px-20">
        {/* Header Section */}
        <OurMission />
        <h2 className="col-span-12 lg:col-start-2 lg:col-span-10 text-center lg:text-left text-2xl lg:text-[72px] font-bold text-transparent stroke-blue-600 stroke-[5px] leading-3 lg:leading-[4.5rem]">
          Our Mission & Values
        </h2>
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {missionData.map((item) => (
            <div
              key={item.id}
              className={`col-span-12 md:col-span-6 lg:col-span-4 relative flex flex-col justify-center items-center bg-[#21303E] p-4 md:p-8 rounded-lg shadow-lg text-white max-w-full mb-16 md:mb-0`}
            >
              {/* Icon Circle with Custom Top Position */}
              <div
                className={`absolute  ${item.topPosition} flex justify-center items-center rounded-full border border-gray-200`}
                style={{
                  width: item.circleSize,
                  height: item.circleSize,
                  backgroundColor: 'white',
                }}
              >
                <span className="text-4xl">{item.icon}</span>
              </div>
              {/* Content */}
              <div className="mt-12 md:mt-16 text-center">
                <p className="text-sm md:text-base px-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
