// import { motion } from "framer-motion";
// import "../../../../styles/FindSliderItem.scss";
// import { useTranslation } from "react-i18next";

// interface ISliderItemProps {
//   item: {
//     id: number;
//     svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//     title: string;
//   };
// }

// const SliderItem = ({ item }: ISliderItemProps) => {
//   const SvgComponent = item.svg;
//   const { t } = useTranslation();

//   return (
//     <motion.div
//       className='find-slider-item'
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className='find-slider-item-circle'>
//         <SvgComponent />
//       </div>
//       <span className='find-slider-item-title'>{t(item.title)}</span>
//     </motion.div>
//   );
// };

// export default SliderItem;

import { motion } from "framer-motion";
import "../../../../styles/FindSliderItem.scss";
import { useTranslation } from "react-i18next";

interface ISliderItemProps {
  item: {
    id: number;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string; // the key to be translated
  };
}

const SliderItem = ({ item }: ISliderItemProps) => {
  const SvgComponent = item.svg;
  const { t } = useTranslation(); // This hook will give us the translation function

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
      <span className='find-slider-item-title'>{t(item.title)}</span>{" "}
    </motion.div>
  );
};

export default SliderItem;
