import DontMiss from "../../components/sections/dont-miss/DontMiss";
import OfferFromDily from "../../components/sections/notebooks-section/Notebooks";
import ActualOffers from "../../components/sections/technique/Technique";
import WillGiveFree from "../../components/sections/will-give-free/WillGiveFree";
import Notebooks from "../../components/sections/notebooks-section/Notebooks";
import HomeAndYard from "../../components/sections/home-and-yard/HomeAndYard";
import Toys from "../../components/sections/toys/Toys";
import SalesSection from "../../components/sections/sales-section/SalesSection";
import PopularStores from "../../components/popular-stores/PopularStores";
import SellToUs from "../../components/sections/sell-to-us/SellToUs";
import HomeDescription from "../../components/description/HomeDescription";
import ServiceSlider from "../../components/sections/services-slider/Slider";
import FindSlider from "../../components/sections/find-slider/Slider";
import Phones from "../../components/sections/phones-section/Phones";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  fetchAnimals,
  fetchHomeAndYard,
  fetchNotebooks,
  fetchPhones,
  fetchTechniques,
  fetchToys
} from "../../redux/feature/ProductsSlice";
import Technique from "../../components/sections/technique/Technique";
import { mockData } from "../../components/popular-stores/mockData";
import SalesImg1 from "../../assets/images/image.png";
import SalesImg2 from "../../assets/images/A0r95y5Q598.jpg";
import Animals from "../../components/sections/animals-section/Animals";

const BoardsPage = ({ language }) => {
  const { phones, notebooks, techniques, toys, animals, homeandyard } =
    useAppSelector((state) => state.products);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchTechniques({ limit: 5, offset: 0 }));
    // dispath(fetchNotebooks({ limit: 5, offset: 0 }));
    dispath(fetchToys({ limit: 5, offset: 0 }));
    dispath(fetchAnimals({ limit: 5, offset: 0, language: language }));
    dispath(fetchHomeAndYard());
  }, [language]);

  return (
    <div>
      <ServiceSlider />
      {/* <FindSlider /> */}
      {/* <Toys toys={toys} /> */}
      <Animals animals={animals} language={language} />
      {/* <Notebooks notebooks={notebooks} /> */}
      {/* <Technique techniques={techniques} /> */}
      <DontMiss />
      {/* <WillGiveFree /> */}
      <SalesSection
        firstBannerFirstText='Магазины'
        firstBannerSecondText='Легко откройте свой интернет-магазин'
        secondBannerFirstText='Подключить тариф'
        secondBannerSecondText='Разнообразные опции для вашего бизнеса'
        salesBannerImg1={SalesImg1}
        salesBannerImg2={SalesImg2}
      />
      <PopularStores mockData={mockData} />
      <SellToUs />
      <HomeDescription />
    </div>
  );
};

export default BoardsPage;
