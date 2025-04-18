"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="text-white py-8 mt-12 md:rounded-2xl">
      <motion.div
        className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg">
          Desenvolvido por <span className="font-bold">Davi Santos</span>
        </p>
      </motion.div>
    </footer>
  );
}
