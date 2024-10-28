import UpdatesSvg from "../../../assets/svgs/UpdatesSvg";
import MenuSvg from "../../../assets/svgs/MenuIconSvg";
import CharitySvg from "../../../assets/svgs/CharitySvg";
import StoreSvg from "../../../assets/svgs/StoreSvg";
import SearchIconSvg from "../../../assets/svgs/SearchIconSvg";
import PlusIconSvg from "../../../assets/svgs/PlusIconSvg";
import CloseSvg from "../../../assets/svgs/CloseSvg";
import Menu from "../../menu/Menu";
import { IHeaderBottomProps } from "../../../types/types";
import { NavLink } from "react-router-dom";

import "../../../styles/HeaderBottom.scss";

const HeaderBottom = ({ toggleModal, isModalOpen }: IHeaderBottomProps) => {
  return (
    <div className='header-bottom'>
      <div className='container'>
        <div className='header-bottom__content'>
          <div className='header-bottom__menu'>
            <div onClick={toggleModal} className='modal-controller'>
              {isModalOpen ? <CloseSvg /> : <MenuSvg />}
            </div>
            <ul className='header-bottom__menu-list'>
              <li activeClassName='active' className='header-bottom__menu-item'>
                <UpdatesSvg />
                <NavLink to={""}>Объявления</NavLink>
              </li>
              <li activeClassName='active' className='header-bottom__menu-item'>
                <StoreSvg />
                <NavLink to={"/stores"}>Магазины</NavLink>
              </li>
              <li activeClassName='active' className='header-bottom__menu-item'>
                <CharitySvg />
                <NavLink to={"/charity"}>Благотворительность</NavLink>
              </li>
            </ul>
          </div>

          <div className='header-bottom__search'>
            <div className='header-bottom__search-icon'>
              <SearchIconSvg />
            </div>
            <input
              className='header-bottom__search-input'
              type='text'
              placeholder='Я хочу купить'
            />
            <div className='header-bottom__search-btn'>Найти</div>
          </div>

          <div className='header-bottom__post-ad'>
            <span>Подать объявление</span>
            <div className='header-bottom__post-ad-icon'>
              <PlusIconSvg />
            </div>
          </div>
        </div>
        {isModalOpen && <Menu />}
      </div>
    </div>
  );
};

export default HeaderBottom;
