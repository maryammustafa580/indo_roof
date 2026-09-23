"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Sparkles,
  Wrench,
  ShieldCheck,
  Paintbrush,
  Droplets
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface PropertyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
  icon: React.ReactNode;
}

/* ═══════════════════════════════════════════════════════════
   PROPERTY CARD
   ═══════════════════════════════════════════════════════════ */
const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  description,
  imageSrc,
  index,
  icon,
}) => {
  const isEven = index % 2 === 0;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.15 });

  // Mobile tap shine trigger
  const [shining, setShining] = React.useState(false);

  const triggerShine = () => {
    setShining(false);
    requestAnimationFrame(() => {
      setTimeout(() => setShining(true), 10);
      setTimeout(() => setShining(false), 1200);
    });
  };

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: isEven ? -50 : 50,
        y: 40,
        scale: 0.92,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="w-full max-w-[380px] xs:max-w-[400px] sm:max-w-md mx-auto touch-manipulation"
    >
      {/* ✅ Direct link to /articles based on your folder structure */}
      <Link
        href="/articles"
        className="group block w-full"
        onTouchStart={triggerShine}
        onClick={triggerShine}
      >
        <div className="bg-[#FAF6F0] rounded-2xl flex flex-col w-full h-[520px] xs:h-[540px] sm:h-[560px] md:h-[580px] shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_70px_rgba(184,151,116,0.5)] relative overflow-hidden transition-all duration-500 border border-stone-200/50 hover:border-[#B89774]/40">

          {/* Top Image Section */}
          <div className="relative w-full h-52 xs:h-56 sm:h-60 shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent group-active:bg-transparent transition-colors duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B89774]/0 via-[#B89774]/0 to-[#B89774]/0 group-hover:from-[#B89774]/20 group-hover:to-transparent group-active:from-[#B89774]/20 transition-all duration-500 z-20 pointer-events-none" />

            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ y: imageY }}
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12] group-hover:rotate-[1deg] group-active:scale-[1.08] group-active:rotate-[0.5deg]"
                priority={index < 2}
              />
            </motion.div>

            <div className="hidden sm:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-30 pointer-events-none" />

            <motion.div
              className="sm:hidden absolute inset-0 z-30 pointer-events-none"
              initial={{ x: "-150%" }}
              animate={shining ? { x: "150%" } : { x: "-150%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                skewX: "-12deg",
              }}
            />

            <div className="absolute inset-0 ring-0 group-hover:ring-2 group-active:ring-2 ring-inset ring-[#B89774]/60 transition-all duration-500 z-30 pointer-events-none rounded-t-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent group-hover:from-[#B89774]/30 transition-all duration-500 z-20 pointer-events-none" />
          </div>

          {/* Text & Content Section */}
          <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 overflow-hidden">
            <div className="absolute inset-0 bg-[#B89774] translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-in-out z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + (index % 3) * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 1.2, rotate: 15 }}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      className="absolute -inset-[2px] rounded-full opacity-60 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "conic-gradient(from 0deg, #B89774, transparent 30%, #B89774 50%, transparent 80%, #B89774)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-[#B89774]"
                      animate={{ scale: [1, 1.6, 1.6], opacity: [0.7, 0, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.3 }}
                    />
                    <div className="absolute inset-0 rounded-full border border-stone-300 bg-white/95 group-hover:bg-white group-active:bg-white group-hover:border-white/40 group-active:border-white/40 shadow-sm transition-colors duration-300" />
                    <span className="relative z-10 text-stone-700 group-hover:text-[#B89774] group-active:text-[#B89774] transition-colors duration-300 flex items-center justify-center">
                      {icon}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              <h2
                className="text-xl xs:text-2xl sm:text-[1.65rem] font-normal text-stone-900 group-hover:text-white group-active:text-white tracking-tight mb-2 sm:mb-3 transition-colors duration-300"
                style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
              >
                {title}
              </h2>

              <p
                className="text-stone-600 group-hover:text-stone-100 group-active:text-stone-100 text-sm sm:text-sm leading-relaxed line-clamp-3 transition-colors duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {description}
              </p>
            </div>

            <div className="relative z-10 w-full pt-3 sm:pt-4 mt-auto border-t border-stone-300/40 group-hover:border-white/20 group-active:border-white/20 flex items-center justify-between transition-colors duration-300">
              <span
                className="text-sm sm:text-sm font-medium text-stone-800 group-hover:text-white group-active:text-white transition-colors duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Service
              </span>

              <motion.div
                whileHover={{ scale: 1.15, x: 4 }}
                whileTap={{ scale: 1.2, x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-stone-200/60 group-hover:bg-white group-hover:text-[#B89774] group-active:bg-white group-active:text-[#B89774] text-stone-700 flex items-center justify-center transition-colors duration-300"
              >
                →
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   FLOATING PARTICLES
   ═══════════════════════════════════════════════════════════ */
const FloatingParticles = () => {
  const particles = Array.from({ length: 8 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#B89774]/40"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function PropertiesPage() {
  const sampleDescription =
    "Professional and reliable solutions tailored to meet your property maintenance and enhancement standards with top-tier expertise.";

  const properties = [
    { title: "Roof Cleaning", imageSrc: "/roof.png", icon: <Home className="w-5 h-5" /> },
    { title: "Exterior Cleaning", imageSrc: "/exterior.png", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Plumbing Services", imageSrc: "/plumbing.png", icon: <Wrench className="w-5 h-5" /> },
    { title: "Demolition Services", imageSrc: "/demolition.png", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Painting Services", imageSrc: "/painting.png", icon: <Paintbrush className="w-5 h-5" /> },
    { title: "Pressure Cleaning", imageSrc: "/presure.png", icon: <Droplets className="w-5 h-5" /> },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900&family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <main className="relative min-h-screen bg-[#3c3835] py-16 sm:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center overflow-x-hidden">
        {/* Ambient Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#B89774]/10 blur-[100px] sm:blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#B89774]/8 blur-[80px] sm:blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <FloatingParticles />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center max-w-xl mb-12 sm:mb-20 md:mb-28 px-4 relative z-10"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FAF6F0] tracking-tight mb-4"
            style={{ fontFamily: "'Baskerville', 'Playfair Display', serif" }}
          >
            Discover our services
          </h1>
          <p
            className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore our comprehensive range of professional property maintenance solutions designed to keep your spaces pristine.
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-[#B89774] mx-auto mt-6"
          />
        </motion.div>

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-12 sm:gap-y-20 lg:gap-y-36 max-w-5xl w-full items-start px-2 sm:px-0">
          {/* Left Column */}
          <div className="flex flex-col gap-y-12 sm:gap-y-20 lg:gap-y-36">
            {properties
              .filter((_, index) => index % 2 === 0)
              .map((property, idx) => {
                const globalIndex = idx * 2;
                return (
                  <PropertyCard
                    key={globalIndex}
                    index={globalIndex}
                    title={property.title}
                    description={sampleDescription}
                    imageSrc={property.imageSrc}
                    icon={property.icon}
                  />
                );
              })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-y-12 sm:gap-y-20 lg:gap-y-36 md:mt-32 lg:mt-64">
            {properties
              .filter((_, index) => index % 2 !== 0)
              .map((property, idx) => {
                const globalIndex = idx * 2 + 1;
                return (
                  <PropertyCard
                    key={globalIndex}
                    index={globalIndex}
                    title={property.title}
                    description={sampleDescription}
                    imageSrc={property.imageSrc}
                    icon={property.icon}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}