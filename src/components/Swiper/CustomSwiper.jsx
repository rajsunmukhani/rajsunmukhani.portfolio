import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = ({
  items = [],
  renderItem,
  delay = 2000,
  spaceBetween = 20,
}) => {
  const total = items.length;
  return (
    <div className="work-swiper-container">
      <Swiper
        key={items.length}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        loop={total > 1}
        spaceBetween={spaceBetween}
        breakpoints={{
          0: { slidesPerView: Math.min(total, 1) },     // mobile
          700: { slidesPerView: Math.min(total, 2) },   // tablet
          1024: { slidesPerView: Math.min(total, 3) },  // desktop
          1300: { slidesPerView: Math.min(total, 4) },  // desktop
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
