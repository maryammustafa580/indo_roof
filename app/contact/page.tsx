'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import ConsultationForm from '../components/BookingModal';
import TermsModal from '../components/TermsModal';

export default function ConsultationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        ref={containerRef}
        className="relative min-h-screen bg-[#3c3835] text-[#f4efeb] font-sans selection:bg-[#c2a382] selection:text-[#3c3835] overflow-x-hidden"
      >
        {/* Blur wrapper when modal open */}
        <div className={`transition-all duration-500 ${(isFormOpen || isTermsOpen) ? 'filter blur-md pointer-events-none select-none' : ''}`}>

          {/* ═══════════════════════════════════════════════════
              SECTION 1: Design Consultation (get info / contact)
              ═══════════════════════════════════════════════════ */}
          <section className="relative min-h-screen w-full flex flex-col items-center justify-between px-4 sm:px-6 md:px-12 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#3c3835] overflow-hidden">

            {/* Ambient Pulsing Glows */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c2a382]/10 blur-[140px] pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c2a382]/8 blur-[120px] pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center my-auto w-full">

              {/* ═══ Typography ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center justify-center mb-12 sm:mb-20 w-full px-2"
              >

                {/* "get info" — floating animation, laptop size reduced */}
                <motion.h1
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[#c2a382] text-[65px] sm:text-[100px] md:text-[120px] lg:text-[135px] leading-[0.85] select-none font-normal tracking-wider relative z-10"
                  style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
                >
                  get info
                </motion.h1>

                {/* "contact us now" — floating animation, laptop size reduced */}
                <motion.h2
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="text-[#f4efeb] text-[32px] sm:text-[50px] md:text-[70px] lg:text-[85px] -mt-6 sm:-mt-10 md:-mt-12 lg:-mt-14 drop-shadow-md select-none font-normal tracking-wider opacity-90 relative z-20"
                  style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
                >
                  contact us now
                </motion.h2>

              </motion.div>

              {/* ═══ Gold Premium Button ═══ */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-flex group"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] opacity-40 group-hover:opacity-80 blur-xl transition-opacity duration-500 animate-pulse" />

                {/* Animated Gold Border */}
                <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#c2a382] via-[#e6d5bc] to-[#c2a382] bg-[length:200%_100%] animate-[border-flow_3s_linear_infinite] opacity-100" />

                <motion.button
                  onClick={() => setIsFormOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="relative inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-bold text-[11px] sm:text-sm text-white overflow-hidden bg-gradient-to-b from-[#d4b896] via-[#c2a382] to-[#a88865] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2),0_8px_30px_-8px_rgba(194,163,130,0.8)] uppercase tracking-[0.2em] cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />

                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />

                  <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] whitespace-nowrap">
                    BOOK AN APPOINTMENT
                  </span>
                </motion.button>
              </motion.div>

            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 2: Office & Map Details
              ═══════════════════════════════════════════════════ */}
          <section className="relative w-full min-h-[90vh] bg-[#f4efeb] text-[#3c3835] px-6 sm:px-10 md:px-20 py-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-12 lg:gap-0">

            {/* Ambient Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c2a382]/8 blur-[120px] pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-start space-y-8 sm:space-y-10 z-20 max-w-sm w-full"
            >

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <span
                  className="text-[#c2a382] text-[11px] uppercase tracking-[0.3em] font-bold block"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  BOOK AN APPOINTMENT
                </span>
                <div className="space-y-1">
                  <a
                    href="tel:+17789295043"
                    className="text-lg md:text-xl font-medium text-[#3c3835] hover:text-[#c2a382] transition-colors block tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +1 (778) 929-5043
                  </a>
                  <a
                    href="tel:+17789552725"
                    className="text-lg md:text-xl font-medium text-[#3c3835] hover:text-[#c2a382] transition-colors block tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +1 (778) 955-2725
                  </a>
                </div>
              </motion.div>

              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2"
              >
                <span
                  className="text-[#c2a382] text-[11px] uppercase tracking-[0.3em] font-bold block"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SCHEDULE:
                </span>
                <p
                  className="text-sm tracking-wide text-[#3c3835]/90 leading-relaxed font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  MONDAY TO SATURDAY<br />
                  8:00 A.M. – 7:00 P.M.
                </p>
              </motion.div>

              {/* Email + Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <a
                  href="mailto:indoroofcleaners@gmail.com"
                  className="text-sm text-[#c2a382] hover:underline tracking-wide block font-medium break-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  indoroofcleaners@gmail.com
                </a>

                <div className="flex items-center space-x-3">
                  {[
                    { icon: <FaInstagram size={14} />, href: 'https://instagram.com/indo_roof_cleaners', label: 'Instagram' },
                    { icon: <FaFacebookF size={13} />, href: '#facebook', label: 'Facebook' },
                    { icon: <FaLinkedinIn size={13} />, href: '#linkedin', label: 'LinkedIn' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="w-11 h-11 rounded-full border border-[#3c3835]/20 bg-[#3c3835] flex items-center justify-center text-[#f4efeb] hover:bg-[#c2a382] hover:text-[#3c3835] transition-colors duration-300 shadow-md"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full lg:w-[65%] h-[350px] sm:h-[450px] md:h-[650px] flex items-center justify-center"
            >
              <motion.img
                src="/map.svg"
                alt="Location Map"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.18, 0.25, 0.18],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none contrast-125"
              />
            </motion.div>

          </section>

        </div>

        {/* Modals */}
        <ConsultationForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onOpenTerms={() => setIsTermsOpen(true)}
        />

        <TermsModal showModal={isTermsOpen} setShowModal={setIsTermsOpen} />

      </div>

      <style jsx global>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );
}