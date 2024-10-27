import React from "react";
import { IInputProps } from "../../types/types";
import "../../styles/Input.scss";

export const Input: React.FC<IInputProps> = ({
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
      <input
        {...field}
        placeholder={placeholder}
        type={type}
        className={`input ${error ? "input-error" : ""}`}
      />
      <div className='input-error-message'>
        {error && <span>{String(error)}</span>}
      </div>
    </div>
  );
};
