import * as Yup from "yup";

export const validationSchema_ConfirmCode = Yup.object({
  logincode: Yup.string()
    .matches(/^[0-9]+$/, "Logincode must be a number")
    .required("Login code is required")
});

export const validationSchema_RestorePassword = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
});

export const validationSchema_LoginForm = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters"),
  surname: Yup.string()
    .required("Surname is required")
    .min(2, "Surname must be at least 2 characters")
    .max(50, "Surname cannot be longer than 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match")
});

export const validationSchema_LoginWithPass = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
});

export const validationSchema_Register_withPhone = Yup.object({
  phoneNumber: Yup.string()
    .matches(
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format +7 (123) 456-78-90"
    )
    .required("Phone number is required")
});
