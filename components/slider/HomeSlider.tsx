"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomeSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // make autoplay smooth and rewind to first slide when it reaches the end

       
        rewind={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="h-96"
      >
        <SwiperSlide className="w-full">
            <img src="/fifty.jpg" alt="sale image" className="object-center object-cover w-full h-full" />
        </SwiperSlide>
        
        <SwiperSlide className="w-full">
            <img src="/cyberMonday.jpg" alt="sale image" className="object-center object-cover w-full h-full" />
        </SwiperSlide>
        
        <SwiperSlide className="w-full">
            <img src="/sale.jpg" alt="sale image" className="object-center object-cover w-full h-full" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
