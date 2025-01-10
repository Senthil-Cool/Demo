import Image from "next/image";

const MetricCard = () => {
  return (
    <div className="bg-white">
      <div className="rocket-img h-[250px] md:h-[400px] -ml-1 mb-20 md:mb-0">
        <div className="sm:grid grid-cols-8 justify-end col-span-4 absolute  mx-auto md:left-0 z-16 -mt-[calc(8vh-2px)] md:-mt-[calc(8vh-1px)] ml-[calc(50%-540px)] md:ml-[calc(50%-512px)] gap-4 ">
          <Image
            className="w-[120px] md:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#3173AE] "
            src={"/images/RectangleCartoon.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#21AA6C] "
            src={"/images/RectangleCartoon1.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#51DAE2]"
            src={"/images/RectangleCartoon2.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#4895D9] "
            src={"/images/RectangleCartoon3.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#85C1E9] py-1"
            src={"/images/RectangleCartoon4.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#3BC3A3] "
            src={"/images/RectangleCartoon5.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#FFBF5B] "
            src={"/images/RectangleCartoon6.svg"}
            width={160}
            height={160}
          />
          <Image
            className="w-[120px] sm:h-28 lg:h-36  rounded-t-[48px] rounded-b-[10px] bg-[#00529C]"
            src={"/images/RectangleCartoon7.svg"}
            width={160}
            height={160}
          />
        </div>
        {/* <div className="xs:grid hidden grid-cols-4 justify-end col-span-4 absolute xs:right-4 z-16 -mt-[calc(8vh-2px)] ml-[calc(50%-540px)] gap-4 ">
          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#21AA6C] "
            src={"/images/RectangleCartoon1.svg"}
            width={160}
            height={160}
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#4895D9] "
            src={"/images/RectangleCartoon3.svg"}
            width={160}
            height={160}
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#85C1E9] py-1"
            src={"/images/RectangleCartoon4.svg"}
            width={160}
            height={160}
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#FFBF5B] "
            src={"/images/RectangleCartoon6.svg"}
            width={160}
            height={160}
          />
        </div> */}

        <div className="xs:flex hidden justify-center items-center flex-wrap gap-4 xs:relative xs:bottom-10 xs:mt-[-8vh] z-16">
          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#21AA6C]"
            src={"/images/RectangleCartoon1.svg"}
            width={160}
            height={160}
            alt="Cartoon 1"
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#4895D9]"
            src={"/images/RectangleCartoon3.svg"}
            width={160}
            height={160}
            alt="Cartoon 3"
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#85C1E9]"
            src={"/images/RectangleCartoon4.svg"}
            width={160}
            height={160}
            alt="Cartoon 4"
          />

          <Image
            className="w-[60px] h-[80px] sm:h-28 lg:h-36 rounded-t-[48px] rounded-b-[10px] bg-[#FFBF5B]"
            src={"/images/RectangleCartoon6.svg"}
            width={160}
            height={160}
            alt="Cartoon 6"
          />
        </div>

        <div className="pt-2 md:pt-32 xl:pt-32">
          <h1 className="text-[#FF9B00] font-bold text-2xl md:text-5xl text-center italic">
            Elevating Professionals
          </h1>
          <h1 className="text-[#FFFFFF] font-bold leading-[56px] text-2xl md:text-5xl text-center italic pb-6 md:pb-12 pt-2">
            to reach new heights
          </h1>
        </div>

        <div
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:mx-20 lg:mx-16 md:mx-8 lg:h-[200px] md:px-0 mx-8"
          style={{
            boxShadow: "0px 22px 4px 0px rgba(0, 0, 0, 0.16)",
            zIndex: 10,
            borderRadius: "8px",
          }}
        >
          <div className="border bg-white flex md:flex-col md:items-center md:text-center items-center justify-start p-4 md:p-8 rounded-tl-[8px] rounded-bl-none md:rounded-bl-[8px] rounded-tr-[8px] md:rounded-tr-none  lg:h-[220px]">
            <Image
              src="/images/ProfilesCreated.svg"
              width={56}
              height={56}
              className="text-center md:mx-auto mr-4 pb-4"
            />
            <div className="flex flex-col md:flex-col">
              <h1 className="text-[#2C3E50] text-3xl md:text-4xl font-bold leading-tight">
                <span className="hidden md:inline">12,000+</span>
                <span className="md:hidden">12K</span>
              </h1>
              <p
                className="text-[#8791A1] text-sm md:text-lg font-normal mt-1 md:mt-2"
                style={{ fontFamily: "Roboto" }}
              >
                Professional Profiles Created
              </p>
            </div>
          </div>

          <div className="border bg-white flex md:flex-col md:items-center md:text-center items-center justify-start p-4 md:p-8 lg:h-[220px]">
            <Image
              src="/images/globalUsers.png"
              width={56}
              height={56}
              className="text-center md:mx-auto mr-4 pb-4"
            />
            <div className="flex flex-col md:flex-col">
              <h1 className="text-[#2C3E50] text-3xl md:text-4xl font-bold leading-tight">
                <span className="hidden md:inline">8,000+</span>
                <span className="md:hidden">8K</span>
              </h1>
              <p
                className="text-[#8791A1] text-sm md:text-lg font-normal mt-1 md:mt-2"
                style={{ fontFamily: "Roboto" }}
              >
                Users Across the Globe
              </p>
            </div>
          </div>
          <div className="border bg-white flex md:flex-col md:items-center md:text-center items-center justify-start p-4 md:p-8 lg:h-[220px]">
            <Image
              src="/images/AIGenerations.svg"
              width={50}
              height={50}
              className="text-center md:mx-auto mr-4 pb-4"
            />
            <div className="flex flex-col md:flex-col">
              <h1 className="text-[#2C3E50] text-3xl md:text-4xl font-bold leading-tight">
                <span className="hidden md:inline">450,000+</span>
                <span className="md:hidden">450K</span>
              </h1>
              <p
                className="text-[#8791A1] text-sm md:text-lg font-normal mt-1 md:mt-2"
                style={{ fontFamily: "Roboto" }}
              >
                AI-Driven Interactions
              </p>
            </div>
          </div>

          <div className="border bg-white flex md:flex-col md:items-center md:text-center items-center justify-start p-4 md:p-8 rounded-bl-[8px] rounded-tr-none md:rounded-tr-[8px] md:rounded-bl-none rounded-br-[8px] lg:h-[220px]">
            <Image
              src="/images/ProfileViewed.svg"
              width={56}
              height={56}
              className="text-center md:mx-auto mr-4 pb-4"
            />
            <div className="flex flex-col md:flex-col">
              <h1 className="text-[#2C3E50] text-3xl md:text-4xl font-bold leading-tight">
                <span className="hidden md:inline">100,000+</span>
                <span className="md:hidden">100K</span>
              </h1>
              <p
                className="text-[#8791A1] text-sm md:text-lg font-normal mt-1 md:mt-2"
                style={{ fontFamily: "Roboto" }}
              >
                Profile Views by Recruiters
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-0 px-[calc(8%)] pt-60 md:pt-[calc(5%)] -pb-[calc(2%)]">
        <div className="pt-16 md:pt-20">
          <p className="text-center md:text-left text-[#8791A1] font-normal text-base leading-5 mb-4 md:mb-2">
            One After Other
          </p>
          <p className="text-center md:text-left font-normal text-2xl md:text-4xl w-full text-black">
            Recruiters are loving <span className="text-[#2C3E50]">Rise</span>
            <span className="text-[#FF9B00]">On</span> Profiles
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
