import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextFieldHeader from "../../texts/TextFieldHeader";
import InfoWarnSvg from "../../../assets/svgs/InfoWarnSvg";
import ArrowDownBigSvg from "../../../assets/svgs/ArrowDownBigSvg";
import "../../../styles/Malfunctions.scss";

const Malfunctions = () => {
  const [showAdditionalItems, setShowAdditionalItems] = useState(false);
  const { ref: containerRef, inView } = useInView({ triggerOnce: true });

  const mainItems = [
    { id: 1, title: "Не работает гнездо зарядки" },
    { id: 2, title: "Не работает аккумулятор" },
    { id: 3, title: "Не работает динамик" },
    { id: 4, title: "Не работает гнездо наушников" },
    { id: 5, title: "Не работает вибрация" },
    { id: 6, title: "Не работает звук" },
    { id: 7, title: "Не работает микрофон" },
    { id: 8, title: "Не работает GPS" },
    { id: 9, title: "Не работает Bluetooth" },
    { id: 10, title: "Не работает гироскоп" },
    { id: 11, title: "Не работает кнопка громкости" },
    { id: 12, title: "Не работают кнопки" }
  ];

  const additionalItems = [
    { id: 13, title: "Не работает кнопка включения" },
    { id: 14, title: "Не работает кнопка Home" },
    { id: 15, title: "Не работает камера" },
    { id: 16, title: "Не заряжается" },
    { id: 17, title: "Не видит Sim-карту" },
    { id: 18, title: "Не работает Wi-Fi" }
  ];

  const toggleAdditionalItems = () => {
    setShowAdditionalItems((prev) => !prev);
  };

  return (
    <div className='multifunctions'>
      <div className='container' ref={containerRef}>
        <div className='multifunctions__inner'>
          <div className='multifunctions__inner-header'>
            <TextFieldHeader text='Неисправности' />
          </div>
          <div className='multifunctions__inner-items'>
            {mainItems.map((item, index) => (
              <motion.div
                className='multifunctions__inner-items-item'
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05
                  }}
                >
                  <InfoWarnSvg />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.05 + 0.05
                  }}
                >
                  {item.title}
                </motion.span>
              </motion.div>
            ))}
            <AnimatePresence>
              {showAdditionalItems &&
                additionalItems.map((item) => (
                  <motion.div
                    className='multifunctions__inner-items-item'
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                    >
                      <InfoWarnSvg />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {item.title}
                    </motion.span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
          <div
            className='multifunctions__inner-bottom'
            onClick={toggleAdditionalItems}
          >
            <motion.div
              animate={{ rotate: showAdditionalItems ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowDownBigSvg />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malfunctions;
