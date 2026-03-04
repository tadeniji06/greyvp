"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<div className='bg-black text-white min-h-screen selection:bg-red-600 selection:text-white'>
			<Navbar />

			<main className='pt-40 pb-20 px-6'>
				<div className='max-w-3xl mx-auto'>
					<motion.div {...fadeInUp} className='mb-16'>
						<h1 className='text-5xl md:text-7xl font-black mb-6'>
							Let&apos;s <span className='text-red-600'>Connect</span>
							.
						</h1>
						<p className='text-xl text-neutral-400 font-light leading-relaxed'>
							Have a project in mind or want to explore venture
							opportunities? Drop us a message and we&apos;ll get back
							to you shortly.
						</p>
					</motion.div>

					<motion.form
						{...fadeInUp}
						transition={{ delay: 0.2, duration: 0.6 }}
						className='space-y-8'
						onSubmit={(e) => e.preventDefault()}
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='space-y-2'>
								<label className='text-xs font-bold uppercase tracking-widest text-neutral-500'>
									Name
								</label>
								<input
									type='text'
									placeholder='John Doe'
									className='w-full bg-neutral-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-red-600 transition-all font-medium'
								/>
							</div>
							<div className='space-y-2'>
								<label className='text-xs font-bold uppercase tracking-widest text-neutral-500'>
									Email
								</label>
								<input
									type='email'
									placeholder='john@example.com'
									className='w-full bg-neutral-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-red-600 transition-all font-medium'
								/>
							</div>
						</div>

						<div className='space-y-2'>
							<label className='text-xs font-bold uppercase tracking-widest text-neutral-500'>
								Message
							</label>
							<textarea
								rows={6}
								placeholder='How can we help?'
								className='w-full bg-neutral-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-red-600 transition-all font-medium resize-none'
							></textarea>
						</div>

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 uppercase tracking-widest'
						>
							Send Message
						</motion.button>
					</motion.form>
				</div>
			</main>

			<Footer />
		</div>
	);
}
