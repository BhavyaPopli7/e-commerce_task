"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function ImageCarousel({ images }) {
  return (
    <Swiper spaceBetween={20} slidesPerView={3} pagination={{ clickable: true }}  className="w-full h-[325px] transition-all scroll-smooth">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div>
             <Image 
               src={image}  
               layout='fill'
               objectFit='cover'
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}