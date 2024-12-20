import { motion } from "framer-motion";
import "../../styles/Button.scss";
import { IButtonProps } from "../../types/types";

export const Button = ({
  type,
  onClick,
  children,
  disabled,
  bgColor = "#00c65e",
  color = "white"
}: IButtonProps) => {
  return (
    <motion.button
      style={{ backgroundColor: bgColor, color: color }}
      className='custom-btn'
      type={type}
      onClick={onClick}
      disabled={disabled}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  );
};
