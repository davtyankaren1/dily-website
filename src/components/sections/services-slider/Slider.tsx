import SliderItem from "./components/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/Slider.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Slider = ({ language }) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/service-slider?language=${language}`
      );
      setSlides(response.data);
    } catch (error) {
      console.error("Error fetching slides:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SliderItem language={language} item={item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
