'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import RequestServiceSection from '../components/RequestServiceSection';

const testimonials = [
  {
    id: '01',
    name: 'Emma R.',
    role: 'Homeowner, Sydney',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    quote: 'Incredible service! The team was professional, efficient, and left everything spotless. Highly recommended!',
    rating: 5,
    service: 'Roof & Gutter Cleaning',
    highlight: 'Spotless clean in under 4 hours',
  },
  {
    id: '02',
    name: 'Michael T.',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    quote: 'Reliable and thorough! From pressure washing to backyard cleaning, they exceeded expectations. Will definitely use their services again.',
    rating: 5,
    service: 'Pressure Washing & Soft Wash',
    highlight: 'Transformed investment property exterior',
  },
  {
    id: '03',
    name: 'David M.',
    role: 'Residential Client',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    quote: 'A game-changer! Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
    service: 'Tile Restoration & Cleaning',
    highlight: 'Flawless tile finish & restoration',
  },
  {
    id: '04',
    name: 'Sarah Jenkins',
    role: 'Homeowner, Suburbs',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    quote: 'Our roof looks brand new! Absolute professionals who went above and beyond for our home cleaning project.',
    rating: 5,
    service: 'Full Roof Treatment',
    highlight: 'Looks brand new after 10 years',
  },
];

