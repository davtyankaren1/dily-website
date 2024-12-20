// import { useEffect, useState } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import UpdatesSvg from "../../../assets/svgs/UpdatesSvg";
// import MenuSvg from "../../../assets/svgs/MenuIconSvg";
// import CharitySvg from "../../../assets/svgs/CharitySvg";
// import StoreSvg from "../../../assets/svgs/StoreSvg";
// import SearchIconSvg from "../../../assets/svgs/SearchIconSvg";
// import CloseSvg from "../../../assets/svgs/CloseSvg";
// import Menu from "../../menu/Menu";
// import "../../../styles/HeaderBottom.scss";

// const subMenuItems = [
//   [
//     { name: "Объявления", path: "/board/ads", icon: UpdatesSvg },
//     { name: "Магазины", path: "/board/stores", icon: StoreSvg },
//     { name: "Благотворительность", path: "/board/charity", icon: CharitySvg },
//     { name: "Услуги", path: "/board/services", icon: UpdatesSvg }
//   ]
// ];

// const HeaderBottom = ({
//   toggleModal,
//   isModalOpen,
//   activeTopIndex,
//   activeSubIndex,
//   setActiveSubIndex
// }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const currentSubIndex = subMenuItems[activeTopIndex].findIndex(
//       (item) => item.path === location.pathname
//     );
//     if (currentSubIndex !== -1 && currentSubIndex !== activeSubIndex) {
//       setActiveSubIndex(currentSubIndex);
//     } else if (currentSubIndex === -1) {
//       setActiveSubIndex(0);
//     }
//   }, [activeTopIndex, location.pathname, navigate, setActiveSubIndex]);

//   const handleSubItemClick = (index) => {
//     setActiveSubIndex(index);
//     navigate(subMenuItems[activeTopIndex][index].path);
//   };

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       navigate(`/search-results?searchquery=${searchTerm}`);
//       setSearchTerm("");
//     }
//   };

//   return (
//     <div className='header-bottom'>
//       <div className='container'>
//         <div className='header-bottom__content'>
//           <div className='header-bottom__menu'>
//             <div onClick={toggleModal} className='modal-controller'>
//               {isModalOpen ? <CloseSvg /> : <MenuSvg />}
//             </div>
//             <nav className='header-bottom__menu-list'>
//               {subMenuItems[activeTopIndex].map((item, index) => (
//                 <NavLink
//                   key={index}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "header-bottom__menu-item active"
//                       : "header-bottom__menu-item"
//                   }
//                   onClick={() => handleSubItemClick(index)}
//                 >
//                   <item.icon />
//                   <span className={activeSubIndex === index ? "active" : ""}>
//                     {item.name}
//                   </span>
//                 </NavLink>
//               ))}
//             </nav>
//           </div>

//           <div style={{ display: "flex", gap: "50px" }}>
//             <div className='header-bottom__search'>
//               <div className='header-bottom__search-icon'>
//                 <SearchIconSvg />
//               </div>
//               <input
//                 className='header-bottom__search-input'
//                 type='text'
//                 placeholder='Я хочу купить'
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <div className='header-bottom__search-btn' onClick={handleSearch}>
//                 Найти
//               </div>
//             </div>
//             {/* <div className='header-bottom__post-ad'>
//               <span>Подать объявление</span>
//               <div className='header-bottom__post-ad-icon'>
//                 <PlusIconSvg />
//               </div>
//             </div> */}
//           </div>
//         </div>
//         {isModalOpen && <Menu />}
//       </div>
//     </div>
//   );
// };

// export default HeaderBottom;

import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import UpdatesSvg from "../../../assets/svgs/UpdatesSvg";
import MenuSvg from "../../../assets/svgs/MenuIconSvg";
import CharitySvg from "../../../assets/svgs/CharitySvg";
import StoreSvg from "../../../assets/svgs/StoreSvg";
import SearchIconSvg from "../../../assets/svgs/SearchIconSvg";
import CloseSvg from "../../../assets/svgs/CloseSvg";
import Menu from "../../menu/Menu";
import { useTranslation } from "react-i18next";
import "../../../styles/HeaderBottom.scss";

const subMenuItems = [
  [
    { key: "ads", path: "/board/ads", icon: UpdatesSvg },
    { key: "stores", path: "/board/stores", icon: StoreSvg },
    { key: "charity", path: "/board/charity", icon: CharitySvg },
    { key: "services", path: "/board/services", icon: UpdatesSvg }
  ]
];

const HeaderBottom = ({
  toggleModal,
  isModalOpen,
  activeTopIndex,
  activeSubIndex,
  setActiveSubIndex
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const currentSubIndex = subMenuItems[activeTopIndex].findIndex(
      (item) => item.path === location.pathname
    );
    if (currentSubIndex !== -1 && currentSubIndex !== activeSubIndex) {
      setActiveSubIndex(currentSubIndex);
    } else if (currentSubIndex === -1) {
      setActiveSubIndex(0);
    }
  }, [activeTopIndex, location.pathname, navigate, setActiveSubIndex]);

  const handleSubItemClick = (index) => {
    setActiveSubIndex(index);
    navigate(subMenuItems[activeTopIndex][index].path);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search-results?searchquery=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className='header-bottom'>
      <div className='container'>
        <div className='header-bottom__content'>
          <div className='header-bottom__menu'>
            <div onClick={toggleModal} className='modal-controller'>
              {isModalOpen ? <CloseSvg /> : <MenuSvg />}
            </div>
            <nav className='header-bottom__menu-list'>
              {subMenuItems[activeTopIndex].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "header-bottom__menu-item active"
                      : "header-bottom__menu-item"
                  }
                  onClick={() => handleSubItemClick(index)}
                >
                  <item.icon />
                  <span className={activeSubIndex === index ? "active" : ""}>
                    {t(item.key)}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div style={{ display: "flex", gap: "50px" }}>
            <div className='header-bottom__search'>
              <div className='header-bottom__search-icon'>
                <SearchIconSvg />
              </div>
              <input
                className='header-bottom__search-input'
                type='text'
                placeholder={t("search_placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className='header-bottom__search-btn' onClick={handleSearch}>
                {t("search_btn")}
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <Menu />}
      </div>
    </div>
  );
};

export default HeaderBottom;
