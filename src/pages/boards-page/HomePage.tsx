import OfferFromDily from "../../components/sections/notebooks-section/Notebooks";
import DontMiss from "../../components/sections/dont-miss/DontMiss";
import ActualOffers from "../../components/sections/technique/Technique";
import WillGiveFree from "../../components/sections/will-give-free/WillGiveFree";
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
  fetchHomeAndYard,
  fetchNotebooks,
  fetchPhones,
  fetchTechniques
} from "../../redux/feature/ProductsSlice";
import Notebooks from "../../components/sections/notebooks-section/Notebooks";
import Technique from "../../components/sections/technique/Technique";
import { mockData } from "../../components/popular-stores/mockData";
import SalesImg1 from "../../assets/images/image.png";
import SalesImg2 from "../../assets/images/A0r95y5Q598.jpg";
import HomeAndYard from "../../components/sections/home-and-yard/HomeAndYard";

const BoardsPage = () => {
  const { phones, notebooks, techniques, homeandyard } = useAppSelector(
    (state) => state.products
  );
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchPhones());
    dispath(fetchNotebooks());
    dispath(fetchTechniques());
    dispath(fetchHomeAndYard());
  }, []);

  return (
    <div>
      <ServiceSlider />
      <FindSlider />
      <Phones phones={phones} />
      <Notebooks notebooks={notebooks} />
      <HomeAndYard homeandyard={homeandyard} />
      <DontMiss />
      <Technique techniques={techniques} />
      <WillGiveFree />
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
