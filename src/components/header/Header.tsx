import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderTop from "./header-top/HeaderTop";
import HeaderBottom from "./header-bottom/HeaderBottom";
import "../../styles/Header.scss";

const menuItems = [
  { name: "Доска объявлений", path: "/board" },
  { name: "Сервисный центр", path: "/service" },
  { name: "Интернет-магазин Dily.ru", path: "/shop" },
  { name: "Скупка", path: "/buyout" }
];

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTopIndex, setActiveTopIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const location = useLocation();

  const handleToggleModal = () => setOpenModal((prev) => !prev);

  const handleTopItemClick = (index: number) => {
    setActiveTopIndex(index);
    setActiveSubIndex(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentTopIndex = menuItems.findIndex((item) =>
      location.pathname.startsWith(item.path)
    );
    if (currentTopIndex !== -1 && currentTopIndex !== activeTopIndex) {
      setActiveTopIndex(currentTopIndex);
    }
  }, [location.pathname]);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <HeaderTop setActiveIndex={handleTopItemClick} />
      <HeaderBottom
        toggleModal={handleToggleModal}
        isModalOpen={openModal}
        activeTopIndex={activeTopIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
    </div>
  );
};

export default Header;
