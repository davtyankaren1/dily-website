import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import AvatarSvg from "../../../assets/svgs/AvatarSvg";
import "../../../styles/HeaderTop.scss";

const HeaderTop = () => {
  const navigate = useNavigate();

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
