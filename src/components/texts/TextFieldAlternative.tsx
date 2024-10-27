import { motion } from "framer-motion";
import { ITextFieldAlternativeProps } from "../../types/types";
import "../../styles/TextFieldAlternative.scss";

const TextFieldAlternative = ({
  text,
  color = "#363a45"
}: ITextFieldAlternativeProps) => {
  return (
    <motion.h2
      className='text-field-alternative'
      style={{ color: color }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  );
};

export default TextFieldAlternative;
