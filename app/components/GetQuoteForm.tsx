'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TermsModal from './TermsModal';

export default function GetQuote() {
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-[#f4efeb]" />;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(140, 109, 79, 0.25),
                        0 20px 40px -10px rgba(0,0,0,0.15);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(140, 109, 79, 0),
                        0 25px 50px -10px rgba(0,0,0,0.25);
          }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 3rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }

        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .animate-line-grow { animation: lineGrow 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* ✅ Section: plain bg, NO glows — seam completely removed */}
      <div className="relative min-h-[auto] sm:min-h-screen bg-[#f4efeb] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-14 md:py-16 lg:py-20 text-[#8c6d4f] selection:bg-[#8c6d4f] selection:text-white overflow-x-hidden">

        {/* ❌ All decorative glows removed to prevent seams on left & right edges */}

        {/* Main Headings Container */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 text-center mb-4 sm:mb-10 md:mb-12 w-full max-w-xl px-2"
        >
          <h2
            className="flex flex-col items-center tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
          >
            <span
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 animate-fade-in-up"
            >
              Get Your
            </span>
            <span
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#8c6d4f] mt-1 sm:mt-2 animate-fade-in-up delay-200"
            >
              Roof Estimate
            </span>
          </h2>
          <p
            className="text-stone-600 text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-2 sm:mt-4 font-light px-2 animate-fade-in-up delay-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Professional Soft-Wash &amp; Restoration Services
          </p>
          <div className="w-10 sm:w-12 h-[2px] bg-[#8c6d4f] mx-auto mt-3 sm:mt-6 animate-line-grow delay-600" />
        </motion.div>

        {/* Form Container */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-4 sm:space-y-6 px-2"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Your Name */}
          <div className="relative group">
            <label
              className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#8c6d4f] mb-1 sm:mb-2 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-transparent border-b border-[#8c6d4f]/30 pb-1.5 sm:pb-2 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8c6d4f] text-sm sm:text-base transition-all duration-300 group-hover:border-[#8c6d4f]/50"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          {/* E-mail */}
          <div className="relative group">
            <label
              className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#8c6d4f] mb-1 sm:mb-2 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              E-Mail Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent border-b border-[#8c6d4f]/30 pb-1.5 sm:pb-2 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8c6d4f] text-sm sm:text-base transition-all duration-300 group-hover:border-[#8c6d4f]/50"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          {/* Project Details / Message */}
          <div className="relative group">
            <label
              className="block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#8c6d4f] mb-1 sm:mb-2 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Project Details / Message
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about your roof size or condition..."
              className="w-full bg-transparent border-b border-[#8c6d4f]/30 pb-1.5 sm:pb-2 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8c6d4f] text-sm sm:text-base resize-none transition-all duration-300 group-hover:border-[#8c6d4f]/50"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start space-x-3 pt-0.5 sm:pt-1">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border border-[#8c6d4f] accent-[#8c6d4f] cursor-pointer flex-shrink-0"
            />
            <label
              htmlFor="terms"
              className="text-[11px] sm:text-sm text-stone-600 cursor-pointer leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I agree with the{' '}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="underline font-medium text-[#8c6d4f] hover:text-stone-900 transition-colors bg-transparent border-none cursor-pointer p-0 inline"
              >
                terms and conditions
              </button>{' '}
              of this website for the processing of personal data.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2 sm:pt-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative overflow-hidden w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border border-[#8c6d4f]/60 bg-[#8c6d4f] flex items-center justify-center text-white hover:bg-stone-900 hover:border-stone-900 transition-all duration-500 cursor-pointer shadow-lg group animate-glow-pulse"
            >
              <span className="absolute text-white text-lg sm:text-xl lg:text-2xl font-light transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0">
                ↗
              </span>
              <span className="absolute text-white text-lg sm:text-xl lg:text-2xl font-light -translate-x-5 translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </span>
            </motion.button>
          </div>
        </motion.form>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 mt-5 sm:mt-10 md:mt-12 flex items-center justify-center"
        >
          <div className="w-20 sm:w-32 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#8c6d4f]/50 to-transparent" />
        </motion.div>

        {/* Modal */}
        <TermsModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}