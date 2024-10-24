import PhonesAccessories from "../../assets/svgs/PhonesAccessories";
import PersonalThingsSvg from "../../assets/svgs/PersonalThingsSvg";
import ElectronicsSvg from "../../assets/svgs/ElectronicsSvg";
import HouseholdSvg from "../../assets/svgs/HouseholdSvg";
import HomeAndYard from "../../assets/svgs/HomeAndYard";
import ThingsForChilds from "../../assets/svgs/ThingsForChilds";
import HobbiesSvg from "../../assets/svgs/HobbiesSvg";
import TransportSvg from "../../assets/svgs/TransportSvg";
import AnimalsSvg from "../../assets/svgs/AnimalsSvg";
import AutomativeSvg from "../../assets/svgs/AutomativeSvg";
import RealEstateSvg from "../../assets/svgs/RealEstateSvg";
import WorkSvg from "../../assets/svgs/WorkSvg";
import ServicesSvg from "../../assets/svgs/ServicesSvg";
import ForBusinessSvg from "../../assets/svgs/ForBusinessSvg";
import WillGiveFreeSvg from "../../assets/svgs/WillGiveFreeSvg";
import "../../styles/Menu.scss";

const menuItems = [
  { label: "Личные вещи", icon: <PersonalThingsSvg /> },
  { label: "Телефоны и аксессуары", icon: <PhonesAccessories /> },
  { label: "Электроника", icon: <ElectronicsSvg /> },
  { label: "Бытовая техника", icon: <HouseholdSvg /> },
  { label: "Дом и сад", icon: <HomeAndYard /> },
  { label: "Товары для детей", icon: <ThingsForChilds /> },
  { label: "Животные", icon: <AnimalsSvg /> },
  { label: "Хобби и отдых", icon: <HobbiesSvg /> },
  { label: "Транспорт", icon: <TransportSvg /> },
  { label: "Автотовары", icon: <AutomativeSvg /> },
  { label: "Недвижимость", icon: <RealEstateSvg /> },
  { label: "Работа", icon: <WorkSvg /> },
  { label: "Услуги", icon: <ServicesSvg /> },
  { label: "Для бизнеса", icon: <ForBusinessSvg /> },
  { label: "Отдам даром", icon: <WillGiveFreeSvg /> }
];

const Menu = ({ setHoveredItem }: any) => {
  return (
    <div className='menu'>
      <div className='container'>
        <nav className='navbar'>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className='menu-item'
              >
                <a href='#'>
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
