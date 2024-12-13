'use client';

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting animation state
      animate={{ opacity: 1, y: 0 }}  // Animation when component is rendered
      exit={{ opacity: 0, y: 50 }}    // Animation when component is removed
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
    >
      {children}
    </motion.div>
  );
}
