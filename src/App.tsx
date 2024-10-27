import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home-page/HomePage";
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
      {!hideHeaderFooter && <Header />}

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<ProductsPage />} />
        <Route path='/notebooks' element={<ProductsPage />} />
        <Route path='/techniques' element={<ProductsPage />} />
        <Route path='/phones/:id' element={<ProductSinglePage />} />
        <Route path='/notebooks/:id' element={<ProductSinglePage />} />
        <Route path='/techniques/:id' element={<ProductSinglePage />} />

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
