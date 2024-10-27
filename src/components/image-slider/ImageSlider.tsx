import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "../../styles/ImageSlider.scss";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const thumbnailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div
      className='image-slider'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='main-slider'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: activeThumb }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className='slider-image'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='thumb-slider'>
        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={setActiveThumb}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={image}
                alt={`Thumb ${index + 1}`}
                className='thumbnail-image'
                initial='hidden'
                animate='visible'
                custom={index}
                variants={thumbnailVariants}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
