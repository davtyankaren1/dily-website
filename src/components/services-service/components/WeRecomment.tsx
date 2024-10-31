import TextFieldHeader from "../../texts/TextFieldHeader";
import { motion, useInView } from "framer-motion";
import Img1 from "../../../assets/images/what-we-recomend/img1.png";
import Img2 from "../../../assets/images/what-we-recomend/img2.png";
import Img3 from "../../../assets/images/what-we-recomend/img3.png";
import Img4 from "../../../assets/images/what-we-recomend/img4.png";
import Img5 from "../../../assets/images/what-we-recomend/img5.png";
import Img6 from "../../../assets/images/what-we-recomend/img6.png";
import Img7 from "../../../assets/images/what-we-recomend/img7.png";
import Img8 from "../../../assets/images/what-we-recomend/img8.png";
import Img9 from "../../../assets/images/what-we-recomend/img9.png";
import Img10 from "../../../assets/images/what-we-recomend/img10.png";
import Img11 from "../../../assets/images/what-we-recomend/img11.png";
import Img12 from "../../../assets/images/what-we-recomend/img12.png";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import { useRef, useState } from "react";
import "../../../styles/WeRecomment.scss";

const WeRecomment = () => {
  const initialItems = [
    { id: 1, title: "Apple", img: Img1 },
    { id: 2, title: "Телефоны", img: Img2 },
    { id: 3, title: "Планшеты", img: Img3 },
    { id: 4, title: "Ноутбуки", img: Img4 },
    { id: 5, title: "Моноблоки", img: Img5 },
    { id: 6, title: "Мониторы", img: Img6 },
    { id: 7, title: "ТВ, аудио", img: Img7 },
    { id: 8, title: "Бытовая техника", img: Img8 },
    { id: 9, title: "Фото и видео", img: Img9 },
    { id: 10, title: "Орг техника", img: Img10 },
    { id: 11, title: "Оборудование", img: Img11 },
    { id: 12, title: "Инструменты", img: Img12 }
  ];

  const additionalItems = [
    { id: 13, title: "Доп-1", img: Img1 },
    { id: 14, title: "Доп-2", img: Img2 },
    { id: 15, title: "Доп-3", img: Img3 },
    { id: 15, title: "Доп-4", img: Img4 },
    { id: 15, title: "Доп-5", img: Img5 },
    { id: 15, title: "Доп-6", img: Img6 }
  ];

  const [showAdditional, setShowAdditional] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleAdditionalItems = () => {
    setShowAdditional((prevShow) => !prevShow);
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className='we-recommend-service'>
      <div className='container'>
        <div className='we-recommend-service__inner'>
          <div className='we-recommend-service__inner-header'>
            <TextFieldHeader text='Мы ремонтируем' />
          </div>
          <div className='we-recommend-service__inner-items'>
            {initialItems.map((item) => (
              <motion.div
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={scaleVariants}
                key={item.id}
                className='we-recommend-service__inner-items-item'
              >
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </motion.div>
            ))}
            {showAdditional &&
              additionalItems.map((item) => (
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={scaleVariants}
                  key={item.id}
                  className='we-recommend-service__inner-items-item'
                >
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </motion.div>
              ))}
          </div>
          <div
            className='we-recommend-service__inner-footer'
            onClick={toggleAdditionalItems}
          >
            <p>{showAdditional ? "Скрыть" : "Показать еще"}</p>
            <ArrowDownSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeRecomment;
