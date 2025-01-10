import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import toast from "react-hot-toast";
import Link from "next/link";
import { useUser } from "@/context";
import { postRequest } from "@/utils/api";

const emailValidator = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);
  if (!email) {
    return "Please enter email";
  }
  if (!isValid) {
    return "Invalid email address";
  }
}; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useUser(0);

  const onSubmit = async () => {
    // Validate email
    const error = emailValidator(email);
    if (error) {
      setEmailError(error);
      toast.error(error);
      return;
    }

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Send email to waitlist endpoint
      const res = await postRequest(
        "/addWaitlist",
        { email },
        { Authorization: `Bearer ${token}` }
      );

      // Success handling
      toast.success("Email added to waitlist successfully!");
      setEmail(""); // Clear input
      setEmailError(""); // Clear any previous errors
    } catch (err) {
      // Error handling
      if (err.response) {
        // Server responded with an error
        toast.error(err.response.data.message || "Failed to add email");
        console.error(
          "Error response:",
          err.response.data,
          err.response.status
        );
      } else if (err.request) {
        // Request was made but no response received
        toast.error("No response from server. Please try again.");
        console.error("Request error:", err.request);
      } else {
        // Error in request setup
        toast.error("An unexpected error occurred");
        console.error("Error:", err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="bg-black text-white -my-4"
      style={{ fontSize: "14px", lineHeight: "21px", fontWeight: 400 }}
    >
      <div className=" xl:max-w-[calc(90%)] lg:max-w-[calc(95%)] lg:mx-auto md:m-4 gap-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="flex-1 mt-6 px-4 xl:px-4">
            <Image
              src="/images/riseon_logo.svg"
              width={300}
              height={80}
              alt="RiseON Logo"
              className="h-20 w-72 -mx-6"
            />
            <div className="w-full max-w-[430px]">
              <p className="text-white mb-4 sm:pr-16 lg:pr-0 xl:pr-16">
                Stay ahead with the latest AI insights, tools, and updates about
                RiseON Suite. Enter your email to subscribe!
              </p>
              <div className="grid grid-cols-[2fr_1fr] gap-0 w-full max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmailError("");
                    setEmail(e.target.value);
                  }}
                  className="p-2 rounded-l-md border-none outline-none text-black w-full"
                  placeholder="Email"
                />
                <button
                  onClick={onSubmit}
                  disabled={isSubmitting}
                  className={`text-white py-2 rounded-r-md w-full ${
                    isSubmitting ? "bg-gray-500" : "bg-[#3498DB]"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>
          </div>

          {/* Rest of the footer remains the same */}
          <div className="md:flex xs:w-full flex-wrap md:gap-3 lg:gap-16 lg:px-0 px-5 md:px-4 md:mt-4">
            {/* Products Section */}
            <div>
              <h3
                className="text-[#FF9B00]  font-semibold md:mt-0 lg:mt-8 xs:mt-8 py-4"
                style={{ fontSize: "16px" }}
              >
                Products
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="" target="_blank">
                    RiseON Profiles
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Studio
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Cover Letter
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className='mr-10 md:mr-0'>
              <h3 className="invisible md:flex hidden mt-0 md:mt-8 py-4">Invisible Header</h3>
              <ul className="space-y-2 text-gray-400 pr-4 -pl-2">
                <li>RiseON Interview</li>
                <li>RiseON Counsellor</li>
                <li>RiseON Writer</li>
                <li>RiseON Job Boards</li>
              </ul>
            </div> */}

            <div className="mr-10 md:mr-0 mt-4 lg:mt-0 md:mt-4">
              <h3 className="invisible lg:flex hidden mt-0 md:mt-8 py-4">
                Invisible Header
              </h3>
              <ul className="space-y-2 text-white opacity-30 pr-4 -pl-2">
                <li>
                  <Link href="" target="_blank">
                    RiseON Interview
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Counsellor
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Writer
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    RiseON Job Boards
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" md:mr-0 lg:ml-0 xl:ml-10">
              <h3
                className="text-[#FF9B00]  font-semibold mt-0 lg:mt-8 py-4"
                style={{ fontSize: "16px" }}
              >
                Knowledge
              </h3>
              <ul className="space-y-2 text-white">

                <li><Link href="" target='_blank'>Blogs</Link></li>
                <li><Link href="" target='_blank'>How to Guides</Link></li>
                <li><Link href="" target='_blank'>User Manual</Link></li>
              </ul>
            </div>

            <div className="mr-24 md:mr-0">
              <h3
                className="text-[#FF9B00] font-semibold mt-0 lg:mt-8 py-4"
                style={{ fontSize: "16px" }}
              >
                Support
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/pricing#pricingdetails" target="_blank">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" target="_blank">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="xl:ml-4">
              <h3
                className="text-[#FF9B00] font-semibold mt-0 lg:mt-8 py-4 "
                style={{ fontSize: "16px" }}
              >
                Company
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/about" target="_blank">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" target="_blank">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms_and_conditions" target="_blank">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white text-black flex flex-col lg:flex-row justify-between md:items-center py-8 md:py-4 mt-8 px-5 md:px-20 mb-4">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/HPA_Logo.png"
              alt="Logo"
              className="w-9 h-9 mb-4 md:mb-0"
            />
          </Link>
          <Link href="/">
            <img
              src="/images/HPA_Name.png"
              alt="Name"
              className="h-5 ml-2 mb-4 md:mb-0"
            />
          </Link>
        </div>

        <p className="text-sm text-[#161513] mt-0 md:mt-3 mb-4 md:mb-4">
          &copy; 2024 Happy People AI, LLP. All Rights Reserved.
        </p>

        <div className="flex gap-4 items-center">
          <div className="social-icons flex space-x-4 text-[#2C3E50]">
            <a
              href="https://www.facebook.com/HappyPeopleAi/"
              target="_blank"
              className="text-gray-800"
            >
              <img className="h-6 w-6" src="/images/Facebook.png" alt="icon image"/>
              {/* <Facebook fontSize="large" /> */}
            </a>
            <a
              href="https://www.linkedin.com/company/happy-people-ai/mycompany/"
              target="_blank"
              className="text-gray-800"
            >
              <img className="h-6 w-6" src="/images/LinkedIn.png" alt="icon image"/>
              {/* <LinkedIn fontSize="large" /> */}
            </a>
            <a
              href="https://www.instagram.com/happypeopleai"
              target="_blank"
              className="text-gray-800"
            >
              <img className="h-6 w-6" src="/images/Instagram.png" alt="icon image"/>
              {/* <Instagram fontSize="large" /> */}
            </a>
            <a
              href="https://x.com/happypeopleai"
              target="_blank"
              className="text-gray-800"
            >
              <img className="h-6 w-6" src="/images/Twitter.png" alt="icon image"/>
              {/* <Twitter fontSize="large" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
