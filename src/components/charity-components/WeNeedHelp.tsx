import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "../customs";
import TextFieldHeader from "../texts/TextFieldHeader";
import Avatar1 from "../../assets/images/avatar1.jpg";
import Avatar2 from "../../assets/images/avatar2.jpg";
import Avatar3 from "../../assets/images/avatar3.webp";
import Avatar4 from "../../assets/images/avatar4.jpg";
import ArrowDownSvg from "../../assets/svgs/ArrowDownSvg";
import "../../styles/WeNeedHelp.scss";

const initialHelpRequests = [
  {
    avatar: Avatar1,
    name: "Иван Петров",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Одежда, еда"
  },
  {
    avatar: Avatar2,
    name: "Настя Мамонтова",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Финансовая помощь - 95 000 ₽"
  },
  {
    avatar: Avatar3,
    name: "Аня Васильева",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Финансовая помощь - 250 000 ₽"
  },
  {
    avatar: Avatar4,
    name: "Семья Филатовых",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Одежда, еда, книги, игрушки, финансовая помощь"
  }
];

const additionalHelpRequests = [
  {
    avatar: Avatar1,
    name: "Иван Петров",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Одежда, еда"
  },
  {
    avatar: Avatar2,
    name: "Настя Мамонтова",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Финансовая помощь - 95 000 ₽"
  },
  {
    avatar: Avatar3,
    name: "Аня Васильева",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Финансовая помощь - 250 000 ₽"
  },
  {
    avatar: Avatar4,
    name: "Семья Филатовых",
    city: "Москва",
    issue: "Потеря работы",
    helpNeeded: "Одежда, еда, книги, игрушки, финансовая помощь"
  }
];

const HelpItem = ({ avatar, name, city, issue, helpNeeded, index }: any) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1
      }
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.1 } }
  };

  return (
    <motion.div
      className='we-need-help__inner-items-item'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={itemVariants}
      custom={index}
    >
      <div className='help-item-header'>
        <img src={avatar} alt={`${name}'s avatar`} />
        <div className='help-item-header-info'>
          <span className='help-item-header-name'>{name}</span>
          <span className='help-item-header-city'>{city}</span>
        </div>
      </div>
      <div className='help-item-body-1'>
        <p className='help-item-body-1-question'>Что случилось?</p>
        <p className='help-item-body-1-reply'>{issue}</p>
      </div>
      <div className='help-item-body-2'>
        <p className='help-item-body-2-question'>Какая помощь нужна?</p>
        <p className='help-item-body-2-reply'>{helpNeeded}</p>
      </div>
      <Button children='Подробнее' />
    </motion.div>
  );
};

const WeNeedHelp = () => {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.div
      className='we-need-help'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='container'>
        <div className='we-need-help__inner'>
          <div className='we-need-help__inner-header'>
            <TextFieldHeader text='Нам нужна помощь' />
          </div>
          <div className='we-need-help__inner-items'>
            {initialHelpRequests.map((request, index) => (
              <HelpItem key={index} {...request} index={index} />
            ))}
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                className='additional-help-items'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className='we-need-help__inner-items'>
                  {additionalHelpRequests.map((request, index) => (
                    <HelpItem
                      key={index + initialHelpRequests.length}
                      {...request}
                      index={index + initialHelpRequests.length}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='see-all-helps' onClick={toggleShowMore}>
            <p style={{ cursor: "pointer" }}>
              {showMore ? <span>Скрыть</span> : <span>Показать еще</span>}
            </p>
            <ArrowDownSvg />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeNeedHelp;
