import UpdatesSvg from "../../../assets/svgs/UpdatesSvg";
import MenuSvg from "../../../assets/svgs/MenuIconSvg";
import CharitySvg from "../../../assets/svgs/CharitySvg";
import StoreSvg from "../../../assets/svgs/StoreSvg";
import SearchIconSvg from "../../../assets/svgs/SearchIconSvg";
import PlusIconSvg from "../../../assets/svgs/PlusIconSvg";
import CloseSvg from "../../../assets/svgs/CloseSvg";
import Menu from "../../menu/Menu";
import "../../../styles/HeaderBottom.scss";
import { IHeaderBottomProps } from "../../../types/types";

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
              <li className='header-bottom__menu-item'>
                <UpdatesSvg />
                <a href=''>Объявления</a>
              </li>
              <li className='header-bottom__menu-item'>
                <StoreSvg />
                <a href=''>Магазины</a>
              </li>
              <li className='header-bottom__menu-item'>
                <CharitySvg />
                <a href=''>Благотворительность</a>
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
