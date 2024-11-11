import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import carouselImg from '../../Assets/ecommerce.jpg'

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
    const slides = [carouselImg,carouselImg,carouselImg,carouselImg,]
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {slides.map((v,i)=>{
        return <SwiperSlide key={i}><img src={v} /></SwiperSlide>
       })}
      </Swiper>
    </>
  );
}
