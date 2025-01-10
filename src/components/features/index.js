import Image from "next/image";

const Features = () => {
  return (
    <div className="py-5 bg-[#FBF9F8] px-4">
      {/* Ensure the background is white */}
      <div className="mx-auto lg:max-w-[calc(91%)] xl:px-0 font-Roboto">
        <div className="grid grid-cols-4 items-center gap-2 md:pl-10 xl:pl-24 md:mr-10 xl:mr-24 mx-auto my-4 md:my-0 md:mb-10">
          <div className="md:col-span-1 col-span-4 flex flex-col">
            <p className="md:text-xl lg:text-2xl text-[#161513] px-4 font-medium leading-3">
              Meet
            </p>
            <p className="text-[42px] px-4 text-[#2C3E50] font-bold text-nowrap">
              Rise<span className="text-[#FF9B00]">ON</span> Suite
            </p>
          </div>
          <div className="md:col-span-3 col-span-4 xl:mt-5">
            <p className="font-normal text-base text-[#000000] md:pl-20 lg:pl-24 xl:pl-4">
              Your Ultimate Career Toolkit. Unlock the full potential of your
              professional profile with our comprehensive suite of tools
              designed to help you shine. Explore how our features can elevate
              your career journey
            </p>
          </div>
        </div>

        <div className="flex flex-col -mt-12">
          <div className="grid grid-cols-9 gap-4 py-4 mt-5">
            {/* Profile Card */}
            <div className="md:col-span-3 col-span-9 relative rounded-lg md:h-[256px] bg-[#3498DB]/[0.08] group mb-2">
              <Image
                className="!w-full !h-full object-contain lg:object-contain sm:object-cover"
                src="/images/profile.png"
                width={300}
                height={200}
                alt="Profile"
              />

              <div
                className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                  Profiles
                </div>
                <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                  Build a professional profile that showcases your skills and
                  achievements to attract top recruiters.
                </div>
              </div>
            </div>

            {/* Dashboard Card */}
            <div className="md:col-span-4 col-span-9 relative md:h-[256px] rounded-lg bg-[#3498DB]/[0.08] pt-2 group mb-2 md:mb-0">
              <Image
                className="!w-full !h-full object-contain lg:object-contain sm:object-cover"
                src="/images/interview.png"
                width={200}
                height={200}
              />
              <div
                className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                  Interviewer
                </div>
                <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                  {/* Monitor your career progress with real-time analytics on
                  profile views, applications, and engagement. */}
                  Practice with AI-driven mock interviews and receive feedback
                  to sharpen your skills.
                </div>
              </div>
            </div>

            {/* Interviewer Card */}
            <div className="md:col-span-2 col-span-9 flex flex-col gap-6 md:gap-3 h-[256px] mb-4 md:mb-0">
              {/* Reusable Card Component */}
              {[
                {
                  title: "Cover Letter",
                  description:
                    "Write tailored cover letters that align with job descriptions and highlight your strengths.",
                  img: "/images/coverLetter.png",
                },
                {
                  title: "Counsellor",
                  description:
                    "Get personalized career guidance to navigate your growth and development.",
                  img: "/images/Dashboard_Blur.svg",
                },
              ].map((card, index, array) => (
                <div
                  key={index}
                  className={`col-span-2 relative flex flex-col gap-2 h-1/2 rounded-lg overflow-hidden shadow-md bg-[#3498DB]/[0.08] pt-1 group ${
                    index === array.length-1 ? "bg-[#000000] pt-0" : ""}`}
                >
                  {index === array.length - 1 && (
                    <div className="absolute right-0 top-0 bg-[#FF9B00] text-white rounded-bl-md px-4 py-[2px] text-sm pt-0 ">
                      Coming Soon
                    </div>
                  )}
                  <Image
                    className={`!w-full !h-full object-contain ${
                      index === array.length -1 ? "object-cover" : "object-contain"} `}
                    src={card.img}
                    width={200}
                    height={200}
                    alt="image"
                  />
                  <div
                    className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-6 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                    style={
                      index === array.length - 1
                        ? { boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }
                        : {}
                    }
                  >
                    <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                      {card.title}
                    </div>
                    <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Card */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 md:gap-4 pb-4 mb-4 md:mb-0">
            <div className="col-span-1 overflow-hidden shadow-lg bg-[#3498DB]/[0.08] group rounded-lg pt-2">
              <div className="col-span-3 relative rounded-lg overflow-hidden  xl:h-[413px]">
                {/* Image Container with proper height */}
                <Image
                  className="w-full h-full lg:object-contain sm:object-cover"
                  src="/images/studio.png"
                  width={200}
                  height={200}
                  alt="Studio"
                />

                {/* Text Content */}
                <div
                  className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                    Studio
                  </div>
                  <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                    Create polished resumes and documents using customizable
                    templates.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 grid grid-rows-3 md:h-[269px] lg:h-[318px] xl:h-[419px] gap-6 md:gap-3">
              {/* Dashboard Card */}
              <div className="col-span-3 relative rounded-lg row-span-2 overflow-hidden shadow-lg bg-[#3498DB]/[0.08] pt-2 group">
                <Image
                  className="!w-full !h-full object-contain"
                  src="/images/dashboard.png"
                  width={200}
                  height={200}
                />
                <div
                  className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                    Dashboard
                  </div>
                  <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                    Monitor your career progress with real-time analytics on
                    profile views, applications, and engagement.
                  </div>
                </div>
              </div>

              {/* Marketer Card */}
              <div className="col-span-3 relative rounded-lg row-span-2 overflow-hidden shadow-lg bg-[#000000] group">
                <div className="absolute right-0 top-0 bg-[#FF9B00] text-white rounded-bl-md px-4 py-[2px] text-sm">
                  comming soon
                </div>
                <Image
                  className="!w-full !h-full object-cover"
                  src="/images/Dashboard_Blur.svg"
                  width={200}
                  height={200}
                />
                <div
                  className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                    Job Boards
                  </div>
                  <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                    Discover job opportunities tailored to your profile and
                    apply seamlessly.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Board & Posting Card */}
          <div className="col-span-3 grid grid-rows-1 h-[140px] gap-4 mb-28 md:mb-20 lg:mb-25 lg:mt-2 xl:mb-20">
            <div className="col-span-3 relative rounded-lg row-span-1 overflow-hidden shadow-lg bg-[#3498DB]/[0.08] group">
              {/* <div className="absolute right-0 top-0 bg-[#FF9B00] text-white rounded-bl-md px-4 py-[2px] text-sm">
                comming soon
              </div> */}
              <Image
                className="!w-full !h-full object-cover pb-14"
                src="/images/marketer.png"
                width={200}
                height={200}
              />
              <div
                className="bg-white absolute -bottom-1 p-4 md:px-4 lg:px-4 xl:p-6 md:pb-4 lg:pb-4 pt-5 w-full rounded-b-lg text-base font-black text-[#3498DB] leading-[18px] transition-all duration-300 ease-in group-hover:translate-y-[-2px] group-hover:bg-[#2C3E50] group-hover:h-auto h-[61px] overflow-hidden"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="group-hover:text-[#FF9B00] transition-colors duration-300">
                   Scribe
                </div>
                <div className="text-sm md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 font-normal font-roboto">
                  Promote yourself with personalized marketing materials and
                  networking tools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
