import { motion } from "framer-motion";
import "../../styles/TextFieldParagraph.scss";

interface ITextFieldParagraphProps {
  text: string;
  color?: string;
  underline?: boolean;
  weight?: string;
}

const TextFieldParagraph = ({
  text,
  color = "#262626",
  underline = false,
  weight = "400"
}: ITextFieldParagraphProps) => {
  return (
    <motion.p
      className='text-field-paragraph'
      style={{
        fontWeight: weight,
        color: color,
        textDecoration: underline ? "underline" : "none"
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.p>
  );
};

export default TextFieldParagraph;
