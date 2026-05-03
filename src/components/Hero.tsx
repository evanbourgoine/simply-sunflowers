"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-wheat overflow-hidden flex items-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-citrus/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-amber/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Spinning star */}
      <motion.div
        className="absolute top-8 right-10 text-citrus/30 text-[180px] leading-none select-none pointer-events-none font-display"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center py-24">
        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-amber font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Summer Collection · 2025
          </motion.p>

          <motion.h1
            className="font-display text-6xl md:text-7xl lg:text-8xl text-olive leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bloom
            <br />
            Where You
            <br />
            <span className="text-amber italic">Stand.</span>
          </motion.h1>

          <motion.p
            className="font-body text-olive/70 text-lg max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sun-soaked styles made for warm days, golden hours, and everything
            in between.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link
              href="/shop"
              className="bg-olive text-linen font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="font-body text-sm tracking-widest uppercase text-olive underline underline-offset-4 hover:text-amber transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Right — Image Collage */}
        <div className="relative hidden md:flex justify-center items-center h-[520px]">
          <motion.div
            className="absolute top-0 right-8 w-64 h-80 bg-olive/10 border border-wheat overflow-hidden shadow-xl rotate-2"
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            whileHover={{
              scale: 1.03,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80"
              alt="Summer fashion"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-4 w-56 h-72 bg-olive/10 border border-wheat overflow-hidden shadow-xl -rotate-3"
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            whileHover={{
              scale: 1.03,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
              alt="Summer lookbook"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute top-[40%] left-0 bg-linen border border-wheat shadow-lg px-4 py-3 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <p className="font-display text-olive text-sm italic">
              New Arrivals
            </p>
            <p className="font-body text-xs text-olive/60 tracking-widest uppercase mt-0.5">
              Just dropped
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-0 bg-citrus text-olive font-body text-xs tracking-widest uppercase px-4 py-2 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            From $29
          </motion.div>
        </div>
      </div>
    </section>
  );
}
