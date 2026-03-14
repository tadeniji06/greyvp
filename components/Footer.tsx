"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black py-20 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="Grey VP Logo"
            width={180}
            height={52}
            className="mx-auto mb-10 brightness-0 invert"
          />
          <p className="text-xs tracking-[0.35em] font-bold uppercase text-white/60 mb-3">
            © {new Date().getFullYear()} Grey Venture Partners Limited.
          </p>
          <p className="text-xs tracking-widest text-white/30">
            Silicon Savannah — Global Growth.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
