import React from "react";
import Selection from "../../components/sections/selection/Selection";
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

const HomePage = () => {
  return (
    <div>
      <ServiceSlider />
      <FindSlider />
      <Selection />
      <OfferFromDily />
      <DontMiss />
      <ActualOffers />
      <WillGiveFree />
      <SalesSection />
      <PopularStores />
      <SellToUs />
      <HomeDescription />
    </div>
  );
};

export default HomePage;
