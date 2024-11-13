import { Formik, Form, Field } from "formik";
import { validationSchema_LoginForm } from "../../../utils/Validations";
import { Button, InputWithLabel } from "../../customs";
import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";
import "../../../styles/LoginForm.scss";

const LoginForm = () => {
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

  const handleSubmit = () => {};

  return (
    <div className='login-form'>
      <TextFieldHeader text='Регистрация / Вход' />
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
              {fields.map((field) => (
                <Field
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  text={field.text}
                  component={InputWithLabel}
                />
              ))}
              <Button type='submit' disabled={isSubmitting}>
                Регистрация
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
