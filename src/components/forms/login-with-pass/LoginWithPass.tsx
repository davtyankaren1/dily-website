import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema_LoginWithPass } from "../../../utils/Validations";
import { Button, InputWithLabel } from "../../customs";
import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";
import "../../../styles/LoginWithPass.scss";

const LoginWithPass = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {};

  const fields = [
    {
      name: "name",
      placeholder: "Введите ваше имя",
      type: "text",
      text: "Имя"
    },
    {
      name: "password",
      placeholder: "Введите ваш пароль",
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
