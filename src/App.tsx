import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/boards-page/HomePage";
import ProductsPage from "./pages/products-page/ProductsPage";
import ProductSinglePage from "./pages/product-single-page/ProductSinglePage";
import ScrollToTop from "./components/scroll-top/ScrollToTop";
import UserAuthPage from "./pages/user-auth/UserAuthPage";
import LoginWithPassPage from "./pages/login-with-pass/LoginWithPassPage";
import RestorePassPage from "./pages/restore-pass/RestorePassPage";
import MessageSentPage from "./pages/message-sent/MessageSentPage";
import LoginFormPage from "./pages/login-form/LoginFormPage";
import ConfirmCodePage from "./pages/confirm-code-page/ConfirmCodePage";
import FormLayout from "./components/form-layout/FormLayout";
import StoresPage from "./pages/stores-page/StoresPage";
import CharityPage from "./pages/charity-page/CharityPage";
import ServicesServicePage from "./pages/services-pages/ServicesServicePage";
import ServicesPartsPage from "./pages/services-pages/ServicesPartsPage";
import BoardsPage from "./pages/boards-page/HomePage";
import { ToastContainer } from "react-toastify";
import ProfilePage from "./pages/profile-page/ProfilePage";
import BasketPage from "./pages/basket-page/BasketPage";

const App: React.FC = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = [
    "/auth",
    "/login-with-pass",
    "/restore-password",
    "/message-sent",
    "/login-form",
    "/confirm-code"
  ];

  const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className='App'>
      <ToastContainer autoClose={1000} />
      {!hideHeaderFooter && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigate to='/board' replace />} />

        <Route path='/board' element={<BoardsPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/board/ads' element={<HomePage />} />
        <Route path='/board/stores' element={<StoresPage />} />
        <Route path='/board/charity' element={<CharityPage />} />

        <Route path='/service' element={<ServicesServicePage />} />
        <Route path='/service/services' element={<ServicesServicePage />} />
        <Route path='/service/parts' element={<ServicesPartsPage />} />

        <Route path='/phones' element={<ProductsPage />} />
        <Route path='/notebooks' element={<ProductsPage />} />
        <Route path='/techniques' element={<ProductsPage />} />
        <Route path='/home-and-yard' element={<ProductsPage />} />
        <Route path='/toys' element={<ProductsPage />} />

        <Route path='/phones/:id' element={<ProductSinglePage />} />
        <Route path='/notebooks/:id' element={<ProductSinglePage />} />
        <Route path='/techniques/:id' element={<ProductSinglePage />} />
        <Route path='/home-and-yard/:id' element={<ProductSinglePage />} />
        <Route path='/toys/:id' element={<ProductSinglePage />} />

        <Route path='/what-we-repair' element={<h1>What we repair</h1>} />
        <Route
          path='/services-addresses'
          element={<h1>Services Addresses</h1>}
        />

        <Route element={<FormLayout />}>
          <Route path='/auth' element={<UserAuthPage />} />
          <Route path='/login-with-pass' element={<LoginWithPassPage />} />
          <Route path='/restore-password' element={<RestorePassPage />} />
          <Route path='/message-sent' element={<MessageSentPage />} />
          <Route path='/login-form' element={<LoginFormPage />} />
          <Route path='/confirm-code' element={<ConfirmCodePage />} />
        </Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
