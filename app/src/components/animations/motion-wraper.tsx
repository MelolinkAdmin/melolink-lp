'use client';
import { motion } from 'framer-motion';

export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export const StaggerContainer = ({ children, className }: { children: React.ReactNode, className: string }) => (
  <motion.ul 
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.ul>
);

export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.li variants={item}>
    {children}
  </motion.li>
);