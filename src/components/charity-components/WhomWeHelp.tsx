import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Whoneeds from "../../assets/images/charity-images/whoneeds.png";
import Maternity from "../../assets/images/charity-images/maternity.png";
import Invalids from "../../assets/images/charity-images/invalid.png";
import TextFieldHeader from "../texts/TextFieldHeader";
import "../../styles/WhomWeHelp.scss";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const WhomWeHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='whom-we-help' ref={ref}>
      <div className='container'>
        <div className='whom-we-help__inner'>
          <TextFieldHeader text='Кому мы помогаем' />
          <motion.div
            className='whom-we-help-items'
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 }
            }}
          >
            <motion.div
              className='whom-we-help-items-item'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={Whoneeds} alt='Нуждающимся людям' />
              <p>Нуждающимся людям</p>
            </motion.div>
            <motion.div
              className='whom-we-help-items-item'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={Maternity} alt='Детским домам' />
              <p>Детским домам</p>
            </motion.div>
            <motion.div
              className='whom-we-help-items-item'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={Invalids} alt='Детям с ограниченными возможностями' />
              <p>Детям с ограниченными возможностями</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhomWeHelp;
