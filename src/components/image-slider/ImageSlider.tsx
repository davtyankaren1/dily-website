import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
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

  return (
    <div className='image-slider'>
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
          slidesPerView={5} // Display 5 images in thumbnail slider
          watchSlidesProgress
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumb ${index + 1}`}
                className='thumbnail-image'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
