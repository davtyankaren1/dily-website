import { motion } from "framer-motion";
import "../../styles/BorderedButton.scss";
import { IBorderedButtonProps } from "../../types/types";

export const BorderedButton = ({
  type,
  onClick,
  children,
  disabled,
  color = "black"
}: IBorderedButtonProps) => {
  return (
    <motion.button
      style={{ color: color }}
      className='custom-bordered-btn'
      type={type}
      onClick={onClick}
      disabled={disabled}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  );
};
