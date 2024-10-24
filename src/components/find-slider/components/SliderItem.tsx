import { motion } from "framer-motion";
import "../../../styles/FindSliderItem.scss";

const SliderItem = ({ item }: any) => {
  const SvgComponent = item.svg;

  return (
    <motion.div
      className='find-slider-item'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='find-slider-item-circle'>
        <SvgComponent />
      </div>
      <span className='find-slider-item-title'>{item.title}</span>
    </motion.div>
  );
};

export default SliderItem;
