import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FindSlider from "./components/sections/find-slider/Slider";
import FormLayout from "./components/form-layout/FormLayout";
import { Route, Routes } from "react-router-dom";
import LoginWithPassPage from "./pages/login-with-pass/LoginWithPassPage";
import ConfirmCodePage from "./pages/confirm-code-page/ConfirmCodePage";
import LoginFormPage from "./pages/login-form/LoginFormPage";
import MessageSentPage from "./pages/message-sent/MessageSentPage";
import UserAuthPage from "./pages/user-auth/UserAuthPage";
import RestorePassPage from "./pages/restore-pass/RestorePassPage";
import Card from "./components/card/CardItem";
import CardItem from "./components/card/CardItem";
import Selection from "./components/sections/selection/Selection";
import ServiceSlider from "./components/sections/services-slider/Slider";
import OfferFromDily from "./components/sections/offer-from-dily/OfferFromDily";
import ActualOffers from "./components/sections/actual-offers/ActualOffers";
import WillGiveFree from "./components/sections/will-give-free/WillGiveFree";
import DontMiss from "./components/sections/dont-miss/DontMiss";
import PopularStores from "./components/popular-stores/PopularStores";
import SalesSection from "./components/sections/sales-section/SalesSection";
import SellToUs from "./components/sections/sell-to-us/SellToUs";
import HomeDescription from "./components/description/HomeDescription";
import PhonesPage from "./pages/phones-page/PhonesPage";
import HomePage from "./pages/home-page/HomePage";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <FormLayout>
        <Routes>
          <Route path='/' element={<UserAuthPage />} />
          <Route path='/login-with-pass' element={<LoginWithPassPage />} />
          <Route path='/restore-password' element={<RestorePassPage />} />
          <Route path='/message-sent' element={<MessageSentPage />} />
          <Route path='/login-form' element={<LoginFormPage />} />
          <Route path='/confirm-code' element={<ConfirmCodePage />} />
        </Routes>
      </FormLayout> */}
      {/* <Header />
      <ServiceSlider />
      <FindSlider />
      <Selection />
      <OfferFromDily />
      <DontMiss />
      <ActualOffers />
      <WillGiveFree />
      <SalesSection />
      <PopularStores />
      <SellToUs /> */}
      {/* <HomeDescription /> */}
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<PhonesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
