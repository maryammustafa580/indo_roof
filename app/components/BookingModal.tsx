'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerms?: () => void;
}

export default function BookingModal({ isOpen, onClose, onOpenTerms }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    message: '',
    termsAgreed: false,
  });

  // Modal open hone par background scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    console.log('Booking Submitted:', formData);
    onClose();
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#f4efeb] border border-[#8c6d4f]/30 w-full max-w-lg p-5 sm:p-8 rounded-2xl shadow-2xl relative text-stone-900 max-h-[85vh] overflow-y-auto my-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-500 hover:text-stone-900 text-lg w-8 h-8 rounded-full flex items-center justify-center border border-stone-300 transition-colors cursor-pointer z-10"
              >
                ✕
              </button>

              {/* Eyebrow Label */}
              <span
                className="text-[#8c6d4f] text-xs font-bold tracking-[0.25em] uppercase block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Indo Roof Cleaners
              </span>

              {/* Heading */}
              <h3
                className="text-2xl sm:text-3xl font-normal text-stone-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
              >
                Book Your Cleaning
              </h3>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b border-stone-300 py-2.5 text-xs sm:text-sm tracking-[0.15em] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#8c6d4f] transition-colors font-medium"
                  />
                </div>

                {/* Address */}
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="ADDRESS / LOCATION"
                    className="w-full bg-transparent border-b border-stone-300 py-2.5 text-xs sm:text-sm tracking-[0.15em] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#8c6d4f] transition-colors font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="PHONE NUMBER"
                    className="w-full bg-transparent border-b border-stone-300 py-2.5 text-xs sm:text-sm tracking-[0.15em] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#8c6d4f] transition-colors font-medium"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E-MAIL"
                    className="w-full bg-transparent border-b border-stone-300 py-2.5 text-xs sm:text-sm tracking-[0.15em] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#8c6d4f] transition-colors font-medium"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="TELL US ABOUT YOUR ROOF CLEANING NEEDS"
                    className="w-full bg-transparent border-b border-stone-300 py-2.5 text-xs sm:text-sm tracking-[0.15em] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#8c6d4f] transition-colors resize-none font-medium"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start sm:items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => setFormData(prev => ({ ...prev, termsAgreed: e.target.checked }))}
                    required
                    className="w-4 h-4 mt-0.5 sm:mt-0 rounded border-stone-300 text-[#8c6d4f] focus:ring-0 cursor-pointer accent-[#8c6d4f]"
                  />
                  <label
                    htmlFor="terms-checkbox"
                    className="text-xs text-stone-600 tracking-wide select-none font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    I agree with the{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="underline cursor-pointer text-stone-900 font-semibold hover:text-[#8c6d4f] transition-colors"
                    >
                      terms and conditions
                    </button>{' '}
                    of this website.
                  </label>
                </div>

                {/* ═══ Submit Button — Hero-style Gold ═══ */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <div className="relative inline-flex group">
                    {/* Outer Glow — pulsing */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] opacity-40 group-hover:opacity-80 blur-xl transition-opacity duration-500 animate-pulse" />

                    {/* Animated Gold Border */}
                    <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#c2a382] via-[#e6d5bc] to-[#c2a382] bg-[length:200%_100%] animate-[border-flow_3s_linear_infinite] opacity-100" />

                    <motion.button
                      type="submit"
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
                        Submit Request
                        <HiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </form>
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