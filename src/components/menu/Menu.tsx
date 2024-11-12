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
  // {
  //   label: "Личные вещи",
  //   icon: <PersonalThingsSvg />,
  //   path: "/personal-things"
  // },
  {
    label: "Телефоны",
    icon: <PhonesAccessories />,
    path: "/phones"
  },
  { label: "Нотбуки", icon: <ElectronicsSvg />, path: "/notebooks" },
  { label: "Бытовая техника", icon: <HouseholdSvg />, path: "/techniques" },
  { label: "Дом и сад", icon: <HomeAndYard />, path: "/home-and-yard" },
  {
    label: "Игрушки",
    icon: <ThingsForChilds />,
    path: "/toys"
  },
  { label: "Животные", icon: <AnimalsSvg />, path: "/animals" },
  // { label: "Хобби и отдых", icon: <HobbiesSvg />, path: "/hobbies" },
  // { label: "Транспорт", icon: <TransportSvg />, path: "/transport" },
  // { label: "Автотовары", icon: <AutomativeSvg />, path: "/automotive" },
  // { label: "Недвижимость", icon: <RealEstateSvg />, path: "/real-estate" },
  // { label: "Работа", icon: <WorkSvg />, path: "/work" },
  // { label: "Услуги", icon: <ServicesSvg />, path: "/services" },
  // { label: "Для бизнеса", icon: <ForBusinessSvg />, path: "/for-business" },
  { label: "Отдам даром", icon: <WillGiveFreeSvg />, path: "/will-give-free" }
];

const Menu = () => {
  return (
    <div className='menu'>
      <div className='container'>
        <nav className='navbar'>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className='menu-item'>
                <a href={item.path}>
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
