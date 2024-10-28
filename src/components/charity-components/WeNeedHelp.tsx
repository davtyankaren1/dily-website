import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const HelpItem = ({ avatar, name, city, issue, helpNeeded }: any) => (
  <motion.div
    className='we-need-help__inner-items-item'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
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
    <Button>Подробнее</Button>
  </motion.div>
);

const WeNeedHelp = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='we-need-help'>
      <div className='container'>
        <div className='we-need-help__inner'>
          <div className='we-need-help__inner-header'>
            <TextFieldHeader text='Нам нужна помощь' />
          </div>
          <div className='we-need-help__inner-items'>
            {/* Initially visible help requests */}
            {initialHelpRequests.map((request, index) => (
              <HelpItem key={index} {...request} />
            ))}
          </div>

          {/* Additional help requests shown with animation */}
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
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='see-all-helps' onClick={toggleShowMore}>
            <p style={{ cursor: "pointer" }}>
              {showMore ? "Скрыть" : "Показать еще"}
            </p>
            <ArrowDownSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeNeedHelp;
