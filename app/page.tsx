"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	};

	const stagger = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
		transition: { staggerChildren: 0.2 },
	};

	return (
		<div className='bg-black text-white min-h-screen selection:bg-red-600 selection:text-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent opacity-20'></div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='relative z-10'
				>
					<h1 className='text-5xl md:text-8xl font-black max-w-5xl tracking-tight mb-8 leading-[0.95]'>
						Building the{" "}
						<span className='text-red-600 italic'>Tomorrow</span> of
						African Innovation.
					</h1>
					<p className='text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed'>
						Strategic Venture Building for the Digital Economy. We
						identify, co-create, and scale the technologies disrupting
						business from{" "}
						<span className='text-white'>
							Silicon Valley to Silicon Savannah
						</span>
						.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className='absolute bottom-10'
				>
					<div className='animate-bounce'>
						<svg
							className='w-6 h-6 text-neutral-500'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 14l-7 7m0 0l-7-7m7 7V3'
							/>
						</svg>
					</div>
				</motion.div>
			</section>

			{/* Who We Are Section */}
			<motion.section
				id='about'
				{...fadeInUp}
				className='py-32 px-6 bg-neutral-950'
			>
				<div className='max-w-7xl mx-auto'>
					<div className='flex flex-col md:flex-row gap-16 items-start'>
						<div className='md:w-1/2'>
							<h2 className='text-4xl md:text-7xl font-bold leading-tight mb-4'>
								Who We <span className='text-red-600'>Are</span>.
							</h2>
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: 96 }}
								viewport={{ once: true }}
								className='h-2 bg-red-600 mb-8 rounded-full'
							></motion.div>
						</div>
						<div className='md:w-1/2 space-y-6 text-2xl text-neutral-400 leading-relaxed font-light'>
							<p>
								Grey Venture Partners is a venture building firm
								dedicated to the African market. We don&apos;t just
								invest; we{" "}
								<span className='text-white font-medium italic'>
									found and scale
								</span>
								.
							</p>
							<p>
								Our current focus is on{" "}
								<span className='text-white font-medium underline decoration-red-600 decoration-[3px] underline-offset-8'>
									Martech
								</span>
								,{" "}
								<span className='text-white font-medium underline decoration-red-600 decoration-[3px] underline-offset-8'>
									SaaS
								</span>
								, and{" "}
								<span className='text-white font-medium underline decoration-red-600 decoration-[3px] underline-offset-8'>
									Marketplaces
								</span>
								, as well as high-impact news and media publications.
							</p>
							<p>
								We bridge the gap between global innovations and local
								execution, creating a sustainable ecosystem for the
								next generation of tech leaders.
							</p>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Sectors Grid */}
			<section
				id='sectors'
				className='py-32 px-6 relative overflow-hidden'
			>
				<div className='max-w-7xl mx-auto relative z-10'>
					<motion.h3
						{...fadeInUp}
						className='text-sm font-black tracking-[0.4em] uppercase mb-16 text-neutral-600'
					>
						Focus Sectors
					</motion.h3>
					<motion.div
						variants={stagger}
						initial='initial'
						whileInView='whileInView'
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
					>
						{[
							{
								title: "Martech",
								desc: "Automating success through data-driven marketing tools.",
							},
							{
								title: "SaaS",
								desc: "Scalable software reaching every corner of the African enterprise.",
							},
							{
								title: "Marketplaces",
								desc: "Connecting buyers and sellers across the continent's largest industries.",
							},
							{
								title: "Media & News",
								desc: "Intelligence for the digital economy, spotlighting the winners of tomorrow.",
							},
						].map((sector, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								whileHover={{
									y: -10,
									backgroundColor: "rgba(255, 255, 255, 0.05)",
								}}
								className='group p-10 rounded-3xl border border-white/5 bg-white/[0.02] transition-all cursor-default relative overflow-hidden'
							>
								<div className='text-red-600 text-4xl font-black mb-6 opacity-50'>
									0{i + 1}
								</div>
								<h4 className='text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors uppercase tracking-tight'>
									{sector.title}
								</h4>
								<p className='text-neutral-400 leading-relaxed font-medium'>
									{sector.desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Ventures Section */}
			<section id='ventures' className='py-32 px-6 bg-neutral-950'>
				<div className='max-w-7xl mx-auto'>
					<motion.div {...fadeInUp} className='mb-24'>
						<h2 className='text-4xl md:text-6xl font-black mb-4'>
							Ventures{" "}
							<span className='text-red-600 italic'>
								Under Management
							</span>
							.
						</h2>
						<p className='text-neutral-500 text-xl font-medium'>
							Diverse projects pushing the boundaries of technology
							and communication.
						</p>
					</motion.div>

					<motion.div
						variants={stagger}
						initial='initial'
						whileInView='whileInView'
						className='grid grid-cols-1 lg:grid-cols-3 gap-12'
					>
						{/* BUMA */}
						<motion.div
							variants={fadeInUp}
							className='flex flex-col gap-8 group'
						>
							<div className='aspect-video relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12 transition-all hover:border-red-600/50 hover:bg-white/10'>
								<Image
									src='/buma.png'
									alt='Buma Logo'
									fill
									className='object-contain p-12 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out'
								/>
							</div>
							<div>
								<h4 className='text-3xl font-black mb-4 flex items-center justify-between'>
									Buma
									<a
										href='https://mybuma.com'
										target='_blank'
										className='text-red-500 text-sm font-bold bg-white px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition-all uppercase tracking-tighter'
									>
										Visit site
									</a>
								</h4>
								<p className='text-neutral-400 leading-relaxed text-lg font-light'>
									The ultimate media-buying marketplace in Africa.
									Bridging the physical and digital, Buma streamlines
									the acquisition of billboards (OOH), digital real
									estate, radio slots, and localized ads into one
									seamless platform.
								</p>
							</div>
						</motion.div>

						{/* DM360 */}
						<motion.div
							variants={fadeInUp}
							className='flex flex-col gap-8 group'
						>
							<div className='aspect-video relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12 transition-all hover:border-blue-500/50 hover:bg-white/10'>
								<Image
									src='/dm360.png'
									alt='DM360 Logo'
									fill
									className='object-contain p-12 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out'
								/>
							</div>
							<div>
								<h4 className='text-3xl font-black mb-4 flex items-center justify-between'>
									DM360
									<a
										href='https://thedm360.com'
										target='_blank'
										className='text-blue-500 text-sm font-bold bg-white px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all uppercase tracking-tighter'
									>
										Visit site
									</a>
								</h4>
								<p className='text-neutral-400 leading-relaxed text-lg font-light'>
									A comprehensive marketing tech software suite. From
									automation to analytics, DM360 provides full-stack
									digital tools to optimize marketing campaigns and
									drive data-backed success for the modern enterprise.
								</p>
							</div>
						</motion.div>

						{/* B360 Group */}
						<motion.div
							variants={fadeInUp}
							className='flex flex-col gap-8 group'
						>
							<div className='aspect-video relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12 transition-all hover:border-zinc-500/50 hover:bg-white/10'>
								<Image
									src='/group.png'
									alt='The B360 Group Logo'
									fill
									className='object-contain p-8 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out'
								/>
							</div>
							<div>
								<h4 className='text-3xl font-black mb-4 flex items-center justify-between'>
									The B360 Group
									<a
										href='https://theb360group.com'
										target='_blank'
										className='text-neutral-900 text-sm font-bold bg-white px-3 py-1 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-tighter'
									>
										Visit site
									</a>
								</h4>
								<p className='text-neutral-400 leading-relaxed text-lg font-light'>
									The nexus of Publications, Events, and TV. B360
									tracks the emerging technologies disrupting business
									from Silicon Valley to Silicon Savannah. We empower
									you with intelligence on AI, the Digital Economy,
									and the Future of Work.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
