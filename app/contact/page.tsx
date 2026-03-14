"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen selection:bg-red-700 selection:text-white">
      <Navbar />

      <main className="pt-44 pb-28 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-14"
          >
            <p className="text-[10px] font-black tracking-[0.45em] uppercase text-red-700 mb-5">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111] leading-[0.93] mb-5">
              Let&apos;s <span className="text-red-700 italic">Connect</span>.
            </h1>
            <p className="text-[#555] text-lg leading-relaxed">
              Have a project in mind or want to explore venture opportunities?
              Drop us a message and we&apos;ll get back to you shortly.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="space-y-5 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-black/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#999]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#f9f9f9] border border-black/8 rounded-xl px-5 py-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium text-[#111] placeholder:text-[#bbb] caret-red-700"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#999]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#f9f9f9] border border-black/8 rounded-xl px-5 py-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium text-[#111] placeholder:text-[#bbb] caret-red-700"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#999]">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="How can we help?"
                className="w-full bg-[#f9f9f9] border border-black/8 rounded-xl px-5 py-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium resize-none text-[#111] placeholder:text-[#bbb] caret-red-700"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              className="w-full bg-red-700 text-white font-black py-4 rounded-xl hover:bg-red-800 transition-all text-xs tracking-[0.35em] uppercase shadow-lg shadow-red-200"
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
