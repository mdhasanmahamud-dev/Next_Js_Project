"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { banners } from "./bannerData";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        navigation
        loop
        className="w-full h-[80vh]"
      >
        {banners.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[70vh] relative flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text content */}
              <div className="relative z-10 text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg md:text-xl mb-6">
                  {slide.description}
                </p>
                <Link
                  href={slide.cta.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium transition shadow-lg"
                >
                  {slide.cta.text}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
