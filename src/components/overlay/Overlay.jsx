import React from "react";
import { motion } from "framer-motion";
const Overlay = ({ isOffset = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className={`inset-0 fixed opacity-40 bg-black ${
        isOffset ? "top-[57px]" : null
      }`}
    ></motion.div>
  );
};

export default Overlay;
