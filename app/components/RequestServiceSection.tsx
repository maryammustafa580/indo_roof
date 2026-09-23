'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RequestServiceSection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative bg-[#f4efeb] py-20 md:py-28 lg:py-40 px-6 md:px-12 lg:px-20 text-center flex flex-col items-center justify-center font-sans overflow-hidden">

        {/* Ambient Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c2a382]/10 blur-[120px] pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-xl mx-auto flex flex-col items-center relative z-10">

          {/* Eyebrow text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg sm:text-xl text-[#3c3835] mb-8 tracking-wide font-light"
            style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
          >
            Looking for Cleanliness?
          </motion.p>

          {/* Gold Premium Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-flex group"
          >
            {/* Outer Glow — pulsing */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] opacity-40 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse" />

            {/* Animated Gold Border */}
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#c2a382] via-[#e6d5bc] to-[#c2a382] bg-[length:200%_100%] animate-[border-flow_3s_linear_infinite] opacity-100" />

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative inline-flex items-center justify-center gap-2 px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm text-white overflow-hidden bg-gradient-to-b from-[#d4b896] via-[#c2a382] to-[#a88865] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2),0_8px_30px_-8px_rgba(194,163,130,0.8)] uppercase tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Top highlight */}
              <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />

              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />

              <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] whitespace-nowrap">
                Request a service
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          </motion.div>

        </div>
      </section>

      <style jsx global>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );
}