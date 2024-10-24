import { Formik, Form, Field } from "formik";
import { validationSchema_LoginForm } from "../../../utils/Validations";
import { useNavigate } from "react-router-dom";
import { Button, InputWithLabel } from "../../customs";

import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";

import "../../../styles/LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    navigate("/login-with-pass");
    console.log(values, "values");
  };

  const fields = [
    { name: "name", placeholder: "Ваше имя", type: "text", text: "Ваше имя" },
    {
      name: "surname",
      placeholder: "Ваша фамилия",
      type: "text",
      text: "Ваша фамилия"
    },
    { name: "email", placeholder: "E-mail", type: "text", text: "E-mail" },
    {
      name: "password",
      placeholder: "Пароль",
      type: "password",
      text: "Пароль"
    },
    {
      name: "confirmPassword",
      placeholder: "Повторите пароль",
      type: "password",
      text: "Повторите пароль"
    }
  ];

  return (
    <div className='login-form'>
      <TextFieldHeader text='Регистрация / Вход ' />
      <div className='login-form-inputs'>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validationSchema_LoginForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {fields.map((field, index) => (
                <Field
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  text={field.text}
                  isRequired={true}
                  index={index}
                  component={InputWithLabel}
                />
              ))}
              <Button type='submit' disabled={isSubmitting}>
                Войти
              </Button>
            </Form>
          )}
        </Formik>

        <BackButton />
      </div>
    </div>
  );
};

export default LoginForm;
