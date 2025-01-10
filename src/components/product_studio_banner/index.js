import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductStudioBanner = ({ section }) => {
  // Define bannerData for each section
  const bannerData = {
    profile: {
      logoSrc: "/images/RiseOnProfile.svg",
      tagline: "Your AI-Powered Interactive Resume Showcase",
      description:
        "“Transform your professional profile into a dynamic, AI-enhanced cv website that makes an impact.”",
      features: [
        {
          iconSrc: "/images/profileBlog1.svg",
          title: "Publish and Showcase Your Professional Identity",
          description:
            "Turn your resume and profile into an elegant, responsive website that’s SEO-optimized and accessible across all devices. Make your professional journey stand out with ease.",
        },
        {
          iconSrc: "/images/profileBlog2.svg",
          title: "Profile IQ: Smart AI Chatbot for Instant Answers",
          description:
            "Enhance engagement with Profile IQ, your AI-powered assistant that provides intelligent answers about your profile, achievements, and expertise. Impress potential employers and collaborators with a highly interactive experience.",
        },
        {
          iconSrc: "/images/profileBlog3.svg",
          title: "Dynamic & Interactive Features",
          description: [
            "Responsive Website Design",
            "Multimedia Integration",
            "SEO Optimization",
            "Easy Sharing",
          ],
        },
      ],
      previewImageSrc: "/images/profileHero.svg",
      previewImageAlt: "Elevate Your Professional Branding",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },
    studio: {
      logoSrc: "/images/riseon_logo.svg",
      tagline: "Your AI-Powered Profile Builder",
      description:
        "“Transform your professional identity with AI-powered tools for effortless profile creation and impactful content.”",
      features: [
        {
          iconSrc: "/images/psblog1.svg",
          title: "Instant AI-Generated Profiles",
          description:
            "Create standout, ATS-optimized profiles in just 2 minutes. Leverage AI-driven suggestions to craft professional, role-specific profiles that make an unforgettable impression.",
        },
        {
          iconSrc: "/images/psblog2.svg",
          title: "Easy-to-Use Profile Builder",
          description:
            "Build and personalize striking profiles effortlessly. Highlight your achievements and skills with an intuitive interface, adding multimedia elements like images and videos.",
        },
        {
          iconSrc: "/images/psblog3.svg",
          title: "Dynamic Profile Customization",
          description:
            "Elevate your professional identity with customizable templates and design options. Tailor every section to reflect your unique strengths and experiences.",
        },
      ],
      previewImageSrc: "/images/prodhero.svg",
      previewImageAlt: "Interactive Resume Builder at Your Fingertips",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },
    dashboard: {
      logoSrc: "/images/RiseOnDashboard.svg",
      tagline: "Your AI-Powered Career Management Hub",
      description:
        "“Effortlessly Manage Profiles, Tools, and Insights in One Centralized Platform.”",
      features: [
        {
          iconSrc: "/images/dashboardBlog1.svg",
          title: "Streamlined Profile Management",
          description:
            "Create, edit, and manage up to three distinct profiles tailored to different job roles. Optimize and publish your profiles to align with specific career goals.",
        },
        {
          iconSrc: "/images/dashboardBlog2.svg",
          title: "In-Depth Analytics",
          description:
            "Monitor profile views, PDF downloads, and engagement metrics to track your performance.",
        },
        {
          iconSrc: "/images/interviewBlog3.svg",
          title: "Comprehensive and Interactive Features",
          description: [
            "Centralized Alerts",
            "Account Management",
            "AI Tool Integration",
          ],
        },
      ],
      previewImageSrc: "/images/dashboardHero.svg",
      previewImageAlt: "Analytics at your fingertips",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },
    coverletter: {
      logoSrc: "/images/RiseOnCoverletter.svg",
      tagline: "Your AI-Powered Personalized Cover Letter Platform",
      description:
        "“Create Professional, Tailored Cover Letters with Ease and Impact.”",
      features: [
        {
          iconSrc: "/images/coverletterBlog1.svg",
          title: "Tailored Cover Letter Creation",
          description:
            "Generate personalized cover letters aligned with your profile, target role, company, and job description. Create compelling and focused applications that stand out.",
        },
        {
          iconSrc: "/images/coverletterBlog2.svg",
          title: "AI-Driven Personalization",
          description:
            "Refine and adjust the AI-generated content to align with specific requirements and personal style.",
        },
        {
          iconSrc: "/images/interviewBlog3.svg",
          title: "Comprehensive and Interactive Features",
          description: [
            "Effortless PDF Export",
            "Predefined Formatting with Customization",
            "Cross-Platform Compatibility",
          ],
        },
      ],
      previewImageSrc: "/images/coverletterHero.svg",
      previewImageAlt: "Craft your next cover letter with confidence",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },
    interview: {
      logoSrc: "/images/RiseOnInterview.svg",
      tagline: "Your AI-Powered Mock Interview Platform",
      description:
        "“Prepare for Success with AI-Driven Mock Interviews Designed to Make an Impact.”",
      features: [
        {
          iconSrc: "/images/interviewBlog1.svg",
          title: "Tailored Mock Interview Experience",
          description:
            "Simulate real interview scenarios with mock interviews customized to your profile, target role, company, and job description. Practice with contextual and highly relevant questions to ensure you’re prepared for any challenge.",
        },
        {
          iconSrc: "/images/interviewBlog2.svg",
          title: "Mimic AI: Personalized Suggestions for Answers",
          description:
            "Enhance your preparation with Mimic AI, your virtual assistant that provides detailed feedback and suggests refined, professional responses tailored to your answers. Impress interviewers with confident and well-structured replies.",
        },
        {
          iconSrc: "/images/interviewBlog3.svg",
          title: "Comprehensive and Interactive Features",
          description: [
            "Answer Feedback and Analysis",
            "Multi-Device Accessibility",
            "Interview Logs",
          ],
        },
      ],
      previewImageSrc: "/images/prodhero.svg",
      previewImageAlt: "Elevate Your Interview Preparation Today!",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },
    scribe: {
      logoSrc: "/images/RiseOnScribe.svg",
      tagline:
        "Your AI-Driven Hub for Personal Branding and Strategic Content Creation",
      description:
        "“Transform the way you craft, refine, and showcase your professional narrative.”",
      features: [
        {
          iconSrc: "/images/scribeBlog1.svg",
          title: "Precision Content Development",
          description:
            "Generate tailored content across diverse formats, including thought-leadership blogs, dynamic social posts, contextual emails, and technical documentation, to position yourself as a standout professional.",
        },
        {
          iconSrc: "/images/profileBlog2.svg",
          title: "AI-Enhanced Branding Strategy",
          description:
            "Harness advanced AI insights to curate impactful messaging and build a cohesive personal brand that resonates with your target audience and career objectives.",
        },
        {
          iconSrc: "/images/scribeBlog3.svg",
          title: "Feature-Rich and Seamlessly Integrated Tools",
          description: [
            "Versatile Content Solutions",
            "Effortless Customization",
            "Omni-Channel Access",
          ],
        },
      ],
      previewImageSrc: "/images/scribeHero.svg",
      previewImageAlt: "Elevate your storytelling and branding journey",
      ctaText: "Get Started",
      ctaLink: "#get-started",
    },

    // Add other sections similarly...
  };

  // Get the data for the current section
  const currentBannerData = bannerData[section];

  return (
    <div className="xl:min-h-screen bg-black orange_dots text-white p-4 xl:p-16 lg:p-4">
      {/* Title Section */}
      <div className="container mx-auto pt-8 pb-8 md:pt-16 md:pb-16 px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center relative lg:mb-4">
          {/* Logo Column */}
          <div className="flex justify-center items-center col-span-1 md:col-span-5 md:col-start-2 text-center md:text-left">
            <Image
              src={currentBannerData.logoSrc}
              width={150}
              height={50}
              className="h-auto w-[120px] md:w-[390px] ms-12"
              alt="Logo"
            />
          </div>

          {/* Tagline Column */}
          <div className="col-span-1 md:col-span-7 md:col-start-7 text-center md:text-left xl:absolute -left-20">
            <h2 className="text-xl md:text-3xl text-[#FF9B00] xl:mt-2 px-8 text-center">
              "{currentBannerData.tagline}"
            </h2>
          </div>
        </div>

        {/* Full Width Description */}
        <div className="col-span-1 md:col-span-12 mt-4 md:mt-0">
          <p className="text-white text-center text-lg md:text-2xl px-2">
            {currentBannerData.description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Features Column */}
          <div className="space-y-8 xl:space-y-12 lg:space-y-6">
            {currentBannerData.features.map((feature, index) => (
              <div key={index} className="flex gap-4 !mt-7 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 md:w-12 md:h-12 flex items-start justify-center">
                    <Image
                      src={feature.iconSrc}
                      width={30}
                      height={30}
                      alt={feature.title}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="xl:text-lg lg:text-base md:text-xl font-semibold mb-2 md:mb-3">
                    {feature.title}
                  </h3>

                  {/* Conditional rendering for description */}
                  {Array.isArray(feature.description) ? (
                    <ul className="text-gray-300 text-sm xl:text-base list-disc pl-5">
                      {feature.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-sm xl:text-base">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <a
              href={currentBannerData.ctaLink}
              className="italic inline-flex items-center bg-[#3498DB] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow transition w-full md:w-auto justify-center"
            >
              {currentBannerData.ctaText}
              <ChevronRight className="ml-2" size={18} />
            </a>
          </div>

          {/* Preview Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="rounded-lg overflow-hidden px-4 lg:w-[459px] xl:w-[580px] md:px-8 lg:px-4">
              <Image
                src={currentBannerData.previewImageSrc}
                width={580}
                height={300}
                alt={currentBannerData.previewImageAlt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="bottom-4 left-0 right-0 text-center">
                <p className="text-white pt-5">
                  {currentBannerData.previewImageAlt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStudioBanner;
