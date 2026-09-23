'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface TransformationItem {
  id: number;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const transformationsData: TransformationItem[] = [
  {
    id: 1,
    beforeImage: "/before.png",
    afterImage: "/after.png",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    title: "Exterior Cleaning",
    subtitle: "Restore your building's pristine curb appeal.",
    description: "Advanced deep-clean solutions that safely eliminate stubborn dirt, mold, and weathering effects from architectural surfaces.",
    buttonText: "Book Exterior Wash"
  },
  {
    id: 2,
    beforeImage: "/before2.png",
    afterImage: "/after2.png",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    title: "Plumbing",
    subtitle: "Precision piping for total household security.",
    description: "Modernized utility layouts designed for zero leaks, optimized flow rates, and absolute long-term durability.",
    buttonText: "Schedule Plumbing Check"
  },
  {
    id: 3,
    beforeImage: "/before3.png",
    afterImage: "/after3.png",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    title: "Demolition",
    subtitle: "Safe, strategic structural clearing.",
    description: "Clean and calculated strip-outs executed with precision to prepare your space for its next high-value evolution.",
    buttonText: "Plan Demolition"
  },
  {
    id: 4,
    beforeImage: "/before4.png",
    afterImage: "/clean.png",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    title: "Painting",
    subtitle: "Flawless finishes with premium coats.",
    description: "Expert color applications and weather-resistant protective layers that instantly revitalize residential and commercial vibes.",
    buttonText: "Get Painting Quote"
  },
  {
    id: 5,
    beforeImage: "/before5.png",
    afterImage: "/after5.png",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    title: "Pressure Cleaning",
    subtitle: "High-power rejuvenation for hard surfaces.",
    description: "Blasting away years of deeply embedded grime to leave walkways, driveways, and outer walls looking brand new.",
    buttonText: "Book Pressure Wash"
  }
];

/* ═══════════════════════════════════════════════════════════
   CARD COMPONENT — Image size SAME as before
   ═══════════════════════════════════════════════════════════ */
