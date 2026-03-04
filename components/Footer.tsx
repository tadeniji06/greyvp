"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className='py-20 border-t border-white/10 text-center text-neutral-600'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Image
						src='/logo.png'
						alt='Grey VP Logo'
						width={120}
						height={35}
						className='opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all mx-auto mb-10 cursor-pointer'
					/>
					<p className='text-sm tracking-widest font-bold uppercase'>
						© {new Date().getFullYear()} Grey Venture Partners
						Limited.
					</p>
					<p className='text-xs mt-4'>
						Silicon Savannah — Global Growth.
					</p>
				</motion.div>
			</div>
		</footer>
	);
}
