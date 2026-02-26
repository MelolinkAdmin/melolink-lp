"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.2 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Dispara um pouco antes de entrar na tela
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};