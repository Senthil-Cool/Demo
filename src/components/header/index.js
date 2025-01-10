import React, { useState, useEffect, useRef } from "react";
import { IconButton, Menu, MenuItem, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Tally3, ChevronDown, Box } from "lucide-react"; // Chevron icon for the dropdown toggle
import Navbar from "../navbar";
import Link from "next/link";
import { useUser } from "@/context";
import Model from "../models";
import CloseIcon from "@mui/icons-material/Close";
import ComingSoon from "../commingsoon";
// Importing the Model component
const apiBaseUrl =
  process.env.NEXT_PUBLIC_URL || "https://riseon.happypeopleai.com";
const apiBaseUrlSignup = process.env.NEXT_PUBLIC_SIGNUP_URL;

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [waitListModel, setWaitListModel] = useState(false); // State to handle modal open/close
  const [riseOnDropdown, setRiseOnDropdown] = useState(false); // State for RiseON Suite dropdown
  const { user, userToken, setAuthStatus, setUser, setUserToken } = useUser(); //my changes
  const mobileMenuRef = useRef(null); // Ref to mobile menu container
  const [anchorEl, setAnchorEl] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Logout function
  // const handleLogout = () => {
  //   document.cookie = `token=; Max-Age=0; path=/; SameSite=Lax;`; // Clear the token cookie
  //   localStorage.removeItem("access_token"); // Clear from localStorage
  //   sessionStorage.removeItem("access_token"); // Clear from sessionStorage
  //   setAuthStatus(`logout ${new Date()}`);
  // };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    // document.cookie = `token=; Max-Age=0; path=/; SameSite=Lax;`
    document.cookie = `token=; Max-Age=0; path=/; domain=.happypeopleai.com; Secure; SameSite=Lax`;
    setUser(null); // Clear the user state
    setUserToken(""); // Clear the token state
    setAuthStatus(`Logout successfully ${new Date()}`);
  };

  // Close mobile menu and modal on scroll start
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setMobileMenu(false);  // Close mobile menu on scroll
  //         setWaitListModel(false);  // Close modal on scroll
  //     };

  //     // Attach scroll event listener when mobile menu or modal is open
  //     if (mobileMenu || waitListModel) {
  //         window.addEventListener('scroll', handleScroll);
  //     } else {
  //         window.removeEventListener('scroll', handleScroll);
  //     }

  //     return () => {
  //         // Clean up event listener when component unmounts or menu/modal closes
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, [mobileMenu, waitListModel]);

  //my changes
  useEffect(() => {
    // This effect ensures the UI updates whenever userToken changes
    if (!userToken) {
      setMobileMenu(false); // Optionally close mobile menu on logout
    }
  }, [userToken]);

  const navigateTo = (path) => {
    window.location.href = `${apiBaseUrl}${path}`;
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action, event) => {
    handleMenuClose(); // Close the dropdown
    const isNewTab = event.ctrlKey || event.metaKey; // Check if Ctrl or Cmd is pressed

    let url = "";
    if (action === "Dashboard") {
      url = `${apiBaseUrl}dashboard`;
    } else if (action === "My Account") {
      url = `${apiBaseUrl}account`;
    }

    if (url) {
      if (isNewTab) {
        // Open in a new tab
        window.open(url, "_blank", "noopener noreferrer");
      } else {
        // Open in the same tab
        window.location.href = url;
      }
    } else if (action === "Sign Out") {
      handleLogout();
    }
  };

  return (
    <header
      className={`w-full fixed top-0 bg-white z-50 px-4 lg:px-0 ${
        waitListModel ? "border-b border-gray-700" : ""
      }`}
    >
      {/* Modal component */}
      <Model
        onOpen={() => setWaitListModel(true)}
        onClose={() => setWaitListModel(false)}
        isOpen={waitListModel}
      />

      {/* Main Header Section */}
      <div className="flex w-full py-6 md:py-8 justify-between h-[84px] items-center mx-auto lg:max-w-[calc(94%)]">
        <div className="flex gap-2 w-fit items-center">
          <a href={baseUrl}>
            <img
              src={"/images/HPA_Logo.png"}
              alt="Logo"
              className="w-[32px] h-[32px] lg:w-[36.34px] lg:h-[36.34px]"
            />
          </a>
          <a href={baseUrl}>
            <img
              src={"/images/HPA_Name.png"}
              alt="Name"
              className="w-auto h-[20px] lg:h-[21.8px]"
            />
          </a>
        </div>

        <Navbar />

        <div className="md:flex hidden space-x-2">
          {/*<button className="bg-[#2C3E50] text-white px-6 py-2 rounded-full font-medium text-sm" onClick={() => setWaitListModel(true)}>
                        Join the waitlist
                     </button>*/}
          {/* Disabled Sign Up Button */}

          {userToken ? (
            <div className="flex items-center gap-4 border-2 border-[#3498DB] rounded-full p-2 w-[160px] h-[45px] md:h-[40px] bg-white">
              <div className="flex items-center cursor-pointer w-full justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/userProfileImg.png"
                    alt="Profile Icon"
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <p className="!text-[16px] font-semibold ml-3 md:flex hidden">
                    {/* { user?.first_name
                                     ? user.first_name.length > 8
                                     ? `${user.first_name.slice(0, 8)}..`
                                     : user.first_name
                                     : "User"
                                } */}
                                {/* //my changes */}
                    {user?.first_name && user.first_name.trim()
                      ? user.first_name.length > 8
                        ? `${user.first_name.slice(0, 8)}..`
                        : user.first_name
                      : "User"}
                  </p>
                </div>

                <ArrowDropDownIcon
                  onClick={handleMenuOpen}
                  className="h-[28px] w-[25px] text-[#3498DB]"
                />
              </div>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                disableScrollLock
                disablePortal
                sx={{
                  "& .MuiPaper-root": {
                    width: 150,
                    position: "fixed",
                    zIndex: 1000,

                    marginTop: 2,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={(event) => handleMenuItemClick("Dashboard", event)}
                  className="!font-lora text-[16px]"
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemClick("My Account", event)}
                  className="!font-lora text-[16px]"
                >
                  My Account
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={(event) => handleMenuItemClick("Sign Out", event)}
                  className="!font-lora text-[16px]"
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-2">
              <Link href={`${apiBaseUrlSignup}`}>
                <button className="bg-[#3498DB] text-white px-4 py-2 md:px-3 lg:px-6 md:py-1 lg:py-2 rounded-full font-medium text-xs md:text-sm ms-4 me-3 md:me-0 md:ms-0 text-nowrap">
                  Sign Up
                </button>
              </Link>

              <button
                className="bg-white border-2 border-[#3498DB] text-[#3498DB] px-6 py-2 md:px-3 lg:px-6 md:py-1 lg:py-2 !rounded-full font-medium text-sm"
                onClick={() => navigateTo("/login")}
              >
                Login
              </button>
            </div>
          )}
        </div>

        <div
          className="text-[#2C3E50] rotate-90 md:hidden flex z-50"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <Tally3 className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        // className={`fixed left-8 top-[84px] w-full md:w-max bg-white z-40 shadow-lg flex flex-col md:hidden transition-all duration-500 ease-in-out transform  ${
        //   mobileMenu
        //     ? "translate-y-0 opacity-100 -mx-8"
        //     : "-translate-y-full opacity-0 mt-[84px]"
        // }`}
        className={`fixed left-8 top-[84px] w-full md:w-max bg-white z-40 shadow-lg flex flex-col md:hidden transition-all duration-300 ease-in-out transform ${
          mobileMenu
            ? "translate-y-0 opacity-100 -mx-8"
            : "-translate-y-full opacity-0 mt-[84px]"
        } ${riseOnDropdown ? "overflow-y-auto max-h-[558px]" : ""}`}
      >
        <ul className="flex flex-col items-start gap-4 mb-4 border-t border-[#DDDDDD]">
          {/* RiseON Suite with dropdown */}

          <li className="w-full px-6">
            <div className="flex flex-grow justify-center sm:justify-start">
              <button
                className="w-full sm:w-auto bg-white border-2 border-[#3498DB] text-[#3498DB] py-2 !rounded-full font-medium text-sm mt-4 "
                onClick={() => navigateTo("/login")}
              >
                Log In
              </button>
            </div>
          </li>
          <li className="w-full px-6 border-b pb-4 md:pb-0 border-[#DDDDDD]">
            <div className="flex flex-grow justify-center sm:justify-start">
              <button
                className="bg-[#3498DB] w-full sm:w-auto border-2 border-[#3498DB] text-white py-2 !rounded-full font-medium text-sm "
                onClick={() => navigateTo("/login")}
              >
                Sign Up
              </button>
            </div>
          </li>
          <li className="w-full">
            <div
              className={`flex justify-between items-center leading-6 font-normal text-base cursor-pointer px-6 
                ${
                  riseOnDropdown
                    ? "text-[#3498DB]"
                    : "text-[#2C3E50] hover:text-[#3498DE]"
                }`}
              onClick={() => setRiseOnDropdown(!riseOnDropdown)}
            >
              <span>
                Rise<span className="text-[#FF9B00]">ON</span> Suite
              </span>
              <ChevronDown
                className={`transform ${riseOnDropdown ? "rotate-180" : ""}`}
              />
            </div>
            {/* Submenu that pushes content down */}
            {riseOnDropdown && (
              <ul
                className="mt-2 bg-[#2C3E50] text-white w-full px-4 py-1 space-y-4"
                style={{
                  fontFamily: "sans-serif, Inter",
                  fontSize: "14px",
                  lineHeight: "28px",
                }}
              >
                <li>
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 mt-2 rounded transition"
                  >
                    RiseOn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/product_studio"
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition"
                  >
                    RiseOn Studio
                  </a>
                </li>
                <li>
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition"
                  >
                    RiseOn Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition"
                  >
                    RiseOn Coverletter
                  </a>
                </li>
                <li className="flex items-center justify-between relative">
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition opacity-30"
                  >
                    RiseON Interview
                  </a>
                  <ComingSoon className="absolute" />
                </li>
                <li className="flex items-center justify-between relative">
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition opacity-30"
                  >
                    RiseON Counsellor
                  </a>
                  <ComingSoon className="absolute" />
                </li>
                <li className="flex items-center justify-between relative">
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition opacity-30"
                  >
                    RiseON Writer
                  </a>
                  <ComingSoon className="absolute" />
                </li>
                <li className="flex items-center justify-between relative pb-4">
                  <a
                    href={baseUrl}
                    className="block hover:bg-white hover:text-black px-4 py-1 rounded transition opacity-30"
                  >
                    RiseON Job Boards
                  </a>
                  <ComingSoon className="absolute" />
                </li>
              </ul>
            )}
          </li>

          <li className="w-full px-6">
            <a
              href="/pricing"
              className="text-[#2C3E50] leading-6 font-normal text-base"
            >
              Pricing
            </a>
          </li>
          <li className="w-full px-6">
            <a
              href="/about"
              className="text-[#2C3E50] leading-6 font-normal text-base"
            >
              About Us
            </a>
          </li>

          <li className="w-full px-6 flex items-center justify-between relative">
            <a
              href="/about"
              className="text-[#2C3E50] opacity-30 leading-6 font-normal text-base"
            >
              Knowledge Center
            </a>
            <ComingSoon className="absolute " />
          </li>
          {/* <li>
                        <a href="#" className="text-gray-400 leading-6 font-normal text-base">Knowledge Center</a>
                    </li> */}
          {/* <li>
                        <button
                            className="bg-[#2C3E50] text-white px-6 py-2 rounded-full font-medium text-sm mb-4"
                            onClick={() => {
                                setWaitListModel(true);
                                setMobileMenu(false); // This will close the dropdown on mobile after the button click
                            }}
                        >
                            Join the waitlist
                        </button>
                    </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
