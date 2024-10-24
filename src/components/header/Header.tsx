import { useState } from "react";
import "../../styles/Header.scss";
import HeaderTop from "./header-top/HeaderTop";
import HeaderBottom from "./header-bottom/HeaderBottom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => setOpenModal((prev) => !prev);

  return (
    <div className='header'>
      <HeaderTop />
      <HeaderBottom toggleModal={handleToggleModal} isModalOpen={openModal} />
    </div>
  );
};

export default Header;
