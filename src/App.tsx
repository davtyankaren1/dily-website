import React from "react";
// import Slider from "./components/services-slider/Slider";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import FindSlider from "./components/find-slider/Slider";
import FormLayout from "./components/form-layout/FormLayout";
import { Route, Routes } from "react-router-dom";
import LoginWithPassPage from "./pages/login-with-pass/LoginWithPassPage";
import ConfirmCodePage from "./pages/confirm-code-page/ConfirmCodePage";
import LoginFormPage from "./pages/login-form/LoginFormPage";
import MessageSentPage from "./pages/message-sent/MessageSentPage";
import UserAuthPage from "./pages/user-auth/UserAuthPage";
import RestorePassPage from "./pages/restore-pass/RestorePassPage";

const App: React.FC = () => {
  return (
    <div className='App'>
      <FormLayout>
        <Routes>
          <Route path='/' element={<UserAuthPage />} />
          <Route path='/login-with-pass' element={<LoginWithPassPage />} />
          <Route path='/restore-password' element={<RestorePassPage />} />
          <Route path='/message-sent' element={<MessageSentPage />} />
          <Route path='/login-form' element={<LoginFormPage />} />
          <Route path='/confirm-code' element={<ConfirmCodePage />} />
        </Routes>
      </FormLayout>

      {/* <Header /> */}
      {/* <Slider /> */}
      {/* <FindSlider /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
