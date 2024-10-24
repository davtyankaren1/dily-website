import { Formik, Form, Field } from "formik";
import { validationSchema_RestorePassword } from "../../../utils/Validations";
import { useNavigate } from "react-router-dom";
import { Button, InputWithLabel } from "../../customs";

import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";

import "../../../styles/RestorePassword.scss";

const RestorePassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string }) => {
    console.log("Form submitted:", values);
    navigate("/message-sent");
  };

  const fields = [
    {
      name: "email",
      placeholder: "Введите ваш email",
      type: "email",
      text: "E-mail"
    }
  ];

  return (
    <div className='login-form'>
      <TextFieldHeader text='Забыли пароль?' />
      <TextFieldParagraph
        text='На ваш e-mail будут высланы инструкции 
по восстановлению паролю'
      />
      <div className='login-form-inputs'>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema_RestorePassword}
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
                Отправить
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RestorePassword;
