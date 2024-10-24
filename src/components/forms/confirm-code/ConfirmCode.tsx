import { Formik, Form, Field } from "formik";
import { validationSchema_ConfirmCode } from "../../../utils/Validations";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../customs";

import BackButton from "../../back/BackButton";
import TextFieldAlternative from "../../texts/TextFieldAlternative";
import TextFieldParagraph from "../../texts/TextFieldParagraph";

import "../../../styles/ConfirmCode.scss";

const ConfirmCode = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log("Form Submitted: ", values);
  };

  return (
    <div className='code-form'>
      <TextFieldAlternative text='+ 7 (123)-456-78-90' />
      <TextFieldParagraph text='Мы отправили вам смс с кодом подтверждения' />
      <div>
        <Formik
          initialValues={{ logincode: "" }}
          validationSchema={validationSchema_ConfirmCode}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name='logincode'
                placeholder='Введите код из SMS'
                type='text'
                component={Input}
              />
              <Button
                type='submit'
                disabled={isSubmitting}
                onClick={() => navigate("/login-form")}
              >
                Продолжить
              </Button>
            </Form>
          )}
        </Formik>

        <TextFieldParagraph underline={true} text='Отправить код еще раз' />
        <BackButton />
      </div>
    </div>
  );
};

export default ConfirmCode;
