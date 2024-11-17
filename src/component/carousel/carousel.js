import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import carouselImg from '../../Assets/Capture.PNG'
import carouselImg2 from '../../Assets/6000-Holiday-16x9-Startpage-1-w46.avif'

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
    const slides = [carouselImg2,carouselImg,carouselImg,carouselImg,]
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
