import HeartIconSvg from "../../assets/svgs/HeartIconSvg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Img1 from "../../assets/images/Avatar.png";
import "../../styles/CardItem.scss";

const CardItem = ({ item }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className='card-item'
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      variants={scaleVariants}
    >
      <img src={item?.imageUrl} className='card-item-image' />
      <div className='card-item-heart-icon'>
        <HeartIconSvg />
      </div>
      <div className='card-item-info'>
        <span className='card-item-title'>{item?.title}</span>
        <div className='card-item-footer'>
          <div className='card-item-details'>
            <div className='card-item-details-texts'>
              <span className='card-item-price'>{item?.price}</span>
              <span className='card-item-city'>{item?.city}</span>
            </div>
            <div className='card-item-details-img'>
              <img src={Img1} alt='' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardItem;