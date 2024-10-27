import { useState, useEffect } from "react";
import HeaderTop from "./header-top/HeaderTop";
import HeaderBottom from "./header-bottom/HeaderBottom";
import "../../styles/Header.scss";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleModal = () => setOpenModal((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <HeaderTop />
      <HeaderBottom toggleModal={handleToggleModal} isModalOpen={openModal} />
    </div>
  );
};

export default Header;
