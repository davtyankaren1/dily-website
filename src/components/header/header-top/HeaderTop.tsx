import { useState } from "react";
import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import AvatarSvg from "../../../assets/svgs/AvatarSvg";
import { motion } from "framer-motion";
import Modal from "../../modal/Modal";
import "../../../styles/HeaderTop.scss";

const HeaderTop = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMenuItemClick = (index: any) => {
    setActiveIndex(index);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className='header-top'>
      <div className='container'>
        <div className='header-content'>
          <div className='header-left'>
            <HeaderLogoSvg />
            <ul className='nav-menu'>
              {[
                "Доска объявлений",
                "Сервисный центр",
                "Интернет-магазин Dily.ru",
                "Скупка"
              ].map((item, index) => (
                <li
                  key={index}
                  className={
                    activeIndex === index ? "nav-item active" : "nav-item"
                  }
                  onClick={() => handleMenuItemClick(index)}
                >
                  <motion.a
                    href=''
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className='header-right'>
            <div className='location-selector' onClick={toggleModal}>
              <LocationSvg />
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Москва
              </motion.div>
              <ArrowDownSvg />
            </div>
            <div className='login'>
              <AvatarSvg />
              <motion.div
                href=''
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Вход/ регистрация
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal} title='Выбор города'>
        <p>Здесь будет содержимое для выбора города.</p>
        <p>Выберите ваш город из списка.</p>
      </Modal>
    </div>
  );
};

export default HeaderTop;
