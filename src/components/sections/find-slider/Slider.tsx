// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import ArrowLeftSliderSvg from "../../../assets/svgs/ArrowLeftSliderSvg";
// import ArrowRightSliderSvg from "../../../assets/svgs/ArrowRightSliderSvg";
// import { motion } from "framer-motion";
// import { mockData } from "./mockData";
// import SliderItem from "./components/SliderItem";

// import "swiper/css";
// import "swiper/css/navigation";
// import "../../../styles/FindSlider.scss";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const Slider = () => {
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   return (
//     <motion.div
//       className='find-slider'
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className='container'>
//         <h2>{t("you_are_looking")}</h2>
//         <div className='slider-wrapper'>
//           <Swiper
//             modules={[Navigation]}
//             loop={true}
//             slidesPerView={8}
//             navigation={{
//               nextEl: ".find-slider .find-slider-button-next",
//               prevEl: ".find-slider .find-slider-button-prev"
//             }}
//           >
//             {mockData.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <div onClick={() => navigate(`${item.path}`)}>
//                   <SliderItem item={item} />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className='find-slider-button-prev'>
//             <ArrowLeftSliderSvg />
//           </div>
//           <div className='find-slider-button-next'>
//             <ArrowRightSliderSvg />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArrowLeftSliderSvg from "../../../assets/svgs/ArrowLeftSliderSvg";
import ArrowRightSliderSvg from "../../../assets/svgs/ArrowRightSliderSvg";
import { motion } from "framer-motion";
import { mockData } from "./mockData";
import SliderItem from "./components/SliderItem";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/FindSlider.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Hook for getting translations

  return (
    <motion.div
      className='find-slider'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='container'>
        <h2>{t("you_are_looking")}</h2> {/* Translated heading */}
        <div className='slider-wrapper'>
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={8}
            navigation={{
              nextEl: ".find-slider .find-slider-button-next",
              prevEl: ".find-slider .find-slider-button-prev"
            }}
          >
            {mockData.map((item) => (
              <SwiperSlide key={item.id}>
                <div onClick={() => navigate(`${item.path}`)}>
                  <SliderItem item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='find-slider-button-prev'>
            <ArrowLeftSliderSvg />
          </div>
          <div className='find-slider-button-next'>
            <ArrowRightSliderSvg />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
