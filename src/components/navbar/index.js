import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { base_url } from '@/utils/api';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isMounted, setIsMounted] = useState(false); // New state to track if the component has mounted
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMounted(true); // Set the mounted flag to true once the component has been mounted

    // Event listener to handle clicks outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };


    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const mainItems = [
    { name: 'RiseON Profile', link: "/product_profile", href: "/product_profile" },
    { name: 'RiseON Studio', link: "/product_studio", href: "/product_studio" },
    { name: 'RiseON Dashboard', link: "/product_dashboard", href: "/product_dashboard" },
    { name: 'RiseON Cover Letter', link: "/product_coverLetter", href: "/product_coverLetter" }
  ];
  
  const comingSoonItems = [
    { name: 'RiseON Interview', link: "/product_interview", href: "/product_interview" },
    { name: 'RiseON Scribe', link: "/product_scribe", href: "/product_scribe" },
    { name: 'RiseON Counsellor', link: baseUrl, href: baseUrl },
    { name: 'RiseON Job Boards', link: baseUrl, href: baseUrl }
  ];

  // Only render the dropdown if the component is mounted (client-side)
  if (!isMounted) {
    return null; // Return nothing during SSR, only render after mounting
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`inline-flex justify-center items-center text-[#2C3E50] leading-6 font-bold text-base hover:text-[#3498DB] ${isOpen ? "text-[#3498DB]" : ""}`}
        onClick={toggleDropdown}
      >
        <a className="flex items-center">
          Rise<span className="text-[#FF9B00] mr-1">ON</span> Suite
          <ChevronDown className="ml-1 h-5 w-5" /> 
        </a>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-4 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 pt-2"
          style={{ width: '340px', fontSize: '14px' }}
        >
          <div className="py-1 flex" role="menu" aria-orientation="vertical">
            <div className="w-1/2 border-r border-gray-200">
              {mainItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`block px-4 py-4 text-sm text-[#161513] hover:bg-[#2C3E50] hover:text-white ${
                    selectedItem === item.name ? 'bg-[#2C3E50] text-white' : ''
                  }`}
                  role="menuitem"
                  onClick={() => setSelectedItem(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="w-1/2">
              <Box
                className="absolute bottom-24 right-0 bg-[#FF9B00] text-[#FFFFFF] text-xs px-2 mr-1 rounded-full"
                style={{ fontSize: '10px', fontFamily: 'Roboto' }}
              >
                Coming Soon
              </Box>
              {comingSoonItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block px-4 py-4 text-sm text-[#161513] hover:bg-[#2C3E50] hover:text-white ${
                    selectedItem === item.name ? 'bg-[#2C3E50] text-white' : ''
                  }`}"
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="md:flex hidden flex-nowrap md:gap-2 lg:gap-6 md:ms-10 md:me-10">
      <p
        className="text-[#2C3E50] leading-6 font-normal md:text-sm lg:text-base flex flex-nowrap"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <DropdownMenu />
      </p>
      <p
        className="text-[#2C3E50] leading-6 font-normal md:text-sm lg:text-base flex-nowrap"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <Link href="/pricing">Pricing</Link>
      </p>
      <p
        className="text-[#2C3E50] leading-6 flex font-normal md:text-sm lg:text-base whitespace-nowrap"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <Link href="/about">About Us</Link>
      </p>

      <div className="relative inline-block">
        <p
          className="text-gray-400 md:text-sm lg:text-base flex whitespace-nowrap"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Knowledge Center
        </p>
        {/* <ComingSoon className="absolute right-[-40px] top-[-16px]"/> */}
        <Box
          className="absolute md:right-[-25px] lg:right-[-40px] top-[-16px] bg-[#FF9B00] text-[#FFFFFF] text-xs px-2 rounded-full"
          style={{ fontSize: '12px', fontFamily: 'Roboto' }}
        >
          Coming Soon
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
