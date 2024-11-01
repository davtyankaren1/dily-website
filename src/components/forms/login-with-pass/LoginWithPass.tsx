// import { Formik, Form, Field } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { validationSchema_LoginWithPass } from "../../../utils/Validations";
// import { Button, InputWithLabel } from "../../customs";
// import BackButton from "../../back/BackButton";
// import TextFieldHeader from "../../texts/TextFieldHeader";
// import TextFieldParagraph from "../../texts/TextFieldParagraph";
// import { toast } from "react-toastify";
// import "../../../styles/LoginWithPass.scss";

// const LoginWithPass = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values: { name: string; password: string }) => {
//     try {
//       const response = await axios.post("http://localhost:8081/login", values);
//       console.log("Login successful:", response.data);
//       navigate("/board");
//     } catch (error: any) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       } else {
//         console.error("Error:", error.message);
//       }
//     }
//   };

//   const fields = [
//     {
//       name: "name",
//       placeholder: "Введите ваше имя",
//       type: "text",
//       text: "Имя"
//     },
//     {
//       name: "password",
//       placeholder: "Введите ваш пароль",
//       type: "password",
//       text: "Пароль"
//     }
//   ];

//   return (
//     <div className='login-form'>
//       <TextFieldHeader text='Вход' />
//       <div className='login-form-inputs'>
//         <Formik
//           initialValues={{ name: "", password: "" }}
//           validationSchema={validationSchema_LoginWithPass}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               {fields.map((field, index) => (
//                 <Field
//                   key={field.name}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   type={field.type}
//                   text={field.text}
//                   isRequired={true}
//                   index={index}
//                   component={InputWithLabel}
//                 />
//               ))}
//               <Button type='submit' disabled={isSubmitting}>
//                 Войти
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//       <div
//         className='forgot-password'
//         onClick={() => navigate("/restore-password")}
//       >
//         <TextFieldParagraph text='Забыли пароль?' weight='700' />
//       </div>
//       <BackButton />
//     </div>
//   );
// };

// export default LoginWithPass;

// src/components/LoginWithPass.tsx
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema_LoginWithPass } from "../../../utils/Validations";
import { Button, InputWithLabel } from "../../customs";
import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginUser } from "../../../redux/feature/authSlice";
import "../../../styles/LoginWithPass.scss";

const LoginWithPass = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.users);

  const handleSubmit = async (values: { name: string; password: string }) => {
    const resultAction = await dispatch(loginUser(values));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/board");
    } else if (loginUser.rejected.match(resultAction)) {
      toast.error(error || "Login failed");
    }
  };

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
              <Button type='submit' disabled={loading || isSubmitting}>
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
