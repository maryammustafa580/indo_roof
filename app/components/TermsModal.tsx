'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermsModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function TermsModal({ showModal, setShowModal }: TermsModalProps) {
  // Modal open hone par background scroll lock karne ke liye
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#f4efeb] border border-[#8c6d4f]/30 w-full max-w-lg p-5 sm:p-8 rounded-2xl shadow-2xl relative text-stone-900 max-h-[85vh] overflow-y-auto my-auto"
            >
              {/* Close Button (top) */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-500 hover:text-stone-900 text-lg w-8 h-8 rounded-full flex items-center justify-center border border-stone-300 transition-colors cursor-pointer z-10"
              >
                ✕
              </button>

              {/* Eyebrow Label */}
              <span
                className="text-[#8c6d4f] text-xs font-bold tracking-[0.25em] uppercase block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Legal Policy
              </span>

              {/* Heading */}
              <h3
                className="text-2xl sm:text-3xl font-normal text-stone-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
              >
                Terms &amp; Conditions
              </h3>

              {/* Body */}
              <div
                className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>
                  Welcome to our platform. By submitting your quote request for roof cleaning and exterior restoration services, you agree to the following terms:
                </p>
                <p>
                  <strong
                    className="text-stone-900 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    1. Data Collection:
                  </strong>{' '}
                  We collect personal details (such as your name and email) solely for the purpose of communicating project estimates, coordinating roof inspections, and scheduling soft-wash treatments.
                </p>
                <p>
                  <strong
                    className="text-stone-900 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    2. Privacy Assurance:
                  </strong>{' '}
                  Your contact information is kept strictly confidential and will never be shared, sold, or rented to third-party marketing entities.
                </p>
                <p>
                  <strong
                    className="text-stone-900 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    3. Service Estimations:
                  </strong>{' '}
                  Quotes provided through this form are estimates based on initial client descriptions and are subject to final on-site technical inspection.
                </p>
              </div>

              {/* ═══ Close & Return Button — Hero-style Gold ═══ */}
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="relative inline-flex group">
                  {/* Outer Glow — pulsing */}
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] opacity-40 group-hover:opacity-80 blur-xl transition-opacity duration-500 animate-pulse" />

                  {/* Animated Gold Border */}
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#c2a382] via-[#e6d5bc] to-[#c2a382] bg-[length:200%_100%] animate-[border-flow_3s_linear_infinite] opacity-100" />

                  <motion.button
                    onClick={() => setShowModal(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs text-white overflow-hidden bg-gradient-to-b from-[#d4b896] via-[#c2a382] to-[#a88865] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2),0_8px_30px_-8px_rgba(194,163,130,0.8)] uppercase tracking-[0.2em] cursor-pointer"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {/* Top highlight */}
                    <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />

                    {/* Shine sweep */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />

                    <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] whitespace-nowrap">
                      Close &amp; Return
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global keyframes */}
      <style jsx global>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );
}