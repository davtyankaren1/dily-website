import { motion } from "framer-motion";
import { ISliderItemProps } from "../../../../types/types";
import "../../../../styles/SliderItem.scss";

const SliderItem = ({ item, language }: ISliderItemProps) => {
  return (
    <motion.div
      className='slider-item'
      style={{ backgroundColor: item.bgColor, color: item.color }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='slider-item-info'>
        <p className='slider-item-title'>{item[`title_${language}`]}</p>
        <p className='slider-item-desc'>{item[`description_${language}`]}</p>
      </div>
      <div className='service-item'>
        <img src={item.imageUrl} alt='' />
      </div>
    </motion.div>
  );
};

export default SliderItem;
