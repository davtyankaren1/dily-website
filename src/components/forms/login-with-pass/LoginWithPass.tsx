import { Formik, Form, Field } from "formik";
import { validationSchema_LoginWithPass } from "../../../utils/Validations";
import { useNavigate } from "react-router-dom";
import { Button, InputWithLabel } from "../../customs";

import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";

import "../../../styles/LoginWithPass.scss";

const LoginWithPass = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: { name: string; password: string }) => {
    console.log("Form submitted:", values);
  };

  const fields = [
    { name: "name", placeholder: "Enter your name", type: "text", text: "Имя" },
    {
      name: "password",
      placeholder: "Enter your password",
      type: "password",
      text: "Пароль"
    }
  ];

  return (
    <div className='login-form'>
      <TextFieldHeader text='Вход' />
      <div className='login-form-inputs'>
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={validationSchema_LoginWithPass}
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
      </div>
      <div
        className='forgot-password'
        onClick={() => navigate("/restore-password")}
      >
        <TextFieldParagraph text='Забыли пароль?' weight='700' />
      </div>

      <BackButton />
    </div>
  );
};

export default LoginWithPass;
