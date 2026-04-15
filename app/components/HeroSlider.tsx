"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Find Your Dream Job",
    text: "Explore thousands of opportunities",
  },
  {
    image: "/images/slide2.jpg",
    title: "Build Your Career",
    text: "Grow with top companies",
  },
  {
    image: "/images/slide3.jpg",
    title: "Start Today",
    text: "Your future starts now",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full h-[500px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full flex items-center justify-center text-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              }}
            >
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}