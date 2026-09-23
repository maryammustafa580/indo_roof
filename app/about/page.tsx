"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import GetQuote from '../components/GetQuoteForm';
import QuestionsSection from '../components/QuestionsSection';

export default function About() {
  const containerRef = useRef(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@200;300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div ref={containerRef} style={{ perspective: "1400px", transformStyle: "preserve-3d" }} className="font-sans">
        
        <div className="min-h-screen w-full bg-[#3c3835] text-[#f4efeb] overflow-x-hidden flex flex-col selection:bg-[#c2a382] selection:text-stone-900">
          
          {/* 1. Header Image Section */}
          <header className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[75vh]">
            <img 
              src="about.png" 
              alt="Clean and modern building exterior managed by Indo Roof Cleaners"
              className="w-full h-full object-cover filter brightness-90"
            />
            {/* A subtle dark overlay across the image */}
            <div className="absolute inset-0 bg-stone-950/40"></div>

            {/* Bottom Fade Gradient Overlay matching the #3c3835 background */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#3c3835] via-[#3c3835]/60 to-transparent pointer-events-none"></div>
          </header>

          {/* 2. Main Content Section (Top Information Part) */}
          <section className="relative w-full bg-[#3c3835] text-[#f4efeb] px-5 sm:px-8 lg:px-16 pt-8 sm:pt-12 lg:pt-16 pb-16 md:pb-24 z-20">
            
            {/* Top Row: Heading on the left, Large Pill Badge on the right */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
              
              {/* Left Aligned Large Heading with Responsive Sizing */}
              <div className="relative mt-0 w-full md:w-auto">
                <div className="relative inline-block">
                  <h1 className="font-light text-4xl sm:text-6xl md:text-7xl lg:text-[130px] tracking-tight leading-[0.9] text-[#f4efeb]" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
                    Pristine
                  </h1>
                  {/* The script font text adjusted for mobile screens */}
                  <span className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-12 left-16 sm:left-24 md:left-32 lg:left-36 text-[#c2a382] font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-[90px] transform -rotate-6 font-light whitespace-nowrap">
                    surfaces
                  </span>
                </div>
              </div>

              {/* Right Side Oval Badge with responsive compact sizing for mobile */}
              <div className="flex items-center bg-[#f4efeb] text-stone-900 rounded-full py-2 px-3 sm:py-2.5 sm:px-4 pr-5 sm:pr-7 shadow-xl shrink-0 self-end md:self-auto border border-[#c2a382]/30 mt-8 md:mt-0 scale-90 sm:scale-100 origin-right">
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 sm:mr-4 shadow-inner bg-[#322e2b] border border-[#c2a382]/30 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Indo Roof Cleaners Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[12px] font-medium tracking-[0.2em] text-[#c2a382]">
                    EXPERT CARE
                  </span>
                  <span className="text-[12px] sm:text-[15px] font-medium tracking-wide text-stone-900 whitespace-nowrap" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
                    INDO ROOF CLEANERS
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Description text */}
            <div className="relative w-full max-w-7xl mx-auto mt-16 sm:mt-20 md:mt-28 flex justify-end">
              <div className="w-full md:w-[480px] text-left">
                <p className="text-[#c2a382] text-xs sm:text-base md:text-xl lg:text-2xl leading-snug tracking-wide font-light">
                  WHERE RELIABLE PROPERTY <br />
                  MAINTENANCE MEETS ADVANCED <br />
                  EXTERIOR CLEANING
                </p>
              </div>
            </div>

          </section>

          {/* 3. Dedicated Three Cards Feature Section with Page's Own Color Gradient */}
          <section className="relative w-full bg-[#3c3835] text-[#f4efeb] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 md:py-32 z-30 shadow-inner overflow-hidden">
            
            {/* Background Decorative Glow Elements */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c2a382]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#f4efeb]/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative w-full max-w-6xl mx-auto space-y-8" style={{ transformStyle: "preserve-3d" }}>
              
              {/* Card 1: Exterior Cleaning & Pressure Washing */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6, 
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                className="group relative bg-gradient-to-br from-[#3c3835] via-[#322e2b] to-[#272422] border border-[#c2a382]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_35px_80px_rgba(194,163,130,0.25)] hover:border-[#c2a382] overflow-hidden cursor-pointer"
              >
                {/* Watermark Number */}
                <div className="absolute right-4 top-2 text-[#f4efeb]/5 font-serif text-7xl sm:text-9xl font-extrabold select-none pointer-events-none group-hover:text-[#c2a382]/10 transition-colors duration-500">
                  01
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-start gap-4 sm:gap-6 lg:w-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#272422] text-[#c2a382] border border-[#c2a382]/30 flex items-center justify-center font-serif text-lg sm:text-xl shadow-md group-hover:bg-[#c2a382] group-hover:text-stone-900 transition-colors duration-300 shrink-0">
                      01
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.3em] text-[#c2a382] uppercase block mb-1">
                        Surface Care
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#f4efeb] group-hover:text-[#c2a382] transition-colors duration-300" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
                        Exterior & Pressure Cleaning
                      </h3>
                    </div>
                  </div>
                  <div className="lg:w-1/2 lg:border-l lg:border-[#c2a382]/30 lg:pl-8">
                    <p className="text-[#f4efeb]/80 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
                      REVITALIZING ROOFS, WALLS, AND PAVED SURFACES THROUGH DEEP-CLEANING TECHNOLOGIES AND ADVANCED PRESSURE WASHING SOLUTIONS.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Painting & Demolition */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6, 
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                className="group relative bg-gradient-to-br from-[#3c3835] via-[#322e2b] to-[#272422] border border-[#c2a382]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_35px_80px_rgba(194,163,130,0.25)] hover:border-[#c2a382] overflow-hidden cursor-pointer"
              >
                <div className="absolute right-4 top-2 text-[#f4efeb]/5 font-serif text-7xl sm:text-9xl font-extrabold select-none pointer-events-none group-hover:text-[#c2a382]/10 transition-colors duration-500">
                  02
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-start gap-4 sm:gap-6 lg:w-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#272422] text-[#c2a382] border border-[#c2a382]/30 flex items-center justify-center font-serif text-lg sm:text-xl shadow-md group-hover:bg-[#c2a382] group-hover:text-stone-900 transition-colors duration-300 shrink-0">
                      02
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.3em] text-[#c2a382] uppercase block mb-1">
                        Transformation
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#f4efeb] group-hover:text-[#c2a382] transition-colors duration-300" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
                        Painting & Demolition
                      </h3>
                    </div>
                  </div>
                  <div className="lg:w-1/2 lg:border-l lg:border-[#c2a382]/30 lg:pl-8">
                    <p className="text-[#f4efeb]/80 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
                      EXPERTLY MANAGING SAFE DEMOLITION WORKS AND FLAWLESS INTERIOR/EXTERIOR PAINTING TO GIVE PROPERTIES A FRESH, PREMIUM FINISH.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Plumbing & Maintenance */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6, 
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                className="group relative bg-gradient-to-br from-[#3c3835] via-[#322e2b] to-[#272422] border border-[#c2a382]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_35px_80px_rgba(194,163,130,0.25)] hover:border-[#c2a382] overflow-hidden cursor-pointer"
              >
                <div className="absolute right-4 top-2 text-[#f4efeb]/5 font-serif text-7xl sm:text-9xl font-extrabold select-none pointer-events-none group-hover:text-[#c2a382]/10 transition-colors duration-500">
                  03
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-start gap-4 sm:gap-6 lg:w-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#272422] text-[#c2a382] border border-[#c2a382]/30 flex items-center justify-center font-serif text-lg sm:text-xl shadow-md group-hover:bg-[#c2a382] group-hover:text-stone-900 transition-colors duration-300 shrink-0">
                      03
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.3em] text-[#c2a382] uppercase block mb-1">
                        Core Utility
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#f4efeb] group-hover:text-[#c2a382] transition-colors duration-300" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
                        Professional Plumbing
                      </h3>
                    </div>
                  </div>
                  <div className="lg:w-1/2 lg:border-l lg:border-[#c2a382]/30 lg:pl-8">
                    <p className="text-[#f4efeb]/80 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
                      DELIVERING SECURE, DEPENDABLE PLUMBING SERVICES, LEAK SOLUTIONS, AND SYSTEM UPGRADES TO MAINTAIN PEAK PROPERTY FUNCTIONALITY.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          <QuestionsSection />
          <GetQuote />
        </div>
      </div>
    </>
  );
}