"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  X,
  Clock,
  ArrowRight,
  Sparkles,
  Flame,
  SearchX,
} from "lucide-react";
import { Button } from "../ui/button";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
    "করোনা ভাইরাস",
    "বাংলাদেশ ক্রিকেট",
    "ঢাকা আবহাওয়া",
  ]);
  const [trendingSearches] = useState([
    "নির্বাচন ২০২৪",
    "বিশ্বকাপ ফুটবল",
    "অর্থনীতি",
  ]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Smart height adjustment
  useEffect(() => {
    const adjustHeight = () => {
      if (mobileContainerRef.current) {
        const windowHeight = window.innerHeight;
        const maxHeight = Math.min(windowHeight * 0.9, 700); // 90% of window height or max 700px
        mobileContainerRef.current.style.maxHeight = `${maxHeight}px`;
      }

      if (desktopContainerRef.current) {
        const windowHeight = window.innerHeight;
        const maxHeight = Math.min(windowHeight * 0.7, 500); // 70% of window height or max 500px
        desktopContainerRef.current.style.maxHeight = `${maxHeight}px`;
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [isOpen]);

  //  DO MUTATION HERE

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      onClose();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    console.log("Searching for:", suggestion);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile: Full Screen Overlay */}
      <div className="md:hidden fixed inset-0 z-50 flex items-start justify-center pt-4 font-bangla ">
        {/* Mobile Backdrop */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={onClose}
          style={{
            animation: "fadeIn 0.2s ease-out forwards",
          }}
        />

        {/* Mobile Search Container */}
        <div
          ref={mobileContainerRef}
          className="relative z-50  w-[95%] rounded-2xl bg-background text-foreground shadow-2xl overflow-hidden"
          style={{
            animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {/* Mobile Search Header */}
          <div className="  px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold  flex items-center gap-2">
                <Sparkles
                  className="w-5 h-5 text-red-500"
                  style={{ animation: "pulse 2s infinite" }}
                />
                <span>অনুসন্ধান করুন</span>
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSearch} className="relative group">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Search
                    className="w-5 h-5  group-focus-within:text-red-500 transition-colors duration-300"
                    style={{
                      animation: isOpen ? "searchPulse 1s ease-out" : "none",
                    }}
                  />
                </div>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="সংবাদ খুঁজুন..."
                  className="w-full h-14 pl-12 pr-24 text-lg   border-2 border-gray-200 rounded-xl shadow-sm focus:border-red-400 focus:shadow-md outline-none transition-all duration-300 "
                />
              </div>
            </form>
            <div className="flex items-center w-full justify-center gap-5 mt-3">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className=" px-3 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white hover:bg-red-60  flex items-center gap-1 rounded-md text-sm transition-all duration-200"
                >
                  <SearchX />
                  <span>মুছে ফেলুন</span>
                </button>
              )}
              {searchQuery && (
                <button
                  type="submit"
                  disabled={!searchQuery.trim()}
                  className={` px-3 py-3 rounded-md text-sm transition-all duration-200 flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white hover:bg-্পডডস-600`}
                >
                  <Search />
                  <span>অনুসন্ধান</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Dropdown Style (like navigation menu) */}
      <div
        ref={desktopContainerRef}
        className="hidden md:block absolute top-full right-0 w-96 bg-background text-foreground  border border-gray-200 rounded-lg shadow-lg z-50 mt-2 overflow-hidden font-bangla"
        style={{
          animation: "slideDown 0.2s ease-out forwards",
        }}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium  flex items-center gap-1.5">
              <Sparkles
                className="w-4 h-4 text-red-500"
                style={{ animation: "pulse 2s infinite" }}
              />
              <span>অনুসন্ধান</span>
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Close search"
            >
              <X className="w-4 h-4 " />
            </button>
          </div>

          <form onSubmit={handleSearch} className="relative group">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                <Search
                  className="w-4 h-4  group-focus-within:text-red-500 transition-colors duration-300"
                  style={{
                    animation: isOpen ? "searchPulse 1s ease-out" : "none",
                  }}
                />
              </div>

              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="সংবাদ খুঁজুন..."
                className="w-full h-10 pl-10 pr-20 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-red-400 focus:  outline-none transition-all duration-300 placeholder:text-gray-400"
              />

              {/* Search button */}
              {searchQuery && (
                <button
                  type="submit"
                  disabled={!searchQuery.trim()}
                  className={`absolute right-12 top-1/2 transform -translate-y-1/2 px-1  p-1 rounded text-xs transition-all duration-200 flex items-center gap-1 bg-red-500 text-white hover:bg-red-600`}
                >
                  <Search className="w-6 h-6" />
                </button>
              )}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200 hover:bg-gray-200 rounded text-xs 0 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </form>

          {/* Desktop Quick Suggestions */}
          <div
            className="mt-4 space-y-3 overflow-y-auto"
            style={{ maxHeight: "calc(100% - 80px)" }}
          >
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Flame
                  className="w-3 h-3 text-red-500"
                  style={{ animation: "flicker 3s infinite alternate" }}
                />
                <h4 className="text-xs font-medium ">
                  জনপ্রিয় খোঁজ
                </h4>
              </div>
              <div className="space-y-1">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="group flex items-center justify-between w-full text-left text-sm  hover:text-red-600 hover:bg-red-50 px-2 py-1.5 rounded transition-colors duration-200"
                  >
                    <span>{search}</span>
                    <ArrowRight className="w-3 h-3  opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5 mb-2">
                <Clock className="w-3 h-3 " />
                <h4 className="text-xs font-medium ">
                  সাম্প্রতিক
                </h4>
              </div>
              <div className="space-y-1">
                {recentSearches.slice(0, 2).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="group flex items-center justify-between w-full text-left text-sm  hover:text-red-600 hover:bg-red-50 px-2 py-1.5 rounded transition-colors duration-200"
                  >
                    <span>{search}</span>
                    <ArrowRight className="w-3 h-3  opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Backdrop (only for closing) */}
      <div className="hidden md:block fixed inset-0 z-40" onClick={onClose} />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes searchPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes flicker {
          0%,
          18%,
          22%,
          25%,
          53%,
          57%,
          100% {
            opacity: 1;
          }
          20%,
          24%,
          55% {
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
}
