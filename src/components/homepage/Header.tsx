"use client";
import {
  Search,
  Menu,
  Moon,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  X,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchBar from "./search-bar";
import ModeToggle from "./ModeToggle";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    "সর্বশেষ",
    "জাতীয়",
    "রাজনীতি",
    "সারাদেশ",
    "বিশ্ব",
    "খেলা",
    "শিক্ষা",
    "স্বাস্থ্য",
    "মতামত",
    "ধর্ম",
    "আইটি",
  ];

  const extraCategories =  [
    "সর্বশেষ",
    "জাতীয়",
    "রাজনীতি",
    "সারাদেশ",
    "বিশ্ব",
    "খেলা",
    "শিক্ষা",
    "স্বাস্থ্য",
    "মতামত",
    "ধর্ম",
    "আইটি",
  ];
  const socialLinks = {
    facebook_url: "https://www.facebook.com",
    instagram_url: "https://www.instagram.com",
    twitter_url: "https://www.twitter.com",
    linkedin_url: "https://www.linkedin.com",
    youtube_url: "https://www.youtube.com",
  };

  return (
    <>
      <header className="bg-background text-foreground px-2 relative z-50">
        {/* Top bar */}
        <div className="">
          <div className=" mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Left side - Watch live (Desktop) / Logo (Mobile) */}
              <div className="flex items-center gap-2">
                {/* Desktop: Watch live */}
                <div className="hidden md:flex items-center gap-1 cursor-pointer">
                  <div className="h-5 w-5 bg-red-500 rounded-full "></div>
                  <span className="text-sm font-medium hover:text-[#FF0000] duration-200">
                    Watch live
                  </span>
                </div>

                {/* Mobile: Logo */}
                <div
                  onClick={() => router.push("/")}
                  className="md:hidden cursor-pointer"
                >
                  <img src="/logo.png" alt="" className="w-36 object-contain" />
                </div>
              </div>

              {/* Logo - Center (Desktop only) */}
              <div
                onClick={() => router.push("/")}
                className="hidden md:block  absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
              >
                <img src="/logo.png" alt="" className="w-28 object-contain" />
              </div>

              {/* Right side - Icons */}
              <div className="flex items-center gap-3">
                {/* Mobile: Watch live + Menu */}
                <div className="md:hidden flex items-center gap-3">
                 
                  <ModeToggle />
                  <Search
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className=" cursor-pointer"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="focus:outline-none"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-7 h-7 cursor-pointer" />
                    ) : (
                      <Menu className="w-7 h-7  cursor-pointer" />
                    )}
                  </button>
                </div>

                {/* Desktop: Social icons + Dark mode + Search */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="hidden lg:flex items-center gap-3">
                    <Facebook
                      onClick={() =>
                        window.open(`${socialLinks.facebook_url}`, "_blank")
                      }
                      className="w-5 h-5  hover:text-blue-600 cursor-pointer"
                    />
                    <Instagram
                      onClick={() =>
                        window.open(`${socialLinks.instagram_url}`, "_blank")
                      }
                      className="w-5 h-5  hover:text-pink-600 cursor-pointer"
                    />
                    <Twitter
                      onClick={() =>
                        window.open(`${socialLinks.twitter_url}`, "_blank")
                      }
                      className="w-5 h-5  hover:text-blue-400 cursor-pointer"
                    />
                    <Linkedin
                      onClick={() =>
                        window.open(`${socialLinks.linkedin_url}`, "_blank")
                      }
                      className="w-5 h-5 hover:text-blue-700 cursor-pointer"
                    />
                    <Youtube
                      onClick={() =>
                        window.open(`${socialLinks.youtube_url}`, "_blank")
                      }
                      className="w-5 h-5 hover:text-red-600 cursor-pointer"
                    />
                  </div>
                  <ModeToggle />
                  <Search
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="w-5 h-5  cursor-pointer"
                  />
                </div>
                {isMobileMenuOpen && (
                  <div
                    className="md:hidden absolute top-full left-0 right-0 w-full bg-white dark:bg-black  dark:text-white border-t border-gray-200 shadow-md z-50"
                    style={{
                      animation:
                        "0.2s ease-out 0s 1 normal forwards running slideDown",
                    }}
                  >
                    <div className="px-4 py-3">
                      <div className="grid grid-cols-2 space-y-3">
                        {navigationItems?.map((item, index) => (
                          <p
                            key={index}
                            onClick={() => {router.push(`/categories/${item}`); setIsMobileMenuOpen(false)}}
                            className="text-base text-center font-medium  hover:text-red-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100"
                          >
                            {item}
                          </p>
                        ))}
                        {extraCategories?.map((category, index) => (
                          <p
                            key={`extra-${index}`}
                            onClick={() => {router.push(`/categories/${category}`); setIsMobileMenuOpen(false)}}
                            className="text-base text-center font-medium  hover:text-red-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100"
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <SearchBar
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>

        {/* Navigation - Hidden on mobile, with hamburger menu on desktop */}
        <div className="hidden md:block bg-[#FFE5E5] text-black  rounded-xl ">
          <div className=" mx-auto px-4">
            <div className="flex items-center justify-center gap-6 py-2">
              <div className="flex items-center md:justify-start lg:justify-center gap-6 ">
                {navigationItems.map((item, index) => (
                  <p
                    key={index}
                    onClick={() => {router.push(`/categories/${item}`)}}
                    className="lg:text-lg font-medium font-bangla text-black hover:cursor-pointer hover:text-red-600 whitespace-nowrap transition-colors cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              {/* Hamburger menu in red bar on desktop */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-1 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle categories menu"
              >
                <Menu
                  className={` lg:text-lg cursor-pointer ml-1 transition-transform duration-200 ${
                    isMenuOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className="absolute top-full left-0 right-0  w-full px-4 rounded-2xl rounded-t-none bg-white dark:bg-black text-black dark:text-white  border-t border-gray-100 shadow-md z-50"
              style={{
                animation:
                  "0.2s ease-out 0s 1 normal forwards running slideDown",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {extraCategories?.map((category, index) => (
                    <p
                      key={index}
                      onClick={() => {router.push(`/categories/${category}`); setIsMenuOpen(false)}}
                      className="text-sm text-center font-medium hover:text-red-600 cursor-pointer transition-colors duration-200 py-2"
                    >
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
