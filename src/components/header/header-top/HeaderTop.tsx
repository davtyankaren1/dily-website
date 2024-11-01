import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import AvatarSvg from "../../../assets/svgs/AvatarSvg";
import { useAppSelector } from "../../../redux/hooks";
import "../../../styles/HeaderTop.scss";

const menuItems = [
  { name: "Доска объявлений", path: "/board" },
  { name: "Сервисный центр", path: "/service" },
  { name: "Интернет-магазин Dily.ru", path: "/shop" },
  { name: "Скупка", path: "/buyout" }
];

const HeaderTop = ({ setActiveIndex }: any) => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  const fetchBasketData = async (userId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8081/users/${userId}/basket`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch basket data");
      }
      const data = await response.json();
      navigate("/basket", { state: { items: data.items } });
    } catch (error) {
      console.error("Error fetching basket data:", error);
    }
  };

  const handleBasketClick = () => {
    if (user) {
      const userId = user.id;
      fetchBasketData(userId);
    } else {
      handleLogin();
    }
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
            <div
              className='location-selector'
              onClick={() => console.log("Location clicked")}
            >
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
              {user ? (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ cursor: "pointer", display: "flex", gap: "10px" }}
                  onClick={handleBasketClick}
                >
                  <div>{user.name}</div>
                  <div>{user.basket ? JSON.parse(user.basket).length : 0}</div>
                </motion.div>
              ) : (
                <motion.div
                  style={{ cursor: "pointer" }}
                  onClick={handleLogin}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Вход/ регистрация
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