function TransformationCard({
  item,
  index,
  isCenter,
}: {
  item: TransformationItem;
  index: number;
  isCenter: boolean;
}) {
  const router = useRouter();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // AUTO IMAGE MOVEMENT
  useEffect(() => {
    if (!isCenter) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 28000;

    const animateSlider = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.abs(Math.sin((elapsed / duration) * Math.PI));
      setSliderPosition(progress * 100);
      animationFrameId = requestAnimationFrame(animateSlider);
    };

    animationFrameId = requestAnimationFrame(animateSlider);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isCenter]);

  return (
    <div
      className={`group/card relative w-full rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#2b2623] via-[#332e2a] to-[#262220] transition-all duration-700 overflow-hidden ${
        isCenter
          ? 'shadow-[0_50px_120px_-30px_rgba(140,109,79,0.65),0_0_0_1.5px_rgba(194,163,130,0.45),0_0_80px_-20px_rgba(194,163,130,0.35)]'
          : 'shadow-[0_20px_60px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(194,163,130,0.18)]'
      }`}
    >
      {/* Top animated gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c2a382] to-transparent z-20" />

      {/* Sweeping highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden z-20 pointer-events-none">
        <div className="absolute top-0 h-full w-56 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[card-sweep_6s_ease-in-out_infinite]" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow */}
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#c2a382]/14 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c2a382]/10 blur-3xl pointer-events-none" />

      {/* Watermark number */}
      <div
        className="absolute top-4 right-5 sm:top-6 sm:right-8 text-[5rem] sm:text-[7rem] md:text-[10rem] font-black leading-none text-[#c2a382]/[0.08] pointer-events-none select-none z-0 transition-all duration-700 group-hover/card:text-[#c2a382]/[0.14]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Body — Image LEFT + Content RIGHT (mobile: column) */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch">
        {/* Image Box — SAME SIZE */}
        <div className="w-full sm:w-[55%] flex flex-shrink-0">
          <div
            ref={containerRef}
            className="relative w-full h-[180px] sm:h-auto sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] overflow-hidden select-none bg-[#1a1715]"
          >
            {/* BEFORE */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.beforeImage}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-[1400ms] ease-out group-hover/card:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-stone-900/75 backdrop-blur-xl border border-white/25 text-[#f4efeb] text-[8px] sm:text-[10px] font-bold tracking-[0.22em] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg flex items-center gap-1.5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {item.beforeLabel}
              </div>
            </div>

            {/* AFTER — auto animated */}
            <div
              className="absolute inset-0 h-full overflow-hidden z-20 pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute top-0 left-0 h-full"
                style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }}
              >
                <img
                  src={item.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-stone-900/75 backdrop-blur-xl border border-white/25 text-[#f4efeb] text-[8px] sm:text-[10px] font-bold tracking-[0.22em] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2a382] animate-pulse" />
                {item.afterLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Content — Right (mobile: below) */}
        <div className="w-full sm:w-[45%] flex flex-col justify-center space-y-2.5 sm:space-y-4 md:space-y-5 text-left p-4 sm:p-5 md:p-7 lg:p-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2 md:mb-3">
              <span className="h-[1px] w-5 sm:w-8 bg-gradient-to-r from-transparent to-[#c2a382]" />
              <span className="text-[#c2a382] text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.28em] uppercase font-sans">
                {item.subtitle}
              </span>
            </div>

            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-[#f4efeb] tracking-tight leading-[1.1] transition-colors duration-500 group-hover/card:text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.title}
            </h2>

            <div className="w-9 sm:w-12 md:w-14 h-[2px] sm:h-[2.5px] bg-gradient-to-r from-[#c2a382] to-transparent mt-2 sm:mt-3 md:mt-4 transition-all duration-500 group-hover/card:w-16 md:group-hover/card:w-20" />
          </div>

          <p className="text-[#f4efeb]/75 text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-[15px] leading-relaxed font-sans">
            {item.description}
          </p>

          <div className="pt-1 sm:pt-1.5 md:pt-2">
            <button
              onClick={() => router.push('/contact')}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white bg-gradient-to-b from-[#d4b896] via-[#c2a382] to-[#a88865] hover:scale-105 active:scale-95 transition-transform shadow-[0_10px_35px_-8px_rgba(194,163,130,0.9),inset_0_1px_0_rgba(255,255,255,0.4)] overflow-hidden group/btn"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                {item.buttonText}
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN — 3D CAROUSEL
   ═══════════════════════════════════════════════════════════ */
export default function BeforeAfterShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = transformationsData.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  return (
    <section className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-[#f4efeb] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[400px] sm:h-[600px] rounded-full bg-[#c2a382]/12 blur-[120px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#c2a382]/8 blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-30"
      >
        <span className="text-[#8c6d4f] text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase block mb-2 sm:mb-3 font-sans">
          Expert Transformation Stages
        </span>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight mb-3 sm:mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Transformation Services
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed px-2">
          Explore our expert service stages using interactive before and after sliders.
        </p>
      </motion.div>

      {/* ═══ 3D Carousel Stage ═══ */}
      <div
        className="relative w-full h-[460px] xs:h-[500px] sm:h-[560px] md:h-[560px] lg:h-[580px] xl:h-[620px] flex items-center justify-center"
        style={{ perspective: '1800px' }}
      >
        {transformationsData.map((item, index) => {
          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          if (absOffset > 2) return null;

          return (
            <motion.div
              key={item.id}
              className="absolute w-[88%] xs:w-[86%] sm:w-[82%] md:w-[76%] lg:w-[70%] xl:w-[66%] max-w-[1080px]"
              initial={false}
              animate={{
                x: offset * 46 + '%',
                scale: isCenter ? 1 : 0.82 - (absOffset - 1) * 0.08,
                rotateY: offset * -20,
                z: isCenter ? 0 : -200 * absOffset,
                opacity: absOffset > 1 ? 0.4 : 1,
                filter: isCenter
                  ? 'blur(0px) brightness(1)'
                  : `blur(${absOffset * 2.5}px) brightness(0.65)`,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30,
              }}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: 10 - absOffset,
              }}
            >
              <TransformationCard item={item} index={index} isCenter={isCenter} />
            </motion.div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-2 lg:gap-2 mt-6 sm:mt-8 md:mt-10 relative z-30">
        {transformationsData.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 rounded-full ${
              index === activeIndex
                ? 'w-7 sm:w-8 md:w-7 lg:w-7 xl:w-8 h-2 sm:h-2 md:h-1.5 lg:h-1.5 xl:h-2 bg-gradient-to-r from-[#c2a382] to-[#a88865] shadow-[0_0_15px_rgba(194,163,130,0.7)]'
                : 'w-2 sm:w-2 md:w-1.5 lg:w-1.5 xl:w-2 h-2 sm:h-2 md:h-1.5 lg:h-1.5 xl:h-2 bg-[#c2a382]/30'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes card-sweep {
          0% { transform: translateX(-150%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(1800%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}