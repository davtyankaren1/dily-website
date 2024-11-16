// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
// import LocationSvg from "../../../assets/svgs/LocationSvg";
// import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
// import { useEffect, useState } from "react";
// import "../../../styles/HeaderTop.scss";

// const HeaderTop = ({ onLanguageChange }) => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/auth");
//   };

//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("language") || "en";
//     setSelectedLanguage(storedLanguage);
//     onLanguageChange(storedLanguage);
//   }, [onLanguageChange]);

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     localStorage.setItem("language", language);
//     onLanguageChange(language);
//     setIsOpen(false);
//   };

//   const getFlagImage = (language) => {
//     switch (language) {
//       case "en":
//         return "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
//       case "arm":
//         return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg";
//       case "rus":
//         return "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg";
//       default:
//         return "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
//     }
//   };

//   return (
//     <div className='header-top'>
//       <div className='container'>
//         <div className='header-content'>
//           <div className='header-left'>
//             <div className='header-logo-svg' onClick={() => navigate("/board")}>
//               <HeaderLogoSvg />
//             </div>
//           </div>

//           <div className='header-right'>
//             <div
//               className='location-selector'
//               onClick={() => console.log("Location clicked")}
//             >
//               <LocationSvg />
//               <motion.div
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 Москва
//               </motion.div>
//               <ArrowDownSvg />
//             </div>

//             <div className='login'>
//               <motion.div
//                 style={{ cursor: "pointer" }}
//                 onClick={handleLogin}
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//               >
//                 Вход/ регистрация
//               </motion.div>

//               {/* Custom Language Dropdown */}
//               <div className='language-selector'>
//                 <div
//                   className='language-dropdown'
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   <img
//                     src={getFlagImage(selectedLanguage)} // Dynamically set flag based on selected language
//                     alt='Flag'
//                     className='flag-icon'
//                   />
//                   <span>
//                     {selectedLanguage === "en"
//                       ? "English"
//                       : selectedLanguage === "arm"
//                       ? "Հայերեն"
//                       : "Русский"}
//                   </span>
//                   <ArrowDownSvg />
//                 </div>

//                 {isOpen && (
//                   <div className='dropdown-menu'>
//                     <div
//                       className='dropdown-item'
//                       onClick={() => handleLanguageChange("en")}
//                     >
//                       <img
//                         src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
//                         alt='English flag'
//                         className='flag-icon'
//                       />
//                       English
//                     </div>
//                     <div
//                       className='dropdown-item'
//                       onClick={() => handleLanguageChange("arm")}
//                     >
//                       <img
//                         src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg'
//                         alt='Armenian flag'
//                         className='flag-icon'
//                       />
//                       Հայերեն
//                     </div>
//                     <div
//                       className='dropdown-item'
//                       onClick={() => handleLanguageChange("rus")}
//                     >
//                       <img
//                         src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'
//                         alt='Russian flag'
//                         className='flag-icon'
//                       />
//                       Русский
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import "../../../styles/HeaderTop.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const HeaderTop = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation(); // Get both t function and i18n instance
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage); // Update i18next language on mount
    onLanguageChange(storedLanguage); // Call the external function with the selected language
  }, [i18n, onLanguageChange]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
    i18n.changeLanguage(language); // Update the language dynamically with i18next
    onLanguageChange(language);
    setIsOpen(false); // Close the dropdown after selection
  };

  const getFlagImage = (language) => {
    switch (language) {
      case "en":
        return "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
      case "arm":
        return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg";
      case "rus":
        return "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg";
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"; // Default to US flag
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
          </div>

          <div className='header-right'>
            <div
              className='location-selector'
              onClick={() => console.log(t("location"))} // Use t() to translate static texts
            >
              <LocationSvg />
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("location")}
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
                {t("login")} {/* Use t() to translate the login text */}
              </motion.div>

              <div className='language-selector'>
                <div
                  className='language-dropdown'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    src={getFlagImage(selectedLanguage)} // Dynamically set flag based on selected language
                    alt='Flag'
                    className='flag-icon'
                  />
                  <span>
                    {selectedLanguage === "en"
                      ? "English"
                      : selectedLanguage === "arm"
                      ? "Հայերեն"
                      : "Русский"}
                  </span>
                  <ArrowDownSvg />
                </div>

                {isOpen && (
                  <div className='dropdown-menu'>
                    <div
                      className='dropdown-item'
                      onClick={() => handleLanguageChange("en")}
                    >
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
                        alt='English flag'
                        className='flag-icon'
                      />
                      English
                    </div>
                    <div
                      className='dropdown-item'
                      onClick={() => handleLanguageChange("arm")}
                    >
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg'
                        alt='Armenian flag'
                        className='flag-icon'
                      />
                      Հայերեն
                    </div>
                    <div
                      className='dropdown-item'
                      onClick={() => handleLanguageChange("rus")}
                    >
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'
                        alt='Russian flag'
                        className='flag-icon'
                      />
                      Русский
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
