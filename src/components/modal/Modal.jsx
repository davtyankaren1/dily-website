import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "../../styles/Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <motion.div
      className='modal-overlay'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className='modal-content'
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        s
      </motion.div>
    </motion.div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
