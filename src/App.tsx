import React from "react";
import Slider from "./components/services-slider/Slider";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FindSlider from "./components/find-slider/Slider";
// import FormLayout from "./components/form-layout/FormLayout";
// import LoginForm from "./components/forms/login-form/LoginForm";
// import LoginWithPass from "./components/forms/login-with-pass/LoginWithPass";
// import { Route, Routes } from "react-router-dom";
// import ConfirmCode from "./components/forms/confirm-code/ConfirmCode";
// import RestorePassword from "./components/forms/restore-pass/RestorePassword";
// import UserAuthentication from "./components/forms/user-auth/UserAuthentication";
// import MessageSent from "./components/forms/message-sent/MessageSent";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <FormLayout>
        <Routes>
          <Route path='/' element={<UserAuthentication />} />
          <Route path='/login-with-pass' element={<LoginWithPass />} />
          <Route path='/restore-password' element={<RestorePassword />} />
          <Route path='/message-sent' element={<MessageSent />} />
          <Route path='/login-form' element={<LoginForm />} />
          <Route path='/confirm-code' element={<ConfirmCode />} />
        </Routes>
      </FormLayout> */}

      <Header />

      <Slider />
      <FindSlider />

      <Footer />
    </div>
  );
};

export default App;
