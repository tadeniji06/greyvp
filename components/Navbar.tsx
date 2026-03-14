"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/logo.png"
              alt="Grey VP Logo"
              width={180}
              height={52}
              className="object-contain brightness-0 invert"
              priority
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest font-black uppercase text-white">
          <Link href={isHome ? "#about" : "/#about"} className="hover:text-red-400 transition-colors">
            Who We Are
          </Link>
          <Link href={isHome ? "#sectors" : "/#sectors"} className="hover:text-red-400 transition-colors">
            Sectors
          </Link>
          <Link href={isHome ? "#ventures" : "/#ventures"} className="hover:text-red-400 transition-colors">
            Ventures
          </Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-red-600 hover:text-white transition-all text-xs font-black tracking-widest"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
