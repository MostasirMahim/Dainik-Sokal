"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CategoryImageCard } from "../Card";
import posts from "@/utils/posts.json";

export default function GridSlider() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample data - replace with your actual data
  const post = posts.data;

  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1024) return 6; // lg: 3 columns × 2 rows
      if (width >= 768) return 4; // md: 2 columns × 2 rows
      return 1; // sm: 1 column × 1 row (mobile single item)
    }
    return 6;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < post.length; i += itemsPerSlide) {
    groupedItems.push(post.slice(i, i + itemsPerSlide));
  }

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="relative">
        {/* Navigation Buttons - Only visible on mobile */}
        {isMobile && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center z-10 px-2 transform -translate-y-1/2 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevSlide}
              className="navigation-button rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white border-none pointer-events-auto"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextSlide}
              className="navigation-button rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white border-none pointer-events-auto"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        )}

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={isMobile ? 10 : 20}
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          threshold={10}
          allowTouchMove={true}
          simulateTouch={true}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {groupedItems.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 pb-12 sm:pb-16">
                {group.map((item) => (
                  <CategoryImageCard key={item.id} article={item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
