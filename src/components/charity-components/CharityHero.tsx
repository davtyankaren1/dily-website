import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../customs";
import CharityHeroImg from "../../assets/images/charity-images/charity-hero-img.png";
import "../../styles/CharityHero.scss";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const CharityHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='charity-hero' ref={ref}>
      <motion.div
        className='charity-hero__inner'
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 }}
      >
        <motion.div
          className='charity-hero__inner-texts'
          variants={textVariants}
        >
          <h1>Отдай, если можешь Прими,если хочешь</h1>
          <p>
            Мы помогаем людям,одновременно решая социальные и экологические
            проблемы
          </p>
          <div className='charity-hero-button'>
            <Button children='Помочь сейчас' />
          </div>
        </motion.div>

        <motion.div variants={imageVariants}>
          <img src={CharityHeroImg} alt='Charity Hero' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CharityHero;
