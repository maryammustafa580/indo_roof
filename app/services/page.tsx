'use client';

import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CleanImage from '../components/clean';
import GetQuote from '../components/GetQuoteForm';

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@200;300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="relative min-h-[100dvh] bg-[#3c3835] text-[#f4efeb] font-sans selection:bg-[#c2a382] selection:text-stone-900 overflow-x-hidden flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
        
        {/* Top spacing helper */}
        <div className="w-full"></div>

        {/* Main Hero Section */}
        <main className="flex-grow flex flex-col justify-center max-w-6xl mx-auto w-full my-auto relative z-30 py-8 sm:py-10 lg:py-0">
          
          {/* Row 1: Pristine */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-left pl-16 sm:pl-28 md:ml-10 lg:ml-20 md:pl-[100px] lg:pl-[200px] relative z-20"
          >
            <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[8rem] font-light tracking-tight leading-[1.1] sm:leading-none text-[#f4efeb] drop-shadow-md" style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}>
              Pristine
            </h1>
          </motion.div>

          {/* Row 2: surfaces + Static Image Container */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-start my-2 lg:my-1 relative z-25 pl-2 sm:pl-4 md:ml-10 lg:ml-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[8rem] font-serif italic tracking-tight leading-[1.1] sm:leading-none text-[#c2a382] drop-shadow-md font-light text-left"
              style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}
            >
              surfaces
            </motion.h1>

            {/* Static Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: '6px',
              }}
              className="w-[220px] sm:w-[260px] md:w-[280px] h-[75px] sm:h-[85px] md:h-[95px] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)] border border-[#c2a382]/30 flex-shrink-0 my-3 md:my-0 md:ml-8 lg:ml-16 z-20 group bg-[#322e2b]"
            >
              <img 
                src="about.png" 
                alt="Indo Roof Cleaners Project Showcase" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#3c3835]/80"></div>
            </motion.div>
          </div>

          {/* Row 3: guaranteed + Bottom Description Paragraph */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start mt-1 relative z-20 pl-2 sm:pl-4 md:ml-10 lg:ml-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[8rem] font-light tracking-tight leading-[1.1] sm:leading-none lowercase md:pl-[100px] lg:pl-[200px] text-[#f4efeb] drop-shadow-md text-left pl-16 sm:pl-28"
              style={{ fontFamily: "'Baskerville', 'Cormorant Garamond', serif" }}
            >
              guaranteed
            </motion.h1>

            {/* Bottom Description Paragraph - Mobile par right side par shift karne ke liye ml-auto add kar diya hai */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              className="mt-4 md:mt-0 md:mb-2 lg:mb-4 ml-auto md:ml-6 lg:ml-12 relative z-20 bg-[#35312e] border border-[#524943]/60 p-3 sm:p-4 rounded-xl shadow-lg w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] text-left flex-shrink-0"
            >
              <p className="text-[8px] sm:text-[9px] leading-relaxed text-[#f4efeb]/90 tracking-[0.15em] sm:tracking-[0.2em] font-light">
                FROM ADVANCED ROOF PRESSURE CLEANING TO SEAMLESS PROPERTY MAINTENANCE, WE DELIVER UNRIVALED EXCELLENCE AT EVERY STAGE.
              </p>
            </motion.div>
          </div>

        </main>

        {/* Bottom spacing helper */}
        <div className="w-full"></div>

      </div>
      <BeforeAfterSlider />
      <CleanImage />
      <GetQuote />
    </>
  );
}