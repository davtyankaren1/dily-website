import { motion } from "framer-motion";
import "../../styles/TextFieldTitle.scss";

interface ITextFieldTitleProps {
  text: string;
  color?: string;
}

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
