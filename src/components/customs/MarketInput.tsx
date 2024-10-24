import React from "react";
import { FieldProps } from "formik";
import InputMask from "react-input-mask";
import "../../styles/Input.scss";

interface IInputProps extends FieldProps {
  placeholder?: string;
  type?: "text" | "number" | "password";
}

export const MarketInput: React.FC<IInputProps> = ({
  field,
  form,
  placeholder,
  type = "text"
}) => {
  const { name } = field;
  const { touched, errors } = form;
  const error = touched[name] && errors[name];

  return (
    <div className='input-container'>
      <InputMask
        {...field}
        placeholder={placeholder}
        type={type}
        mask='+7 (999) 999-99-99'
        className={`input ${error ? "input-error" : ""}`}
      />
      <div className='input-error-message'>
        {error && <span>{String(error)}</span>}
      </div>
    </div>
  );
};
