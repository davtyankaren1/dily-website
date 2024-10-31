// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper";
// import SliderFirstImg from "../../../assets/images/slider-service-img1.png";
// import SliderSecondImg from "../../../assets/images/slider-service-img2.png";
// import SliderThirdImg from "../../../assets/images/slider-service-img3.png";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../../styles/SliderService.scss";

// const slides = [
//   {
//     id: 1,
//     image: SliderFirstImg,
//     title: "Welcome to Our Service",
//     description:
//       "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
//   },
//   {
//     id: 2,
//     image: SliderSecondImg,
//     title: "Quality Assurance",
//     description:
//       "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
//   },
//   {
//     id: 3,
//     image: SliderThirdImg,
//     title: "Customer Satisfaction",
//     description:
//       "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
//   }
// ];

// const SliderService = () => {
//   return (
//     <div className='slider-container'>
//       <Swiper
//         pagination={{ clickable: true }}
//         modules={[Pagination, Autoplay]}
//         autoplay={{ delay: 2000 }}
//         className='hero-slider'
//         loop={true}
//         spaceBetween={0}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className='slide'
//               style={{
//                 backgroundSize: "cover"
//               }}
//             >
//               <img src={slide.image} />
//               <h1 className='services-service-slider-title'>{slide.title}</h1>
//               <p>{slide.description}</p>
//               <div className='slider-services-btns'>
//                 <button className='slider-services-btns-request'>
//                   Оставить заявку
//                 </button>
//                 <button className='slider-services-btns-more'>
//                   Узнать статус ремонта
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SliderService;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import SliderFirstImg from "../../../assets/images/slider-service-img1.png";
import SliderSecondImg from "../../../assets/images/slider-service-img2.png";
import SliderThirdImg from "../../../assets/images/slider-service-img3.png";
import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/SliderService.scss";

const slides = [
  {
    id: 1,
    image: SliderThirdImg,
    title: "Welcome to Our Service",
    description:
      "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
  },
  {
    id: 2,
    image: SliderSecondImg,
    title: "Quality Assurance",
    description:
      "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
  },
  {
    id: 3,
    image: SliderFirstImg,
    title: "Customer Satisfaction",
    description:
      "Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!"
  }
];

const SliderService = () => {
  return (
    <div className='slider-container'>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className='hero-slider'
        loop={true}
        spaceBetween={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <AnimatePresence>
              <motion.div
                className='slide'
                style={{
                  backgroundSize: "cover"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.1 }}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <motion.h1
                  className='services-service-slider-title'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  className='slider-services-btns'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button className='slider-services-btns-request'>
                    Оставить заявку
                  </button>
                  <button className='slider-services-btns-more'>
                    Узнать статус ремонта
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderService;
