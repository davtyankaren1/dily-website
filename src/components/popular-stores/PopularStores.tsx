import { useRef } from "react";
import DetskiMir from "../../assets/images/popular-stores/detski-mir.png";
import DivaniTut from "../../assets/images/popular-stores/divani-tut.png";
import KotObormot from "../../assets/images/popular-stores/kot-obormot.png";
import XiamoImg from "../../assets/images/popular-stores/xiaomi.png";
import Mvideo from "../../assets/images/popular-stores/mvideo.png";
import StarFilled from "../../assets/svgs/StarFilled";
import EmptyStar from "../../assets/svgs/EmptyStar";
import { motion, useInView } from "framer-motion";
import SeeAll from "../see-all/SeeAll";
import "../../styles/PopularStores.scss";

const PopularStores = () => {
  const mockData = [
    {
      id: 1,
      title: "М-ВИДЕО",
      storeLogo: Mvideo,
      city: "Москва",
      rating: 5,
      bgColor: "#f5253a"
    },
    {
      id: 2,
      title: "КОТ-ОБОРМОТ",
      storeLogo: KotObormot,
      city: "Москва",
      rating: 5,
      bgColor: "#fc9024"
    },
    {
      id: 3,
      title: "XIAOMI",
      storeLogo: XiamoImg,
      city: "Москва",
      rating: 4,
      bgColor: "#00c65e"
    },
    {
      id: 4,
      title: "ДИВАНЫ ТУТ",
      storeLogo: DivaniTut,
      city: "Москва",
      rating: 3,
      bgColor: "#1eae8b"
    },
    {
      id: 5,
      title: "ДЕТСКИЙ МИР",
      storeLogo: DetskiMir,
      city: "Москва",
      rating: 5,
      bgColor: "#01c1fb"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <StarFilled key={i} /> : <EmptyStar key={i} />);
    }
    return stars;
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className='popular-stores' ref={ref}>
      <div className='container'>
        <div className='logo-and-text-heading'>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Популярные магазины
          </motion.h2>
          <SeeAll />
        </div>
        <div className='popular-stores__inner'>
          {mockData.map((item, index) => (
            <motion.div
              className='popular-store-items'
              key={item.id}
              style={{ backgroundColor: item.bgColor }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className='store-item-header'>
                <img src={item.storeLogo} alt={item.title} />
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.title}
                </motion.span>
              </div>
              <div className='store-item-footer'>
                <div className='store-footer-rating'>
                  <span>{item.rating}</span>
                  {renderStars(item.rating)}
                </div>
                <div className='store-footer-city'>{item.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularStores;
