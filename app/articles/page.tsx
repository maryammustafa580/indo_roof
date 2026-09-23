'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
  animate,
  useInView,
} from 'framer-motion';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  label?: string;
  onZoom: (src: string) => void;
  index?: number;
}

/* ═══════════════════════════════════════════════════════════
   ZOOMABLE IMAGE — Mobile tap shine + hover zoom
   ═══════════════════════════════════════════════════════════ */
const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  className = "object-cover",
  wrapperClassName = "relative w-full h-full",
  label,
  onZoom,
  index = 0,
}) => {
  const [shining, setShining] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.2 });

  const triggerShine = () => {
    setShining(false);
    requestAnimationFrame(() => {
      setTimeout(() => setShining(true), 10);
      setTimeout(() => setShining(false), 1200);
    });
  };

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        triggerShine();
        setTimeout(() => onZoom(src), 150);
      }}
      className={`${wrapperClassName} cursor-zoom-in group touch-manipulation overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-active:scale-105`}
        unoptimized
      />

      {/* Desktop shine sweep */}
      <div className="hidden sm:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20 pointer-events-none" />

      {/* Mobile tap shine sweep */}
      <motion.div
        className="sm:hidden absolute inset-0 z-20 pointer-events-none"
        initial={{ x: "-150%" }}
        animate={shining ? { x: "150%" } : { x: "-150%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          skewX: "-12deg",
        }}
      />

      {/* Gold shimmer ring on hover/tap */}
      <div className="absolute inset-0 ring-0 group-hover:ring-2 group-active:ring-2 ring-inset ring-[#d0ab84]/50 transition-all duration-500 z-20 pointer-events-none" />

      {label && (
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-end p-3 sm:p-4 z-10">
          <span
            className="text-[10px] sm:text-xs tracking-wider uppercase text-[#d0ab84]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   FLOATING PARTICLES — Mobile-friendly ambient
   ═══════════════════════════════════════════════════════════ */
const FloatingParticles = () => {
  const particles = Array.from({ length: 6 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#d0ab84]/50"
          style={{
            left: `${15 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function IndoRoofCleaningPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [autoSliderPos, setAutoSliderPos] = useState(50);

  const autoScrollRef = useRef<HTMLDivElement>(null);

  // Featured image parallax
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuredProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const featuredY = useTransform(featuredProgress, [0, 1], ["-5%", "5%"]);

  // 1. Continuous Auto-Scroll for the Image Strip
  useEffect(() => {
    const scrollContainer = autoScrollRef.current;
    if (!scrollContainer) return;

    let controls: any;
    const scrollWidth = scrollContainer.scrollWidth / 2;

    const startScrolling = () => {
      controls = animate(0, scrollWidth, {
        type: "tween",
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          if (scrollContainer) scrollContainer.scrollLeft = latest;
        },
      });
    };

    startScrolling();
    return () => { if (controls) controls.stop(); };
  }, []);

  // 2. Automatic Before & After Animation
  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      onUpdate: (latest) => setAutoSliderPos(latest),
    });

    return () => controls.stop();
  }, []);

  const galleryImages = [
    { src: '/dirty.png', title: 'Monsoon Roof Inspection' },
    { src: '/contact1.png', title: 'Terrace & Tile Soft Wash' },
    { src: '/img1.png', title: 'Monsoon Clearance' },
    { src: '/before5.png', title: 'Algae & Fungus Removal' },
    { src: '/contact3.png', title: 'Heat-Reflective Coating' },
    { src: '/img7.png', title: 'Eco Wash Solutions' },
    { src: '/roof.png', title: 'Structural Safety' },
  ];

  const displayedImages = showAllGallery ? galleryImages : galleryImages.slice(0, 4);

  // Title words split for stagger animation
  const titleWords = "Protecting Your Roof Through Every Season with Indo Roof Cleaning".split(" ");

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d0ab84] via-[#e6d5bc] to-[#d0ab84] z-50 origin-left shadow-[0_0_12px_rgba(208,171,132,0.8)]"
      />

      <main className="relative w-full min-h-screen bg-[#3d3936] text-white flex flex-col selection:bg-[#d0ab84] selection:text-[#3d3936] overflow-x-hidden">

        {/* Ambient Glows */}
        <motion.div
          className="absolute top-20 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#d0ab84]/8 blur-[100px] sm:blur-[140px] pointer-events-none z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[40%] right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#d0ab84]/6 blur-[90px] sm:blur-[120px] pointer-events-none z-0"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <FloatingParticles />

        {/* Brand Header */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-2 flex items-center justify-end z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Indo Roof Cleaning Services
          </motion.span>
        </div>

        {/* ═══ Article Header & Metadata ═══ */}
        <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 z-10">
          <div className="space-y-4 sm:space-y-6 text-center">

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#d0ab84] text-[#3d3936] px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest font-semibold rounded-sm shadow-[0_0_15px_rgba(208,171,132,0.4)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Indo Roof Specialists
              </motion.span>
              <span
                className="text-white/60 text-xs sm:text-sm tracking-wider uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Monsoon & Summer Care • 6 Min Read
              </span>
            </motion.div>

            {/* H1 — word by word animation */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.15] flex flex-wrap justify-center gap-x-2 gap-y-1"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-white/75 text-sm sm:text-base md:text-lg font-light max-w-3xl mx-auto pt-2 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Combat heavy monsoon moisture, harsh summer sun, and organic growth with specialized roof washing and waterproofing solutions designed for regional weather.
            </motion.p>
          </div>
        </section>

        {/* ═══ Featured Main Banner Image (Parallax) ═══ */}
        <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 z-10">
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[260px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden shadow-2xl rounded-sm"
          >
            {/* Parallax wrapper */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ y: featuredY }}
            >
              <ZoomableImage
                src="/after.png"
                alt="Indo Roof Cleaning Main"
                onZoom={setSelectedImage}
              />
            </motion.div>

            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#3d3936]/90 backdrop-blur-md text-[#d0ab84] px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-medium border border-[#d0ab84]/20 pointer-events-none"
            >
              Click to Expand ↗
            </motion.div>
          </motion.div>
        </section>

        {/* ═══ Before & After Section ═══ */}
        <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6 sm:mb-8"
          >
            <span
              className="text-[#d0ab84] text-xs sm:text-sm uppercase tracking-widest font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Automatic Transformation Showcase
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mt-1 sm:mt-2"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
            >
              Before & After Roof Restoration
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] overflow-hidden rounded-sm shadow-2xl border border-[#d0ab84]/20"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image src="/article2.png" alt="After Roof Cleaning" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#3d3936]/90 text-[#d0ab84] px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-medium border border-[#d0ab84]/30 z-20">
              After Treatment
            </div>

            <div className="absolute top-0 left-0 h-full overflow-hidden z-10" style={{ width: `${autoSliderPos}%` }}>
              <div className="absolute top-0 left-0 w-[100vw] h-[280px] sm:h-[400px] md:h-[480px]" style={{ maxWidth: 'none' }}>
                <div className="relative w-full h-full">
                  <Image
                    src="/article1.png"
                    alt="Before Roof Cleaning"
                    fill
                    className="object-cover filter brightness-90 sepia-[0.3]"
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/80 text-white px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-medium border border-white/20 z-20 whitespace-nowrap">
                Before (Algae & Grime)
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══ Content Body Part 1 ═══ */}
        <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-normal first-letter:text-[#d0ab84] first-letter:mr-3 first-letter:float-left">
              At Indo Roof Cleaning, we understand that your roof undergoes intense climatic cycles. From torrential downpours during the monsoon season to extreme high temperatures, roofs accumulate stubborn dust, algae, moss, and debris over time.
            </p>
            <p>
              Professional maintenance safeguards your structural framework, prevents water seepage into ceilings, and maintains the pristine aesthetic value of your property year-round.
            </p>
          </motion.div>
        </section>

        {/* ═══ Automatic Horizontal Scrolling Gallery Strip ═══ */}
        <section className="relative w-full py-10 sm:py-12 overflow-hidden bg-[#35312e] border-y border-[#d0ab84]/10 mb-12 sm:mb-16 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#d0ab84] text-xs uppercase tracking-widest font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Live Feed
              </span>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-normal text-white"
                style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
              >
                Automatic Process Stream
              </h3>
            </motion.div>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Auto-Scrolling
            </motion.span>
          </div>

          <div
            ref={autoScrollRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-hidden px-4 sm:px-6 py-2"
            style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
          >
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div
                key={idx}
                className="relative min-w-[260px] sm:min-w-[320px] md:min-w-[360px] h-[180px] sm:h-[220px] flex-shrink-0 overflow-hidden shadow-md border border-[#d0ab84]/20 inline-block"
              >
                <ZoomableImage
                  src={img.src}
                  alt={img.title}
                  label={img.title}
                  onZoom={setSelectedImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Dual Asymmetric Image Showcase ═══ */}
        <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 h-[260px] sm:h-[380px] md:h-[420px] shadow-2xl overflow-hidden"
            >
              <ZoomableImage
                src="/presure.png"
                alt="Indo Roof Cleaning Soft Wash Technique"
                onZoom={setSelectedImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-5"
            >
              <span
                className="text-[#d0ab84] text-xs sm:text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                01 / Advanced Soft Washing
              </span>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-white"
                style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
              >
                Safe Cleaning Without Structural Wear
              </h3>
              <p
                className="text-white/75 text-sm sm:text-base font-light leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                High-pressure water jets can erode tiles and loosen waterproof coatings. Indo Roof Cleaning utilizes advanced eco-friendly soft-wash protocols to safely eliminate root fungus and grime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ Content Body Part 2 ═══ */}
        <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <h2
              className="text-2xl sm:text-3xl text-white font-normal pt-2"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
            >
              Preventing Leakage & Enhancing Energy Efficiency
            </h2>
            <p>
              Clearing blocked terrace drains and treating surfaces with reflective waterproof sealants prevents dampness and significantly reduces indoor heat absorption during peak summer months.
            </p>
          </motion.div>
        </section>

        {/* ═══ Trio Grid Showcase ═══ */}
        <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: "/roof.png", alt: "Tile care", label: "Tile Preservation (Click to Zoom)" },
              { src: "/img7.png", alt: "Eco treatment", label: "Eco Wash Solutions (Click to Zoom)" },
              { src: "/contact3.png", alt: "Coating", label: "Reflective Coating (Click to Zoom)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[240px] sm:h-[300px] overflow-hidden shadow-lg"
              >
                <ZoomableImage
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  onZoom={setSelectedImage}
                  index={i}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══ Content Body Part 3 (Quote Box) ═══ */}
        <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 z-10">
          <div className="space-y-6 sm:space-y-8 text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <motion.blockquote
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-[#d0ab84] pl-6 sm:pl-8 py-4 sm:py-6 my-8 text-white text-xl sm:text-2xl md:text-3xl bg-[#322e2b]/60 shadow-inner"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
            >
              &ldquo;With Indo Roof Cleaning, your property receives expert care that extends roof longevity and guarantees complete protection from seasonal elements.&rdquo;
            </motion.blockquote>
            <p>Connect with our technical team today to schedule your comprehensive roof and terrace evaluation.</p>
          </div>
        </section>

        {/* ═══ Interactive Clickable Gallery Showcase ═══ */}
        <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-20 sm:pb-28 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-center"
          >
            <span
              className="text-[#d0ab84] text-xs sm:text-sm uppercase tracking-widest font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Indo Roof Cleaning Gallery
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mt-2"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
            >
              Click Any Image to Enlarge
            </h3>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {displayedImages.map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="relative w-full h-[240px] sm:h-[280px] overflow-hidden shadow-xl rounded-sm"
                >
                  <ZoomableImage
                    src={item.src}
                    alt={item.title}
                    label={`${item.title} — Click to View ↗`}
                    onZoom={setSelectedImage}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="relative px-8 py-3.5 border border-[#d0ab84] text-[#d0ab84] hover:bg-[#d0ab84] hover:text-[#3d3936] transition-all duration-500 text-xs sm:text-sm tracking-widest uppercase font-medium shadow-lg overflow-hidden group"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              <span className="relative z-10">
                {showAllGallery ? 'Show Less Images ↑' : 'View All Images (8+) ↓'}
              </span>
            </motion.button>
          </div>
        </section>

      </main>

      {/* ═══ Fullscreen Image Lightbox Modal ═══ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[75vh] sm:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Enlarged View" fill className="object-contain rounded-md" unoptimized />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#3d3936] text-[#d0ab84] hover:bg-white hover:text-[#3d3936] transition-colors w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-2xl border border-[#d0ab84]/30"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}