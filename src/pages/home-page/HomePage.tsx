import OfferFromDily from "../../components/sections/offer-from-dily/OfferFromDily";
import DontMiss from "../../components/sections/dont-miss/DontMiss";
import ActualOffers from "../../components/sections/actual-offers/ActualOffers";
import WillGiveFree from "../../components/sections/will-give-free/WillGiveFree";
import SalesSection from "../../components/sections/sales-section/SalesSection";
import PopularStores from "../../components/popular-stores/PopularStores";
import SellToUs from "../../components/sections/sell-to-us/SellToUs";
import HomeDescription from "../../components/description/HomeDescription";
import ServiceSlider from "../../components/sections/services-slider/Slider";
import FindSlider from "../../components/sections/find-slider/Slider";
import Phones from "../../components/sections/selection/Phones";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  fetchNotebooks,
  fetchPhones,
  fetchTechniques
} from "../../redux/feature/ProductsSlice";

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
      <OfferFromDily notebooks={notebooks} />
      <DontMiss />
      <ActualOffers techniques={techniques} />
      <WillGiveFree />
      <SalesSection />
      <PopularStores />
      <SellToUs />
      <HomeDescription />
    </div>
  );
};

export default HomePage;
