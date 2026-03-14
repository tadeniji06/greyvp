"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	const fadeInUp = {
		initial: { opacity: 0, y: 24 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.65 },
	};

	const stagger = {
		initial: {},
		whileInView: {},
		viewport: { once: true },
		transition: { staggerChildren: 0.12 },
	};

	const ventures = [
		{
			name: "Buma",
			logo: "/buma.png",
			url: "https://mybuma.com",
			desc: "The ultimate media-buying marketplace in Africa. Buma streamlines the acquisition of billboards (OOH), digital real estate, radio slots, and localised ads into one seamless platform.",
			padding: "p-6",
			tag: "Marketplace",
		},
		{
			name: "DM360",
			logo: "/dm360.png",
			url: "https://thedm360.com",
			desc: "A comprehensive marketing tech software suite. From automation to analytics, DM360 provides full-stack digital tools to drive data-backed success for the modern enterprise.",
			padding: "p-10",
			tag: "Martech / SaaS",
		},
		{
			name: "The B360 Group",
			logo: "/group.png",
			url: "https://theb360group.com",
			desc: "The nexus of Publications, Events, and TV. B360 tracks the emerging technologies disrupting business from Silicon Valley to Silicon Savannah, empowering you with intelligence on AI, Finance, and Innovation.",
			padding: "p-8",
			tag: "Media & Publications",
			logoBg: "bg-black",
		},
		{
			name: "M360 Solutions",
			logo: "/m360.png",
			url: "https://www.m360solutionsgroup.com/",
			desc: "A results-driven digital marketing agency delivering end-to-end campaigns, brand strategy, and performance marketing for businesses ready to grow in the digital age.",
			padding: "p-8",
			tag: "Digital Marketing",
		},
	];

	const sectors = [
		{
			title: "High Growth Service Business",
			desc: "Building and scaling professional service firms engineered for rapid, sustainable growth.",
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
	];

	return (
		<div className="bg-[#909090] min-h-screen selection:bg-red-700 selection:text-white">
			<Navbar />

			{/* ── HERO ─────────────────────────────────────── */}
			<section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
				{/* Subtle vignette */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/15 pointer-events-none" />

				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					className="relative z-10 max-w-5xl"
				>
					{/* Eyebrow */}
					<p className="text-[11px] font-black tracking-[0.45em] uppercase text-red-700 mb-8">
						Grey Venture Partners
					</p>

					<h1 className="text-5xl md:text-[5.5rem] font-black tracking-tight leading-[0.9] mb-8 text-[#111]">
						Building the{" "}
						<span className="text-red-700 italic">Tomorrow</span>
						<br />of African Innovation.
					</h1>

					<p className="text-lg md:text-xl text-[#2a2a2a] max-w-2xl mx-auto leading-relaxed font-medium">
						Strategic Venture Building for the Digital Economy — identifying, co-creating, and scaling the businesses disrupting markets from{" "}
						<span className="text-red-700 font-bold">Silicon Valley to Silicon Savannah</span>.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.3, duration: 1 }}
					className="absolute bottom-10"
				>
					<div className="animate-bounce">
						<svg className="w-5 h-5 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</motion.div>
			</section>

			{/* ── WHO WE ARE ───────────────────────────────── */}
			<section id="about" className="py-32 px-6 bg-[#f5f5f5]">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row gap-16 items-start">
						<motion.div {...fadeInUp} className="md:w-1/2">
							<p className="text-[10px] font-black tracking-[0.45em] uppercase text-red-700 mb-5">
								About Us
							</p>
							<h2 className="text-4xl md:text-6xl font-black leading-tight text-[#111]">
								Who We <span className="text-red-700">Are</span>.
							</h2>
							<div className="w-16 h-1 bg-red-700 mt-6 rounded-full" />
						</motion.div>

						<motion.div {...fadeInUp} className="md:w-1/2 space-y-5 text-lg text-[#3a3a3a] leading-relaxed">
							<p>
								Grey Venture Partners is a venture building firm dedicated to the African market. We don&apos;t just invest —{" "}
								<span className="text-red-700 font-bold italic">we found and scale</span>.
							</p>
							<p>
								Our focus spans{" "}
								<span className="font-bold text-[#111] underline decoration-red-600 decoration-2 underline-offset-4">High Growth Service Businesses</span>,{" "}
								<span className="font-bold text-[#111] underline decoration-red-600 decoration-2 underline-offset-4">SaaS</span>, and{" "}
								<span className="font-bold text-[#111] underline decoration-red-600 decoration-2 underline-offset-4">Marketplaces</span>, as well as high-impact news and media publications.
							</p>
							<p>
								We bridge the gap between global innovations and local execution — creating a sustainable ecosystem for the next generation of African tech leaders.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* ── SECTORS ─────────────────────────────────── */}
			<section id="sectors" className="py-32 px-6 bg-[#909090]">
				<div className="max-w-7xl mx-auto">
					<motion.div {...fadeInUp} className="mb-16 flex items-end justify-between flex-wrap gap-4">
						<div>
							<p className="text-[10px] font-black tracking-[0.45em] uppercase text-red-700 mb-3">
								What We Do
							</p>
							<h2 className="text-3xl md:text-5xl font-black text-[#111]">
								Focus <span className="text-red-700">Sectors</span>.
							</h2>
						</div>
					</motion.div>

					<motion.div
						variants={stagger}
						initial="initial"
						whileInView="whileInView"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
					>
						{sectors.map((sector, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								whileHover={{ y: -6 }}
								className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-black/5 cursor-default"
							>
								<p className="text-red-700 text-2xl font-black mb-5 font-mono">
									0{i + 1}
								</p>
								<h4 className="text-base font-black text-[#111] mb-3 leading-snug group-hover:text-red-700 transition-colors">
									{sector.title}
								</h4>
								<p className="text-[#666] text-sm leading-relaxed">
									{sector.desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* ── VENTURES ────────────────────────────────── */}
			<section id="ventures" className="py-32 px-6 bg-[#f5f5f5]">
				<div className="max-w-7xl mx-auto">
					<motion.div {...fadeInUp} className="mb-20">
						<p className="text-[10px] font-black tracking-[0.45em] uppercase text-red-700 mb-3">
							Portfolio
						</p>
						<h2 className="text-3xl md:text-5xl font-black text-[#111]">
							Ventures{" "}
							<span className="text-red-700">Under Management</span>.
						</h2>
						<p className="text-[#666] text-lg mt-4">
							Diverse businesses pushing the boundaries of technology and communication across Africa.
						</p>
					</motion.div>

					<motion.div
						variants={stagger}
						initial="initial"
						whileInView="whileInView"
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						{ventures.map((v, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-black/5"
							>
								{/* Logo area */}
								<div className={`aspect-video relative border-b border-black/5 flex items-center justify-center overflow-hidden ${v.logoBg ?? "bg-[#f9f9f9]"}`}>
									<Image
										src={v.logo}
										alt={`${v.name} Logo`}
										fill
										className={`object-contain ${v.padding} scale-100 group-hover:scale-105 transition-transform duration-500`}
									/>
								</div>

								{/* Content */}
								<div className="p-7">
									<div className="flex items-start justify-between gap-4 mb-3">
										<div>
											<span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-700 block mb-1">
												{v.tag}
											</span>
											<h4 className="text-xl font-black text-[#111]">{v.name}</h4>
										</div>
										<a
											href={v.url}
											target="_blank"
											rel="noreferrer"
											className="shrink-0 text-[10px] font-black tracking-wider uppercase bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-all mt-1"
										>
											Visit Site
										</a>
									</div>
									<p className="text-[#555] text-sm leading-relaxed">
										{v.desc}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
