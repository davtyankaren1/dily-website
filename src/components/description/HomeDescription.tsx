import { useState } from "react";
import { motion } from "framer-motion";
import ArrowDownSvg from "../../assets/svgs/ArrowDownSvg";
import "../../styles/HomeDescription.scss";

const HomeDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const textVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    })
  };

  return (
    <motion.div
      className='home-description'
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className='container'>
        <motion.p
          className='home-description-title'
          custom={0}
          variants={textVariant}
        >
          Вы хотите продать или купить что-либо быстро и выгодно?
        </motion.p>
        <motion.p
          className='home-description-body'
          custom={1}
          variants={textVariant}
        >
          К вашим услугам доска бесплатных объявлений Dily.ru. На нашем портале
          вы найдёте всё, начиная от мелких бытовых приборов и заканчивая
          недвижимостью и автомобилями. А если вы продаёте товар, услугу, сдаёте
          или снимаете жилье, мы поможем решить вашу задачу быстро и эффективно,
          для этого просто добавьте объявление бесплатно!
        </motion.p>
        <motion.p
          className='home-description-body'
          custom={2}
          variants={textVariant}
        >
          Широким предложением товаров и услуг. Одежда и обувь, электроника и
          бытовая техника, недвижимость, автомобили, работа, предметы
          коллекционирования – здесь вы найдёте объявления на любой вкус!
        </motion.p>

        <motion.div
          className='expandable-section'
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className='home-description-body'
            custom={3}
            variants={textVariant}
          >
            Огромной аудиторией. Тысячи ваших потенциальных клиентов посещают
            наш сайт ежедневно. Не упускайте их, подайте объявление прямо
            сейчас! Удобством пользования. Продуманная структура разделов и
            поиск объявлений помогут вам быстро найти нужные предложения. А
            разместить объявление вы сможете всего в несколько кликов.
          </motion.p>
        </motion.div>

        <div className='expand-description' onClick={handleExpandToggle}>
          <p>{isExpanded ? "свернуть" : "развернуть"}</p>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDownSvg />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeDescription;
