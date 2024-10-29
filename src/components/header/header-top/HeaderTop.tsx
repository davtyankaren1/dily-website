import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import AvatarSvg from "../../../assets/svgs/AvatarSvg";
import "../../../styles/HeaderTop.scss";

const menuItems = [
  { name: "Доска объявлений", path: "/board" },
  { name: "Сервисный центр", path: "/service" },
  { name: "Интернет-магазин Dily.ru", path: "/shop" },
  { name: "Скупка", path: "/buyout" }
];

const HeaderTop = ({ setActiveIndex }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <div className='header-top'>
      <div className='container'>
        <div className='header-content'>
          <div className='header-left'>
            <div className='header-logo-svg' onClick={() => navigate("/board")}>
              <HeaderLogoSvg />
            </div>
            <nav className='nav-menu'>
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                  onClick={() => handleMenuItemClick(index)}
                >
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              ))}
            </nav>
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
                style={{ cursor: "pointer" }}
                onClick={handleLogin}
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
    </div>
  );
};

export default HeaderTop;
