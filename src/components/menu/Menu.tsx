import { useTranslation } from "react-i18next";
import PhonesAccessories from "../../assets/svgs/PhonesAccessories";
import ElectronicsSvg from "../../assets/svgs/ElectronicsSvg";
import HouseholdSvg from "../../assets/svgs/HouseholdSvg";
import HomeAndYard from "../../assets/svgs/HomeAndYard";
import ThingsForChilds from "../../assets/svgs/ThingsForChilds";
import AnimalsSvg from "../../assets/svgs/AnimalsSvg";
import WillGiveFreeSvg from "../../assets/svgs/WillGiveFreeSvg";
import "../../styles/Menu.scss";

const Menu = () => {
  const { t } = useTranslation(); // Use translation hook

  const menuItems = [
    {
      label: t("phones"), // Translated text for "Phones"
      icon: <PhonesAccessories />,
      path: "/phones"
    },
    {
      label: t("laptops"), // Translated text for "Laptops"
      icon: <ElectronicsSvg />,
      path: "/notebooks"
    },
    {
      label: t("home_appliances"), // Translated text for "Home Appliances"
      icon: <HouseholdSvg />,
      path: "/techniques"
    },
    {
      label: t("home_garden"), // Translated text for "Home & Garden"
      icon: <HomeAndYard />,
      path: "/home-and-yard"
    },
    {
      label: t("toys"), // Translated text for "Toys"
      icon: <ThingsForChilds />,
      path: "/toys"
    },
    {
      label: t("animals"), // Translated text for "Animals"
      icon: <AnimalsSvg />,
      path: "/animals"
    },
    {
      label: t("free_to_give"), // Translated text for "Free to Give"
      icon: <WillGiveFreeSvg />,
      path: "/will-give-free"
    }
  ];

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
