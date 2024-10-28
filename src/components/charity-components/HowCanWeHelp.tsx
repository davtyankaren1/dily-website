import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextFieldHeader from "../texts/TextFieldHeader";
import HowCanHelpImg1 from "../../assets/images/charity-images/how-can-help-1.png";
import HowCanHelpImg2 from "../../assets/images/charity-images/how-can-help-2.png";
import HowCanHelpImg3 from "../../assets/images/charity-images/how-can-help-3.png";
import TextFieldAlternative from "../texts/TextFieldAlternative";
import "../../styles/HowCanWeHelp.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15, duration: 0.7 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
  }
};

const HowCanWeHelp = () => {
  return (
    <div className='how-can-we-help'>
      <div className='container'>
        <motion.div
          className='how-can-we-help__inner'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <TextFieldHeader text='Как я могу помочь?' />
          <div className='how-can-we-help-items'>
            {[
              {
                text: "Сдать ненужную одежду",
                image: HowCanHelpImg1,
                description:
                  "Чистую, без пятен и дырок, одежда должна быть в хорошем состоянии"
              },
              {
                text: "Сдать полезные вещи",
                image: HowCanHelpImg2,
                description:
                  "Детские игрушки, канцелярию и книги, развивающие игры, спортивный инвентарь, велосипеды и т.д"
              },
              {
                text: "Сдать ненужную обувь",
                image: HowCanHelpImg3,
                description: "Чистую, без дырок, в хорошем состоянии"
              }
            ].map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              return (
                <motion.div
                  className='how-can-we-help-items-item'
                  key={index}
                  ref={ref}
                  variants={itemVariants}
                  initial='hidden'
                  animate={isInView ? "visible" : "hidden"}
                >
                  <TextFieldAlternative text={item.text} />
                  <motion.img
                    src={item.image}
                    alt=''
                    variants={imageVariants}
                  />
                  <motion.p variants={textVariants}>
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowCanWeHelp;
