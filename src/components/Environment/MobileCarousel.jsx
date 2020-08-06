import React from "react";

// Enable autoplay dependencies
import SwiperCore, { Autoplay } from 'swiper';
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";


const imgs = ["images/t1.jpg", "images/t2.jpg", "images/t3.jpg", "images/t4.jpg", "images/t5.jpg", "images/t6.jpg"];

export default function MobileCarousel() {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={
          {
              delay: 5000
          }
      }
    >
      {imgs.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} alt="img" key={index}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

SwiperCore.use([Autoplay])