export default function IndoRoofTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;

      if (totalHeight <= 0) return;

      if (currentScroll >= 0 && currentScroll <= totalHeight) {
        const progress = currentScroll / totalHeight;
        setScrollProgress(progress);
        const newIndex = Math.min(
          testimonials.length - 1,
          Math.floor(progress * testimonials.length)
        );
        setCurrentIndex(newIndex);
      } else if (currentScroll > totalHeight) {
        setScrollProgress(1);
        setCurrentIndex(testimonials.length - 1);
      } else if (currentScroll < 0) {
        setScrollProgress(0);
        setCurrentIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const isLastTestimonial = currentIndex === testimonials.length - 1;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="bg-[#3c3835] text-[#f4efeb] font-sans antialiased selection:bg-[#c2a382] selection:text-stone-900 relative">

        {/* Background Ambient Glow Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-[#c2a382]/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#35312e]/40 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Pinned Sticky Scroll Container */}
        <div
          ref={containerRef}
          style={{ height: `${testimonials.length * 85}vh` }}
          className="relative bg-transparent"
        >
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-y-auto overflow-x-hidden px-4 md:px-12 lg:px-20 pt-20 md:pt-24 lg:pt-28 pb-6 bg-[#3c3835]">

            {/* ═══ Top Progress Bar ═══ */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#524943]/40 z-30">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] shadow-[0_0_12px_rgba(194,163,130,0.8)]"
                animate={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            {/* ═══ Top Spacing ═══ */}
            <div></div>

            {/* ═══ Main Content Grid ═══ */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-center my-auto">

              {/* Left Column: Rotating Circular Badge & Image */}
              <div className="md:col-span-6 flex justify-center items-center relative py-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[190px] h-[190px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] flex items-center justify-center"
                >

                  {/* Rotating SVG Circular Text */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 400">
                      <path
                        id="circlePath"
                        d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0"
                        fill="none"
                      />
                      <text
                        className="text-[11px] uppercase tracking-[0.3em] fill-[#c2a382] font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          • Testimonials • Excellence • Indo Roof Cleaning • Quality Assured •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>

                  {/* Pulsing Gold Ring behind image */}
                  <motion.div
                    className="absolute w-[135px] h-[135px] md:w-[215px] md:h-[215px] lg:w-[260px] lg:h-[260px] rounded-full border border-[#c2a382]/30"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Center Circular Image Container */}
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-[125px] h-[125px] md:w-[200px] md:h-[200px] lg:w-[245px] lg:h-[245px] rounded-full overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_0_4px_#3c3835,0_0_0_5px_rgba(194,163,130,0.4)] relative bg-[#35312e]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentTestimonial.id}
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover object-center filter grayscale-[10%] hover:grayscale-0 transition duration-700"
                      />
                    </AnimatePresence>
                  </motion.div>

                  {/* Floating Verified Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute -bottom-1 right-2 md:right-4 lg:right-6 bg-[#35312e]/95 backdrop-blur-md text-[#f4efeb] px-3 py-1 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-xl flex items-center gap-1.5 text-[10px] md:text-xs tracking-wider border border-[#c2a382]/30"
                  >
                    <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#c2a382]" />
                    <span
                      className="text-[#f4efeb] font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Verified Review
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Quote, Rating, Name, & Highlight */}
              <div className="md:col-span-6 flex flex-col justify-center text-left">

                {/* Star Rating & Service Type */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap items-center gap-2.5 md:gap-3 mb-3"
                >
                  <div className="flex gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08, type: 'spring', stiffness: 400 }}
                      >
                        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#c2a382] text-[#c2a382] drop-shadow-[0_0_6px_rgba(194,163,130,0.6)]" />
                      </motion.div>
                    ))}
                  </div>
                  <span
                    className="text-[10px] md:text-xs uppercase tracking-widest text-[#f4efeb]/90 bg-[#35312e] px-3 py-1 rounded-full border border-[#524943]/60 font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {currentTestimonial.service}
                  </span>
                </motion.div>

                {/* Quote */}
                <div className="min-h-[75px] md:min-h-[100px] lg:min-h-[120px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-base md:text-xl lg:text-3xl leading-snug text-[#f4efeb] font-light"
                      style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
                    >
                      &quot;{currentTestimonial.quote}&quot;
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                {/* Key Project Highlight Pill */}
                <div className="mt-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.03, x: 2 }}
                      className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-[#c2a382] bg-[#c2a382]/10 border border-[#c2a382]/30 px-3 py-1 rounded-lg"
                    >
                      <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#c2a382]" />
                      <span
                        className="font-medium tracking-wide text-[#f4efeb]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Result: {currentTestimonial.highlight}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Client Name & Role */}
                <div className="mt-4 pt-4 md:mt-5 md:pt-4 border-t border-[#524943]/60 flex items-center justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3
                        className="text-lg md:text-xl lg:text-2xl font-medium text-[#f4efeb]"
                        style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
                      >
                        {currentTestimonial.name}
                      </h3>
                      <p
                        className="text-[10px] md:text-xs uppercase tracking-widest text-[#c2a382] mt-0.5 font-medium"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {currentTestimonial.role}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Indo Roof Elite Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-[#f4efeb]/90"
                  >
                    <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#c2a382] drop-shadow-[0_0_6px_rgba(194,163,130,0.5)]" />
                    <span
                      className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Indo Roof Elite
                    </span>
                  </motion.div>
                </div>

              </div>

            </div>

            {/* Bottom Trust & Stats Footer Bar */}
            <div className="min-h-[60px] flex items-center mt-auto py-2">
              <AnimatePresence>
                {isLastTestimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-7xl mx-auto w-full py-3 px-4 md:px-6 lg:px-8 bg-[#f4efeb] text-[#3c3835] rounded-2xl shadow-2xl grid grid-cols-3 gap-3 items-center border border-[#e5ded7]"
                  >
                    <div className="flex items-center gap-2.5 justify-start">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#c2a382] shrink-0" />
                      <div className="min-w-0">
                        <p
                          className="text-[9px] md:text-[11px] text-[#6b6560] uppercase tracking-wider font-semibold truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Rating
                        </p>
                        <p
                          className="text-xs md:text-sm font-bold text-[#3c3835] truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          4.9 / 5.0 Average
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 justify-center border-x border-[#3c3835]/10 px-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#c2a382] shrink-0" />
                      <div className="min-w-0">
                        <p
                          className="text-[9px] md:text-[11px] text-[#6b6560] uppercase tracking-wider font-semibold truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Completed
                        </p>
                        <p
                          className="text-xs md:text-sm font-bold text-[#3c3835] truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          1,200+ Properties
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 justify-end">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#c2a382] shrink-0" />
                      <div className="min-w-0">
                        <p
                          className="text-[9px] md:text-[11px] text-[#6b6560] uppercase tracking-wider font-semibold truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Warranty
                        </p>
                        <p
                          className="text-xs md:text-sm font-bold text-[#3c3835] truncate"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          10-Year Guarantee
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      <RequestServiceSection />
    </>
  );
}