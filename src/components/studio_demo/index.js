
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const HowItWorks = ({ section }) => {
  const data = {
    profile: {
      title: "How does Profile work?",
      description: "Creating your professional profile is easy and efficient.",
      steps: [
        {
          id: "01",
          title: "Accessible and Responsive Design",
          description: "Enjoy a profile that is highly readable, responsive, and accessible across all devices, ensuring recruiters can view it anytime, anywhere.",
          image: "/images/profile1.svg",
        },
        {
          id: "02",
          title: "Dynamic Hosting with Rich Media",
          description: "Showcase engaging content with multimedia elements like videos, images, and portfolio links, supported by refined, AI-enhanced content.",
          image: "/images/profile2.svg",
        },
        {
          id: "03",
          title: "AI-Powered Insights for Viewers",
          description: "Impress recruiters with the Profile IQ Chatbot, which provides instant answers, highlights key achievements, and ensures they quickly grasp your expertise",
          image: "/images/profile3.png",
          gif: "/images/resumeStep3.gif"
        },
        {
          id: "04",
          title: "ATS-Compliant Resumes Made Easy",
          description: "Generate a downloadable, ATS-optimized PDF resume that adheres to industry standards, ensuring smooth compatibility with applicant tracking systems.",
          image: "/images/profile4.svg",
        },
        {
          id: "05",
          title: "Effortless Sharing with Maximum Visibility",
          description: "Share your profile easily with one-click options and SEO-optimized features for broader reach.",
          image: "/images/profile5.svg",
        },
      ],
    },
    studio: {
      title: "How does it works?",
      description: "Creating your professional profile with RiseON Studio is as simple as 1-2-3.",
      steps: [
        {
          id: "01",
          title: "Effortless Onboarding in Seconds",
          description: "Dive right into creating your standout profile with a streamlined setup process. Input your core details and let our system do the heavy lifting.",
          image: "/images/howit1.png",
        },
        {
          id: "02",
          title: "AI-Curated Content Tailored to You",
          description: "Harness the power of AI to auto-generate role-specific, impactful content. Watch as your profile is populated with expertly crafted text that aligns perfectly with industry standards and your career goals.",
          image: "/images/howit2.png",
        },
        {
          id: "03",
          title: "Dynamic Design Flexibility + Seamless Multimedia Integration",
          description:
            "Bring your profile to life with highly customizable design options and integrated multimedia. Choose from contemporary layouts, and effortlessly add videos, images, or project links to enhance your personal brand.",
          image: "/images/howit3.png",
        },
        {
          id: "04",
          title: "One-Click ATS-Optimized Resume with QR Code",
          description:
            "Generate a polished, ATS-optimized PDF of your profile in one click. Instantly share your digital identity with a scannable QR code for easy access across platforms and devices.",
          image: "/images/howit4.png",
        },
        {
          id: "05",
          title: "Cutting-Edge User Experience for Maximum Efficiency",
          description:
            "Enjoy a sleek, intuitive user interface designed for ease of use. Every feature is crafted to enhance your workflow, making profile creation and updates a seamless, frictionless experience.",
          image: "/images/howit5.png",
        },
        
      ],
    },
    dashboard: {
      title: "How does it works?",
      description: "Streamlining your career management with RiseON Dashboard is effortless:",
      steps: [
        {
          id: "01",
          title: "Multi-Profile Management",
          description: "Manage multiple job-specific profiles under a single account, tailored to diverse targets and career objectives. Stay organized and ready for any opportunity.",
          image: "/images/dashboard1.svg",
        },
        {
          id: "02",
          title: "Real-Time Updates and Notifications",
          description: "Receive instant industry insights, personalized alerts, and notifications to stay informed about trends, skills, and opportunities relevant to your career.",
          image: "/images/dashboard2.svg",
        },
        {
          id: "03",
          title: "Enhanced Analytics and SEO Insights",
          description: "Access powerful analytics to track profile performance, improve visibility with SEO-driven recommendations, and optimize your content for maximum impact.",
          image: "/images/dashboard3.svg",
        },
        {
          id: "04",
          title: "Integrated AI-Powered Modules",
          description: "Seamlessly access RiseON-powered solutions like AI Interviewer and other career-enhancing tools, all from a unified and intuitive dashboard.",
          image: "/images/dashboard4.svg",
        },
        {
          id: "05",
          title: "Comprehensive Career Intelligence Hub",
          description: "Enjoy a centralized platform offering actionable data, profile optimization tools, and cutting-edge features to propel your professional growth.",
          image: "/images/dashboard5.svg",
        },
      ],
    },
    coverletter: {
      title: "How does it works?",
      description: "Crafting your professional and impactful cover letter with RiseON Cover Letter is as straightforward as it gets:",
      steps: [
        {
          id: "01",
          title: "Swift and Seamless Setup",
          description: "Provide essential details such as your profile, target role, company, and job description. Let the system handle the heavy lifting to create a draft in moments.",
          image: "/images/coverletter1.svg",
        },
        {
          id: "02",
          title: "AI-Driven Personalization",
          description: "Generate cover letters tailored to your specific career goals & job requirements with content that is both contextually relevant and professionally aligned.",
          image: "/images/coverletter2.svg",
        },
        {
          id: "03",
          title: "Professional Formatting Made Easy",
          description: "Choose from expertly designed templates that ensure a polished, industry-standard look while offering flexibility to make personal edits.",
          image: "/images/coverletter3.svg",
        },
        {
          id: "04",
          title: "Quick PDF Download and Sharing Options",
          description: "Export your finalized cover letter as a professional PDF, ready for sharing across job boards, emails, or other channels.",
          image: "/images/coverletter4.svg",
        },
        {
          id: "05",
          title: "Simple and Efficient Interface",
          description: "Enjoy a user-friendly platform that optimizes your experience, making the creation of customized, high-impact cover letters quick and effortless.",
          image: "/images/coverletter5.svg",
        },
      ],
    },
    interview: {
      title: "How does it works?",
      description: "Preparing for your next big opportunity with RiseON Interviewer is as seamless as ever. Here's how it works:",
      steps: [
        {
          id: "01",
          title: "Customizable Mock Interview Setup",
          description: "Easily configure mock interviews tailored to your profile, target role, company, and job description. Personalize your experience to match real-world scenarios.",
          image: "/images/interview1.svg",
        },
        {
          id: "02",
          title: "AI-Generated Contextual Scenarios",
          description: "Experience a curated blend of situational, technical, and behavioral questions designed by AI to reflect the challenges of your desired role.",
          image: "/images/interview2.svg",
        },
        {
          id: "03",
          title: "Real-Time Answer Suggestions",
          description: "Leverage real-time feedback and refined suggestions for each answer. Our AI Mimic technology impersonates your profile to help you deliver confident and professional responses.",
          image: "/images/interview3.svg",
        },
        {
          id: "04",
          title: "Flexible and Adaptive Features",
          description: "Practice with versatility—respond via text or audio, and review past performances with stored logs for continuous improvement.",
          image: "/images/interview4.svg",
        },
        {
          id: "05",
          title: "Comprehensive Summary Report",
          description: "Receive a detailed summary at the end of your interview, highlighting your strengths, areas for improvement, and actionable insights to enhance your preparation.",
          image: "/images/interview5.svg",
        },
      ],
    },
    scribe: {
      title: "How does it works?",
      description: "Building your personal brand and crafting professional content is as easy as 1-2-3:",
      steps: [
        {
          id: "01",
          title: "Hassle-Free Content Generation",
          description: "Start your journey with an effortless process. Provide basic inputs, and RiseON Scribe’s intuitive engine delivers customized, ready-to-use content in moments.",
          image: "/images/scribe1.svg",
        },
        {
          id: "02",
          title: "AI-Driven Content Precision",
          description: "Empower your messaging with AI-curated content designed to elevate your personal brand—be it blogs, social media posts, professional emails, or technical documentation.",
          image: "/images/scribe2.svg",
        },
        {
          id: "03",
          title: "Seamless Content Refinement",
          description: "Fine-tune every piece with dynamic customization capabilities, ensuring alignment with your professional tone and branding objectives.",
          image: "/images/scribe3.svg",
        },
        {
          id: "04",
          title: "Cross-Device Functionality",
          description: "Work without limits—access your projects anytime, anywhere, with seamless cross-platform compatibility for optimal flexibility.",
          image: "/images/scribe4.svg",
        },
        {
          id: "05",
          title: "Optimized Workflow for Enhanced Productivity",
          description: "Experience a streamlined, user-friendly interface that simplifies content creation, accelerates your branding goals, and saves time.",
          image: "/images/scribe5.svg",
        },
      ],
    },

   
    // Add more sections here (interview, counselor, etc.)
  };

  const sectionData = data[section];
  const [activeStep, setActiveStep] = useState(sectionData.steps[0]?.id || "");

  return (
    <div className="bg-[#FBF8F9] mx-auto px-4 sm:px-8 md:px-20 py-12">
      {/* Accordion for Mobile */}
      <div className="lg:hidden">
        {sectionData.steps.map((step) => (
          <div key={step.id} className="mb-4">
            <button
              onClick={() =>
                setActiveStep(activeStep === step.id ? "" : step.id)
              }
              className={`w-full text-left p-3 rounded-lg ${
                activeStep === step.id
                  ? "bg-[#2C3E50] text-white"
                  : "bg-gray-50 text-gray-800"
              } flex items-center justify-between`}
            >
              <span className="text-sm font-medium">{step.title}</span>
              {activeStep === step.id ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {activeStep === step.id && (
              <div className="p-4 bg-[#FBF8F9] shadow-lg rounded-b-lg flex flex-col items-center relative">
              <img
                src={step.image}
                alt={step.title}
                className="w-full object-cover mb-4"
              />
              {step.id === "03" && step.gif && (
                <img
                  src={step.gif}
                  alt="GIF overlay"
                  className="absolute top-[33px] right-[2.9rem] w-[10.3rem] h-[12.5rem] rounded-t-lg pointer-events-none"
                />
              )}
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
            
            )}
          </div>
        ))}
      </div>

      {/* Steps List and Content for Desktop */}
      <div className="hidden lg:flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 flex flex-col space-y-4 mb-8 lg:mb-0 xl:mt-5 lg:mt-2">
          <h2 className="text-[#161513] text-4xl font-medium lg:mb-0 text-center lg:text-left">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 !mt-2 text-sm md:text-base !mb-4 text-center lg:text-left">
            {sectionData.description}
          </p>
          {sectionData.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`xl:!mt-3 shadow-md w-full text-left p-3 md:p-4 lg:px-4 lg:py-4 xl:py-6 rounded-lg transition-all duration-300 flex items-center justify-between 
                ${
                  activeStep === step.id
                    ? "bg-[#2C3E50] text-white"
                    : "bg-white text-gray-800"
                }`}
              style={{
                transform:
                  activeStep === step.id ? "translateX(40px)" : "translateX(0)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm lg:text-sm xl:text-lg font-medium">
                  {`${String(index + 1).padStart(2, "0")}. ${step.title}`}
                </span>
              </div>
              <ChevronRight
                className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ml-2 ${
                  activeStep === step.id ? "text-white" : "text-#161513"
                }`}
              />
            </button>
          ))}
        </div>

        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 2px 10px 27px -11px",
          }}
          className="flex-1 bg-[#FBF8F9] rounded-[10px] overflow-hidden shadow-2xl h-full flex items-center justify-center flex-col lg:h-[490px] xl:h-[565px] "
        >
          {sectionData.steps.map(
            (step) =>
              activeStep === step.id && (
                <div
                  key={step.id}
                  className="transition-opacity duration-300 w-full flex flex-col items-center relative"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full object-contain pl-2 pt-2 pr-2 "
                  />
                   {step.id === "03" && step.gif && (
                    <img
                      src={step.gif}
                      alt="GIF overlay"
                      width={300}
                      className="absolute rounded-t-lg lg:top-[30px] xl:top-11 lg:right-[2rem] xl:right-[4rem] lg:w-[14rem] xl:w-[18.4rem] lg:h-[15.7rem] xl:h-[24.2rem] pointer-events-none"
                    />
                  )}
                  <div className="p-4">
                    <div className="bg-[#2C3E50] mx-auto rounded-lg p-4 md:p-4 text-white text-justify shadow-md max-w-3xl">
                      <p className="text-white font-medium text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
