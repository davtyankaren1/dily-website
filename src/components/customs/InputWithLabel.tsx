import React, { useState } from "react";
import { FieldProps } from "formik";
import InputEyeSvg from "../../assets/svgs/InputEyeSvg"; // Ensure this is implemented correctly
import { motion } from "framer-motion";
import "../../styles/InputWithLabel.scss";

interface IInputWithLabelProps extends FieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "password";
  isRequired?: boolean;
  text: string;
  index: number;
}

export const InputWithLabel: React.FC<IInputWithLabelProps> = ({
  field,
  form,
  text,
  placeholder,
  type = "text",
  isRequired = false,
  index
}) => {
  const { name } = field;
  const { touched, errors } = form;
  const error = touched[name] && errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 }
    })
  };

  return (
    <motion.div
      custom={index}
      initial='hidden'
      animate='visible'
      variants={inputAnimation}
      className='input-container'
    >
      <label htmlFor={name} className='input-label'>
        <span className='input-label-text'>{text}</span>
        {isRequired && <span className='input-label-required-marker'>*</span>}
      </label>
      <div className='input-with-label-field'>
        <input
          {...field}
          placeholder={placeholder}
          type={type === "password" && !showPassword ? "password" : "text"}
          className={`input ${error ? "input-error" : ""}`}
          id={name}
        />
        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className='eye-icon-button'
            aria-label='Toggle password visibility'
          >
            <InputEyeSvg />
          </div>
        )}
        {error && <div className='input-error-message'>{String(error)}</div>}
      </div>
    </motion.div>
  );
};
