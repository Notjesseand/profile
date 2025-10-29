"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Stack = () => {
  const [open, setOpen] = useState(true);

  const icons = [
    "/react.png",
    "/native.png",
    "/js.png",
    "/laravel.png",
    "/bootstrap.png",
    "/css.png",
    "/html.png",
    "/php.png",
    "/tailwind.png",
  ];

  const pdf = ["/neck.pdf"];

  return (
    <div className="w-full md:w-1/2 absolute bottom-0 left-0 bg-slate-600 pl-3 rounded">
      <Swiper
        spaceBetween={30}
        // slidesPerView={3}
        breakpoints={{
          350: {
            slidesPerView: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
          },
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{ type: "progressbar" }}
        modules={[Autoplay, Pagination]}
        className="mySwiper flex font-open "
      >
        {icons.map((item, index) => (
          <SwiperSlide key={index} className=" py-3">
            <img src={item} alt="" className="h-12" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stack;
