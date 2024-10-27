import { motion } from "framer-motion";
import { ITextFieldTitleProps } from "../../types/types";
import "../../styles/TextFieldTitle.scss";

const TextFieldTitle = ({ text, color = "#363a45" }: ITextFieldTitleProps) => {
  return (
    <motion.h2
      className='text-field-title'
      style={{ color: color }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  );
};

export default TextFieldTitle;
