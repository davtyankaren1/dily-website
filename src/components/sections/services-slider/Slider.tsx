import SliderItem from "./components/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/Slider.scss";
import { mockData } from "./mockData";

const Slider = () => {
  return (
    <div className='services-slider'>
      <div className='container'>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          initialSlide={1}
          centeredSlides={false}
          slidesPerView={2}
          autoplay={{ delay: 1000 }}
          pagination={{
            clickable: true
          }}
        >
          {mockData.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SliderItem item={item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
