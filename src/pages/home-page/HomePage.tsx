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
  fetchNotebooks,
  fetchPhones,
  fetchTechniques
} from "../../redux/feature/ProductsSlice";
import Notebooks from "../../components/sections/notebooks-section/Notebooks";
import Technique from "../../components/sections/technique/Technique";

const HomePage = () => {
  const { phones, notebooks, techniques } = useAppSelector(
    (state) => state.products
  );
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchPhones());
    dispath(fetchNotebooks());
    dispath(fetchTechniques());
  }, []);

  return (
    <div>
      <ServiceSlider />
      <FindSlider />
      <Phones phones={phones} />
      <Notebooks notebooks={notebooks} />
      <DontMiss />
      <Technique techniques={techniques} />
      <WillGiveFree />
      <SalesSection />
      <PopularStores />
      <SellToUs />
      <HomeDescription />
    </div>
  );
};

export default HomePage;
