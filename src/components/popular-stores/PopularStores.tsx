import { useRef } from "react";
import StarFilled from "../../assets/svgs/StarFilled";
import EmptyStar from "../../assets/svgs/EmptyStar";
import { motion, useInView } from "framer-motion";
import SeeAll from "../see-all/SeeAll";
import "../../styles/PopularStores.scss";

const PopularStores = ({ mockData }) => {
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
            Магазины-партнеры
          </motion.h2>
          <SeeAll path='/board/stores' />
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
                  style={{ color: item.textColor }}
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
