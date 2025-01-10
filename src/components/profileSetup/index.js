import Image from "next/image";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

// SVG for TryAngle component remains the same
const TryAngle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="13"
      viewBox="0 0 28 13"
      fill="none"
    >
      <path
        d="M13.9375 12.5L0.0810945 0.5L27.7939 0.500002L13.9375 12.5Z"
        fill="#FF9B00"
      />
    </svg>
  );
};

// RoundProgress component remains the same
const RoundProgress = ({ onComplete, duration = 10000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const increment = 100 / (duration / 100); // Calculate increment per 100ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + increment;
        if (nextProgress >= 100) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete, duration]);

  return (
    <div className="relative w-5 h-5 md:w-6 md:h-6">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-[#3F3F3F] dark:text-[#3F3F3F]"
          strokeWidth="5"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-[#FF9B00] dark:text-[#FF9B00]"
          strokeWidth="5"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
          strokeLinecap="round"
        ></circle>
      </svg>
    </div>
  );
};

// Updated menu items with steps for each section
const menuItems = [
  {
    id: "1",
    img: "/images/ResumeCreation.svg",
    name_up: "Resume",
    name_dn: "Creation",
    isActive: true,
    steps: [
      {
        id: "1",
        title: "Quick Profile Setup",
        description:
          "Guided resume setup auto-fills sections based on personalized questions",
        isActive: true,
        img: "/images/resumeStep1.png",
        summary:
          "“Start quickly with our easy step-by-step profile generator—no complex forms required”",
      },
      {
        id: "2",
        title: "Professional Templates and Formats",
        description:
          "Choose design variations to highlight your skills professionally.",
        isActive: false,
        img: "/images/resumeStep2.png",
        summary:
          "“Thousands of contextual design variations to help showcase your professional journey”",
      },
      {
        id: "3",
        title: "Profile IQ Chatbot",
        description:
          "Our AI chatbot enhances profiles visits by answering questions for visitors",
        isActive: false,
        img: "/images/resumeStep3.png",
        gif: "/images/resumeStep3.gif",
        summary:
          "“Make your resume interactive! Let our AI Chatbot handle questions from potential employers.”",
      },
      {
        id: "4",
        title: "Comprehensive Section Library",
        description:
          "Access our predefined sections for customizable professional profiles",
        isActive: false,
        img: "/images/resumeStep4.png",
        summary:
          "“Explore a wide range of predefined sections crafted to help you create customizable and professional profiles effortlessly”",
      },
      {
        id: "5",
        title: "ATS-Compliant Downloadable Resumes",
        description:
          "Customize resume for jobs with formatting integrity while being ATS compliant",
        isActive: false,
        img: "/images/resumeStep5.png",
        summary:
          "“Get started fast with our step-by-step profile generator—no complex forms, just easy-to-follow prompts.”",
      },
    ],
  },
  {
    id: "2",
    img: "/images/ContentCreation.svg",
    name_up: "Content",
    name_dn: "Creation",
    isActive: false,
    steps: [
      {
        id: "1",
        title: "AI-Optimized Content Suggestions",
        description:
          "Get personalized content suggestions and enhance your resume with insights",

        isActive: true,
        img: "/images/contentStep1.png",
        summary:
          "“Boost your content with AI-driven suggestions that match industry standards and maximize impact.”",
      },
      {
        id: "2",
        title: "AI-Powered Content Generator",
        description:
          "Generate AI-powered summaries, achievements, and descriptions for profiles",
        isActive: false,
        img: "/images/contentStep2.png",
        summary:
          "“Boost your content with AI-driven suggestions that match industry standards and maximize impact.”",
      },
      {
        id: "3",
        title: "AI Cover Letter Generator",
        description:
          "Generate personalized cover letters using your profile and job description",
        isActive: false,
        img: "/images/contentStep3.png",
        summary:
          "“Select from curated templates that fit your industry and role. Make sure your resume looks great and passes ATS checks.”",
      },
      {
        id: "4",
        title: "Role-Based Profile Analysis",
        description:
          "Our AI offers personalized insights to optimize your profile for career goals",
        isActive: false,
        img: "/images/contentStep4.png",
        summary:
          "“Optimize your profile for your target role with AI-driven analysis and personalized recommendations.”",
      },
      {
        id: "5",
        title: "Build Projects, Articles, and Case Studies",
        description:
          "Showcase skills through detailed projects, case studies and articles using AI",
        isActive: false,
        img: "/images/contentStep5.png",
        summary:
          "“Tell your professional story. Build projects and case studies that demonstrate your value and expertise.”",
      },
    ],
  },
  {
    id: "3",
    img: "/images/IconSharing.svg",
    name_up: "Sharing &",
    name_dn: "Accessibility",
    isActive: false,
    steps: [
      {
        id: "1",
        title: "SEO Optimized Profile",
        description:
          "Boost profile visibility using SEO with keywords, metadata, linking strategies",
        isActive: true,
        img: "/images/sharingStep1.png",
        summary:
          "“Be seen by more recruiters. Optimize your profile for search engines and expand your reach.”",
      },
      {
        id: "2",
        title: "Multilingual Support",
        description:
          "Enhance resume accessibility with multilingual support for diverse audiences",
        isActive: false,
        img: "/images/sharingStep2.png",
        summary:
          "“Go global with multilingual support. Present your profile in multiple languages to expand opportunities.”",
      },
      {
        id: "3",
        title: "Interlinkage Between Website and PDF",
        description:
          "Connect resumes using QR codes for easy access between profiles and PDFs",
        isActive: false,
        img: "/images/sharingStep3.png",
        summary:
          "“Bridge the gap between online and offline. Use QR codes and links for seamless access.”",
      },
      {
        id: "4",
        title: "Analytics to Measure Performance",
        description:
          "Track resume performance with analytics, insights on views and clicks",
        isActive: false,
        img: "/images/sharingStep4.png",
        summary:
          "“Optimize your profile for your target role with AI-driven analysis and personalized recommendations.”",
      },
      {
        id: "5",
        title: "Responsive Interactive Resume",
        description:
          "Resume that adapts to all devices for a seamless viewing experience",
        isActive: false,
        img: "/images/sharingStep5.png",
        summary:
          "“Your resume, everywhere. Our responsive design makes sure it looks great on any device.”",
      },
    ],
  },
  {
    id: "4",
    img: "/images/CareerManagement.svg",
    name_up: "Career",
    name_dn: "Management",
    isActive: false,
    steps: [
      {
        id: "1",
        title: "AI-Powered Career Counselor",
        description:
          "Our AI offers tailored career advice for growth, skills, and transitions",
        isActive: true,
        img: "/images/careerStep1.png",
        summary:
          "“Chart your path with confidence. Receive AI-driven guidance for your next career move.”",
      },
      {
        id: "2",
        title: "Mock Interviews with AI Feedback",
        description:
          "Ace your interviews with our proprietary AI Interviewer with smart analysis",
        isActive: false,
        img: "/images/careerStep2.png",
        summary:
          "“Ace your interviews. Practice with AI feedback to improve your answers and presentation.”",
      },
      {
        id: "3",
        title: "Target Industry Trends and Skills",
        description:
          "Stay updated on trends, skills, roles, and align career goals with RiseOnAI",
        isActive: false,
        img: "/images/careerStep3.png",
        summary:
          "“Stay ahead of the curve. Keep track of emerging trends and skills to remain competitive.”",
      },
      {
        id: "4",
        title: "AI-Optimized Job Search",
        description:
          "RiseOnAI finds your perfect match for your career growth and notifies you",
        isActive: false,
        img: "/images/careerStep4.png",
        summary:
          "“Find the perfect fit. Let AI bring the right opportunities to you.”",
      },
      {
        id: "5",
        title: "Dashboard for Career Tracking",
        description:
          "Centralized dashboard for efficient tracking of career essentials",
        isActive: false,
        img: "/images/careerStep5.png",
        summary:
          "“Centralized platform to track job applications, update resumes, manage skills, and prepare for interviews-all in one place.”",
      },
    ],
  },
];

const ProfileSetup = () => {
  const [items, setItems] = useState(menuItems);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [recentStep, setRecentStep] = useState(null);
  const progressDuration = 10000;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleItem = (itemId) => {
    setItems(
      items.map((item) => ({
        ...item,
        isActive: item.id === itemId ? !item.isActive : false,
      }))
    );
  };

  // const moveToNextStep = (itemId) => {
  //     setItems(items.map(item => {
  //         if (item.id === itemId) {
  //             const currentActiveIndex = item.steps.findIndex(step => step.isActive);
  //             const nextIndex = (currentActiveIndex + 1) % item.steps.length;
  //             return {
  //                 ...item,
  //                 steps: item.steps.map((step, index) => ({
  //                     ...step,
  //                     isActive: index === nextIndex
  //                 }))
  //             };
  //         }
  //         return item;
  //     }));
  // };

  const moveToNextStep = (itemId, stepId = null) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const currentActiveIndex = item.steps.findIndex(
            (step) => step.isActive
          );
          const clickedIndex = stepId
            ? item.steps.findIndex((step) => step.id === stepId)
            : -1;

          const nextIndex =
            stepId !== null
              ? clickedIndex // If a step is clicked, activate the clicked step
              : (currentActiveIndex + 1) % item.steps.length; // Otherwise, proceed to the next step

          return {
            ...item,
            steps: item.steps.map((step, index) => ({
              ...step,
              isActive: index === nextIndex,
              isCompleted: index < nextIndex,
            })),
          };
        }
        return item;
      })
    );
  };

  // const moveToNextStep = (itemId, stepId) => {
  //   // Track the most recent step opened
  //   setRecentStep(
  //     items.find((item) => item.id === itemId)?.steps.find((step) => step.id === stepId)
  //   );

  //   // First update: activate the clicked step and mark previous steps as completed
  //   setItems(
  //     items.map((item) => {
  //       if (item.id === itemId) {
  //         const clickedIndex = item.steps.findIndex((step) => step.id === stepId);

  //         return {
  //           ...item,
  //           steps: item.steps.map((step, index) => ({
  //             ...step,
  //             isActive: index === clickedIndex,
  //             isCompleted: index < clickedIndex,
  //           })),
  //         };
  //       }
  //       return item;
  //     })
  //   );

  //   // After the progress animation completes, move to next step
  //   setTimeout(() => {
  //     setItems((prevItems) =>
  //       prevItems.map((item) => {
  //         if (item.id === itemId) {
  //           const currentActiveIndex = item.steps.findIndex((step) => step.isActive);

  //           // If we are at the last step, reset to the first step
  //           if (currentActiveIndex === item.steps.length - 1) {
  //             return {
  //               ...item,
  //               steps: item.steps.map((step, index) => ({
  //                 ...step,
  //                 isActive: index === 0, // Reset to first step
  //                 isCompleted: false, // Reset all steps
  //               })),
  //             };
  //           }

  //           // Otherwise, move to the next step
  //           if (currentActiveIndex < item.steps.length - 1) {
  //             return {
  //               ...item,
  //               steps: item.steps.map((step, index) => ({
  //                 ...step,
  //                 isActive: index === currentActiveIndex + 1,
  //                 isCompleted: index <= currentActiveIndex,
  //               })),
  //             };
  //           }
  //         }
  //         return item;
  //       })
  //     );
  //   }, progressDuration);
  // };

  return (
    <div className="bg-[#FBF9F8] flex flex-col justify-center items-center w-full px-4 sm:px-20 ">
      <div className="pt-12 px-4 sm:px-8 text-center">
        <p className="text-[#8791A1] h-5 font-normal text-sm sm:text-base leading-5">
          Experience Effortless Career Growth
        </p>
        <p className="text-[#161513] font-normal text-2xl sm:text-4xl leading-7 sm:leading-10 pt-2">
          We Provide Ease in Every Stage
        </p>
      </div>

      {/* Responsive Menu Section */}
      <div className="w-full mt-8 md:mt-0">
        {isMobile ? (
          // Mobile Accordion View
          <div className="flex gap-4 flex-col mb-6">
            {items.map((item) => (
              <>
                <div
                  key={item.id}
                  className="border rounded-lg overflow-hidden bg-white text-black shadow-lg"
                >
                  <div
                    className={`flex items-center p-4 cursor-pointer${
                      item.isActive ? "md:border-b border-[#FF9B00]" : ""
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <Image
                      src={item.img}
                      width={40}
                      height={40}
                      alt={item.name_up}
                      className="mr-4"
                    />
                    <Typography className="text-[#161513] font-medium text-lg">
                      {item.name_up} {item.name_dn}
                    </Typography>
                    <svg
                      className={`ml-auto transform transition-transform ${
                        item.isActive ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path fill="currentColor" d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>

                {item.isActive && (
                  <div>
                    <div className="px-2">
                      {item.steps.map((step, index) => (
                        <div key={step.id}>
                          {/* Step Section */}
                          <div
                            onClick={() => moveToNextStep(item.id, step.id)}
                            className={`md:border-2 ${
                              index === item.steps.length - 1
                                ? ""
                                : "border-b-2"
                            } p-1 md:rounded-lg ${step.isActive ? "" : ""}`}
                          >
                            <div className="flex justify-between py-4">
                              <div>
                                <p className="font-bold text-sm">
                                  {step.title}
                                </p>
                                {step.isActive && (
                                  <p className="text-[#666666] text-sm mt-2">
                                    {step.description}
                                  </p>
                                )}
                              </div>
                              <div>
                                {step.isActive && (
                                  <RoundProgress
                                    onComplete={() =>
                                      moveToNextStep(
                                        items.find((item) => item.isActive).id
                                      )
                                    }
                                    duration={progressDuration}
                                  />
                                )}
                              </div>
                            </div>
                            {step.isActive && (
                              <div className="w-full rounded-lg bg-white mt-2 mb-4 overflow-hidden relative">
                                {/* Background Image */}
                                <Image
                                  className="w-full md:w-[350px] lg:w-[435px] h-[200px] md:h-[310px] lg:h-[332px] px-2"
                                  src={
                                    items
                                      .find((item) => item.isActive)
                                      ?.steps.find((step) => step.isActive)
                                      ?.img || "/images/FrameImage.svg" // Use the active step's image or a default image
                                  }
                                  width={100}
                                  height={200}
                                  alt="Step Image"
                                />

                                {/* Conditionally Render GIF Overlay */}
                                {items
                                  .find(
                                    (item) => item.isActive && item.id === "1"
                                  )
                                  ?.steps.find(
                                    (step) => step.isActive && step.id === "3"
                                  )?.gif && (
                                  <div className="absolute top-[12px] left-[112px] inset-0 flex items-center justify-center">
                                    <Image
                                      src={
                                        items
                                          .find(
                                            (item) =>
                                              item.isActive && item.id === "1"
                                          )
                                          ?.steps.find(
                                            (step) =>
                                              step.isActive && step.id === "3"
                                          )?.gif
                                      }
                                      alt="Step 3 GIF"
                                      width={100}
                                      height={100}
                                      className="w-[9.8rem] h-[11.2rem] rounded-md"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                           
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        ) : (
          // Desktop Tabs View remains the same
          <div className="flex flex-wrap md:grid grid-cols-4 justify-center gap-4 py-8">
            {items.map((item) => (
              <div key={item.id} className="justify-center">
                <div
                  className={`flex items-center justify-center duration-300 px-7 md:px-2 cursor-pointer ${
                    item.isActive
                      ? "border-b-2 border-[#FF9B00] bg-white"
                      : "border-b-2 border-[#FF9B00]"
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <Image
                    className="w-auto h-auto "
                    src={item.img}
                    width={60}
                    height={60}
                    alt={item.name_up}
                  />
                  <Typography className="text-[#161513] font-medium sm:text-2xl md:text-base xl:text-2xl sm:leading-8 sm:px-8 mx-4 md:mx-0 sm:p-8 md:p-4">
                    {item.name_up}
                    <br />
                    {item.name_dn}
                  </Typography>
                </div>
                {item.isActive && (
                  <div className="mx-auto w-fit">
                    <TryAngle />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Content Display Section */}
      {!isMobile && items.find((item) => item.isActive) && (
        <div className="grid grid-cols-1 sm:grid-cols-6 w-full mx-auto gap-4 sm:gap-8 md:gap-12 flex-wrap mt-4 md:mb-10">
          <div className="flex flex-col gap-4 col-span-6 sm:col-span-3">
            {items
              .find((item) => item.isActive)
              .steps.map((step) => (
                <div
                  key={step.id}
                  onClick={() =>
                    moveToNextStep(
                      items.find((item) => item.isActive).id,
                      step.id
                    )
                  }
                  className={`cursor-pointer flex border-2 ${
                    step.isActive ? "bg-white" : ""
                  } h-[81px] md:h-auto xl:py-6 lg:py-3  justify-between px-8 sm:px-8 md:px-4 rounded-lg`}
                >
                  <div className="my-auto ">
                    <p className="text-[#161513] font-bold text-sm sm:text-base leading-6 text-nowrap">
                      {step.title}
                    </p>
                    {step.isActive && (
                      <p className="text-[#666666] font-normal text-sm leading-6 pt-[6px]">
                        {step.description}
                      </p>
                    )}
                  </div>
                  <div className="my-auto">
                    {step.isActive && (
                      <RoundProgress
                        // onComplete={() => moveToNextStep(items.find((item => item.isActive).id),
                        //     step.id)

                        // }

                        onComplete={() =>
                          moveToNextStep(items.find((item) => item.isActive).id)
                        }
                        duration={progressDuration}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop Image Section */}
          <div className="col-span-6 lg:mt-4 xl:mt-0 w-full sm:col-span-2 mb-10 ml-0 lg:ml-16 xl:ml-24 md:w-[300px] lg:w-[355px] xl:w-[540px]">
            <div className="bg-white w-full relative rounded-t-xl">
              <Image
                className="w-full shadow-md rounded-t-[10px] lg:h-[250px] xl:h-[373px]" // Apply height only for xl screens
                src={
                  items
                    .find((item) => item.isActive) // Find the active menu item
                    ?.steps.find((step) => step.isActive)?.img ||
                  "/images/FrameImage.svg" // Use the active step's image or a default image
                }
                width={400}
                height={200}
                alt="Step Image"
              />
             

              {/* Conditionally Render GIF for Step 3 of Menu 1 */}
              {items
                .find((item) => item.isActive && item.id === "1")
                ?.steps.find((step) => step.isActive && step.id === "3")
                ?.gif && (
                <div className="absolute lg:top-[29px] xl:top-[33px] lg:left-[7.4rem] xl:left-[11.6rem] inset-0 flex items-center justify-center">
                  <Image
                    src={
                      items
                        .find((item) => item.isActive && item.id === "1")
                        ?.steps.find((step) => step.isActive && step.id === "3")
                        ?.gif
                    }
                    alt="Step 3 GIF"
                    width={100}
                    height={100}
                    className="rounded-t-md lg:w-[10.8rem] xl:w-[15.9rem] lg:h-[13.9rem] xl:h-[21.5rem]"
                  />
                </div>
              )}
            </div>

            <p
              className="text-center flex justify-center items-center w-full xl:h-24 py-2 bg-white px-4 text-[#666666] font-medium text-sm sm:text-base rounded-b-[10px]"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                // borderRadius: "0px 0px 10px 10px",
              }}
            >
              {
                items
                  .find((item) => item.isActive) // Find the active menu item
                  ?.steps.find((step) => step.isActive)?.summary ||
                  recentStep?.summary // Find the active step description
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSetup;
