import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhereToSellimg1 from "../../assets/images/charity-images/where-to-sell-img1.png";
import WhereToSellimg2 from "../../assets/images/charity-images/where-to-sell-img2.png";
import WhereToSellimg3 from "../../assets/images/charity-images/where-to-sell-img3.png";
import { Button } from "../customs";
import TextFieldAlternative from "../texts/TextFieldAlternative";
import TextFieldHeader from "../texts/TextFieldHeader";
import ArrowDownSvg from "../../assets/svgs/ArrowDownSvg";
import "../../styles/WhereToSellThings.scss";

const WhereToSellThings = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='where-to-sell-thing'>
      <div className='container'>
        <div className='where-to-sell-thing__inner'>
          <TextFieldHeader text='Куда сдать вещи?' />
          <TextFieldAlternative text='Выберите, кому вы хотите помочь' />

          <div className='where-to-sell-thing__inner-items'>
            {[WhereToSellimg1, WhereToSellimg2, WhereToSellimg3].map(
              (img, index) => (
                <motion.div
                  key={index}
                  className='where-to-sell-thing__inner-items-item'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                >
                  <img src={img} alt={`Организация ${index + 1}`} />
                  <p>Организация {index + 1}</p>
                  <Button children='Помочь' />
                </motion.div>
              )
            )}
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                className='additional-items'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className='where-to-sell-thing__inner-items'>
                  {[WhereToSellimg1, WhereToSellimg2, WhereToSellimg3].map(
                    (img, index) => (
                      <motion.div
                        key={index + 3}
                        className='where-to-sell-thing__inner-items-item'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        variants={itemVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                      >
                        <img src={img} alt={`Организация ${index + 4}`} />
                        <p>Организация {index + 4}</p>
                        <Button children='Помочь' />
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='see-all-organisations' onClick={toggleShowMore}>
            <p style={{ cursor: "pointer" }}>
              {showMore ? "Скрыть" : "Все организации"}
            </p>
            <ArrowDownSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToSellThings;
