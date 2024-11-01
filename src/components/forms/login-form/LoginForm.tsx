// import { Formik, Form, Field } from "formik";
// import { validationSchema_LoginForm } from "../../../utils/Validations";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button, InputWithLabel } from "../../customs";
// import BackButton from "../../back/BackButton";
// import TextFieldHeader from "../../texts/TextFieldHeader";
// import "../../../styles/LoginForm.scss";

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values: any) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8081/register",
//         values
//       );
//       if (response.status === 201) {
//         navigate("/login-with-pass");
//       }
//     } catch (error: any) {
//       console.error("Registration error:", error);
//     }
//   };

//   const fields = [
//     { name: "name", placeholder: "Ваше имя", type: "text", text: "Ваше имя" },
//     {
//       name: "surname",
//       placeholder: "Ваша фамилия",
//       type: "text",
//       text: "Ваша фамилия"
//     },
//     { name: "email", placeholder: "E-mail", type: "text", text: "E-mail" },
//     {
//       name: "password",
//       placeholder: "Пароль",
//       type: "password",
//       text: "Пароль"
//     },
//     {
//       name: "confirmPassword",
//       placeholder: "Повторите пароль",
//       type: "password",
//       text: "Повторите пароль"
//     }
//   ];

//   return (
//     <div className='login-form'>
//       <TextFieldHeader text='Регистрация / Вход ' />
//       <div className='login-form-inputs'>
//         <Formik
//           initialValues={{
//             name: "",
//             surname: "",
//             email: "",
//             password: "",
//             confirmPassword: ""
//           }}
//           validationSchema={validationSchema_LoginForm}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               {fields.map((field) => (
//                 <Field
//                   key={field.name}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   type={field.type}
//                   text={field.text}
//                   component={InputWithLabel}
//                 />
//               ))}
//               <Button type='submit' disabled={isSubmitting}>
//                 Регистрация
//               </Button>
//             </Form>
//           )}
//         </Formik>
//         <BackButton />
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import { Formik, Form, Field } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { validationSchema_LoginForm } from "../../../utils/Validations";
// import { Button, InputWithLabel } from "../../customs";
// import BackButton from "../../back/BackButton";
// import TextFieldHeader from "../../texts/TextFieldHeader";
// import "../../../styles/LoginForm.scss";

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values: {
//     name: string;
//     surname: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8081/register",
//         values
//       );
//       if (response.status === 201) {
//         navigate("/login-with-pass");
//       }
//     } catch (error: any) {
//       console.error(
//         "Registration error:",
//         error.response?.data.message || error.message
//       );
//     }
//   };

//   const fields = [
//     { name: "name", placeholder: "Ваше имя", type: "text", text: "Ваше имя" },
//     {
//       name: "surname",
//       placeholder: "Ваша фамилия",
//       type: "text",
//       text: "Ваша фамилия"
//     },
//     { name: "email", placeholder: "E-mail", type: "text", text: "E-mail" },
//     {
//       name: "password",
//       placeholder: "Пароль",
//       type: "password",
//       text: "Пароль"
//     },
//     {
//       name: "confirmPassword",
//       placeholder: "Повторите пароль",
//       type: "password",
//       text: "Повторите пароль"
//     }
//   ];

//   return (
//     <div className='login-form'>
//       <TextFieldHeader text='Регистрация / Вход' />
//       <div className='login-form-inputs'>
//         <Formik
//           initialValues={{
//             name: "",
//             surname: "",
//             email: "",
//             password: "",
//             confirmPassword: ""
//           }}
//           validationSchema={validationSchema_LoginForm}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               {fields.map((field) => (
//                 <Field
//                   key={field.name}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   type={field.type}
//                   text={field.text}
//                   component={InputWithLabel}
//                 />
//               ))}
//               <Button type='submit' disabled={isSubmitting}>
//                 Регистрация
//               </Button>
//             </Form>
//           )}
//         </Formik>
//         <BackButton />
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// src/components/LoginForm.tsx
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema_LoginForm } from "../../../utils/Validations";
import { Button, InputWithLabel } from "../../customs";
import BackButton from "../../back/BackButton";
import TextFieldHeader from "../../texts/TextFieldHeader";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { registerUser } from "../../../redux/feature/authSlice";
import "../../../styles/LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.users);

  const handleSubmit = async (values: {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const resultAction = await dispatch(registerUser(values));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/login-with-pass");
    } else if (registerUser.rejected.match(resultAction)) {
      console.error(error || "Registration failed");
    }
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
              <Button type='submit' disabled={loading || isSubmitting}>
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
