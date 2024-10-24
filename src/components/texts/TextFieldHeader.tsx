import { motion } from "framer-motion";
import "../../styles/TextFieldHeader.scss";

interface ITextFieldHeaderProps {
  text: string;
  color?: string;
}

const TextFieldHeader = ({
  text,
  color = "#363a45"
}: ITextFieldHeaderProps) => {
  return (
    <motion.h2
      className='text-field-header'
      style={{ color: color }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  );
};

export default TextFieldHeader;
