import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { validationSchema_Register_withPhone } from "../../../utils/Validations";
import { useNavigate } from "react-router-dom";
import { BorderedButton, Button } from "../../customs";
import { FacebookSvg, OkSvg, VkSvg } from "../../../assets/svgs";
import { MarketInput } from "../../customs/MarketInput";

import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";

import "../../../styles/UserAuthentication.scss";

const iconAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3 }
};

const UserAuthentication = () => {
  const navigate = useNavigate();

  return (
    <div className='register-form'>
      <TextFieldHeader text='Регистрация / Вход ' />
      <TextFieldParagraph
        text='Введите ваш номер телефона и мы вышлем
вам код подтверждения для регистрации '
      />
      <div>
        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={validationSchema_Register_withPhone}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "values");
            setSubmitting(false);
            navigate("/confirm-code", {
              state: { phoneNumber: values.phoneNumber }
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name='phoneNumber'
                placeholder='+ 7 (123)-456-78-90'
                type='text'
                component={MarketInput}
              />
              <Button type='submit' disabled={isSubmitting}>
                Продолжить
              </Button>
            </Form>
          )}
        </Formik>

        <BorderedButton
          disabled={false}
          onClick={() => navigate("/login-with-pass")}
        >
          Войти по логину и паролю
        </BorderedButton>
        <TextFieldParagraph text='или продолжить через соцсети' />
        <div className='register-form-icons'>
          <motion.div {...iconAnimation} className='social-media-icon'>
            <FacebookSvg />
          </motion.div>
          <motion.div {...iconAnimation} className='social-media-icon'>
            <VkSvg />
          </motion.div>
          <motion.div {...iconAnimation} className='social-media-icon'>
            <OkSvg />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;
