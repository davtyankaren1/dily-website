import { motion } from "framer-motion";
import "../../../../styles/SliderItem.scss";

interface ISliderItem {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  bgColor: string;
  color: string;
}

interface ISliderItemProps {
  item: ISliderItem;
}

const SliderItem = ({ item }: ISliderItemProps) => {
  return (
    <motion.div
      className='slider-item'
      style={{ backgroundColor: item.bgColor, color: item.color }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='slider-item-info'>
        <p className='slider-item-title'>{item.title}</p>
        <p className='slider-item-desc'>{item.desc}</p>
      </div>
      <div className='service-item'>
        <img src={item.imageUrl} alt='' />
      </div>
    </motion.div>
  );
};

export default SliderItem;
