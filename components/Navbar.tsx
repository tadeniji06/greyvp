"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<nav className='fixed top-0 w-full z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl'>
			<div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<Image
							src='/logo.png'
							alt='Grey VP Logo'
							width={140}
							height={40}
							className='object-contain'
						/>
					</motion.div>
				</Link>
				<div className='hidden md:flex items-center gap-10 text-sm tracking-widest font-bold uppercase text-black'>
					<Link
						href={isHome ? "#about" : "/#about"}
						className='hover:text-red-600 transition-colors'
					>
						Who We Are
					</Link>
					<Link
						href={isHome ? "#sectors" : "/#sectors"}
						className='hover:text-red-600 transition-colors'
					>
						Sectors
					</Link>
					<Link
						href={isHome ? "#ventures" : "/#ventures"}
						className='hover:text-red-600 transition-colors'
					>
						Ventures
					</Link>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							href='/contact'
							className='bg-black text-white px-6 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-lg'
						>
							Get in Touch
						</Link>
					</motion.div>
				</div>
			</div>
		</nav>
	);
}
