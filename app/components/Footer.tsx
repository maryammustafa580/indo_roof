'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TermsModal from './TermsModal';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('indoroofcleaners@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(194, 163, 130, 0.2),
                        0 0 30px 0 rgba(194, 163, 130, 0.1);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(194, 163, 130, 0),
                        0 0 40px 5px rgba(194, 163, 130, 0.2);
          }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 3rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .animate-line-grow { animation: lineGrow 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <footer className="bg-[#3c3835] text-[#f4efeb] relative overflow-hidden border-t border-[#c2a382]/20 font-sans">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#c2a382]/5 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
        <div className="absolute bottom-0 right-10 w-72 sm:w-80 h-72 sm:h-80 bg-[#c2a382]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-16 lg:py-20 relative z-10">

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-[#c2a382]/20">

            {/* Col 1-4: Brand & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-1 lg:col-span-4 space-y-4 sm:space-y-5"
            >
              <Link href="/" className="flex items-center gap-3.5 group inline-flex">
                {/* Logo Container with Glow */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 relative flex items-center justify-center rounded-full bg-[#322e2b] border border-[#c2a382]/40 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#c2a382] group-hover:shadow-[0_0_25px_rgba(194,163,130,0.4)] overflow-hidden shrink-0 animate-glow-pulse">
                  <Image
                    src="/logo.png"
                    alt="Indo Roof Cleaning Logo"
                    fill
                    className="object-cover w-full h-full p-0"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-base sm:text-lg font-light text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                  >
                    Indo Roof Cleaning
                  </span>
                </div>
              </Link>
              <p
                className="text-xs sm:text-sm text-[#f4efeb]/70 font-light leading-relaxed max-w-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Elevating property protection through advanced roof washing, delicate restoration, and expert gutter maintenance.
              </p>
            </motion.div>

            {/* Col 5-7: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4"
            >
              <h4
                className="text-xs uppercase tracking-[0.25em] text-[#c2a382] font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Quick Links
              </h4>
              <ul
                className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#f4efeb]/80 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <li>
                  <Link href="/" className="hover:text-[#c2a382] transition-colors inline-block py-0.5 relative group">
                    <span className="relative">
                      Home
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c2a382] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#c2a382] transition-colors inline-block py-0.5 relative group">
                    <span className="relative">
                      Our Services
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c2a382] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#c2a382] transition-colors inline-block py-0.5 relative group">
                    <span className="relative">
                      About Us
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c2a382] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#c2a382] transition-colors inline-block py-0.5 relative group">
                    <span className="relative">
                      Contact &amp; Bookings
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c2a382] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Col 8-10: Direct Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4"
            >
              <h4
                className="text-xs uppercase tracking-[0.25em] text-[#c2a382] font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Direct Booking
              </h4>
              <div className="space-y-2">
                <p
                  className="text-xs text-[#f4efeb]/60 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Call our direct lines:
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+17789295043"
                    className="text-sm font-medium text-white hover:text-[#c2a382] transition-all duration-300 tracking-wide py-1 hover:translate-x-1 inline-block"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +1 (778) 929-5043
                  </a>
                  <a
                    href="tel:+17789552725"
                    className="text-sm font-medium text-white hover:text-[#c2a382] transition-all duration-300 tracking-wide py-1 hover:translate-x-1 inline-block"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +1 (778) 955-2725
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Col 11-12: Action Hub — buttons side by side on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-4"
            >
              <h4
                className="text-xs uppercase tracking-[0.25em] text-[#c2a382] font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Connect
              </h4>

              {/* ✅ Buttons in a row on mobile, column on larger screens */}
              <div className="flex flex-row lg:flex-col gap-2 sm:gap-3">

                {/* Copy Email Button */}
                <div className="relative flex-1 lg:w-full">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={copyEmail}
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg bg-[#322e2b] border border-[#c2a382]/40 text-white text-[11px] sm:text-sm font-medium tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm hover:bg-[#c2a382] hover:text-stone-900 hover:border-[#c2a382] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                      <span className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-20deg]" />
                    </span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c2a382] group-hover:text-stone-900 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="relative z-10 whitespace-nowrap">Copy Email</span>
                  </motion.button>

                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: -7 }}
                        exit={{ opacity: 0, y: 0 }}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#f4efeb] text-stone-900 text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded shadow-lg whitespace-nowrap"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Instagram Link */}
                <Link
                  href="https://instagram.com/indo_roof_cleaners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg bg-[#322e2b] border border-[#c2a382]/30 text-white text-[11px] sm:text-sm font-medium tracking-wider hover:border-[#c2a382] hover:bg-[#c2a382]/10 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 group relative overflow-hidden"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                    <span className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-20deg]" />
                  </span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#c2a382] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="relative z-10 whitespace-nowrap">Instagram</span>
                </Link>

              </div>
            </motion.div>

          </div>

          {/* Bottom Copyright & Legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-[#f4efeb]/50 tracking-[0.15em] uppercase pt-6 sm:pt-8 gap-3 sm:gap-4 font-light text-center sm:text-left"
          >
            <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
              © {new Date().getFullYear()} Indo Roof Cleaning. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowModal(true)}
                className="hover:text-white transition-colors bg-transparent border-none cursor-pointer py-1 uppercase tracking-[0.15em] relative group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="relative">
                  Terms
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="hover:text-white transition-colors bg-transparent border-none cursor-pointer py-1 uppercase tracking-[0.15em] relative group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="relative">
                  Privacy Policy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>

        <TermsModal showModal={showModal} setShowModal={setShowModal} />
      </footer>
    </>
  );
}