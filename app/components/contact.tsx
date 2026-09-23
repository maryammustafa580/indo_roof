"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Mobile-only scroll parallax
  const mobileY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const mobileRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  // ═══ 3 Size Combinations — Inversely proportional ═══
  const TALL_NARROW = "h-[200px] sm:h-[300px] md:h-[360px] lg:h-[420px] w-[130px] sm:w-[180px] md:w-[200px] lg:w-[220px]";
  const MEDIUM_BAL  = "h-[170px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-[160px] sm:w-[220px] md:w-[255px] lg:w-[285px]";
  const SHORT_WIDE  = "h-[140px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-[190px] sm:w-[260px] md:w-[310px] lg:w-[350px]";

  const imageSet = [
    { src: "/contact1.png",   alt: "Roof Restoration",     s: TALL_NARROW },
    { src: "/contact2.png",   alt: "Roof Maintenance",     s: MEDIUM_BAL  },
    { src: "/contact3.png",   alt: "Roof Coating",         s: SHORT_WIDE  },
    { src: "/plumbing.png",   alt: "Plumbing Service",     s: TALL_NARROW },
    { src: "/demolition.png", alt: "Demolition Service",   s: MEDIUM_BAL  },
    { src: "/presure.png",   alt: "Pressure Washing",     s: SHORT_WIDE  },
    { src: "/contact1.png",   alt: "Roof Restoration",     s: TALL_NARROW },
    { src: "/demolition.png", alt: "Demolition Service",   s: MEDIUM_BAL  },
    { src: "/presure.png",   alt: "Pressure Washing",     s: SHORT_WIDE  },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f4efeb] text-stone-900 py-10 sm:py-16 md:py-24 pb-20 sm:pb-28 md:pb-40 px-0 flex flex-col items-center justify-center overflow-hidden border-t border-stone-300/65"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-20 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-[#c2a382]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-[#c2a382]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* ═══ MOBILE-ONLY FLOATING PARTICLES ═══ */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#c2a382]"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + (i * 11) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* ═══ HEADING — Adjusted spacing for mobile ═══ */}
      <div
        ref={headingRef}
        className="w-full max-w-4xl mx-auto text-center mb-8 sm:mb-16 md:mb-24 z-25 relative px-5 sm:px-4 flex flex-col items-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone-900 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight font-serif leading-snug"
          style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
        >
          Professional Roof Restoration <br />
          & Eco Washing
        </motion.h3>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isHeadingInView ? { width: "80px", opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#c2a382] to-transparent mt-5 sm:mt-6"
        />
      </div>

      {/* ═══ CONTINUOUS LEFT-MOVING GALLERY STRIP ═══ */}
      <div className="relative w-full overflow-hidden mb-10 sm:mb-16 md:mb-28 py-3 sm:py-4">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-r from-[#f4efeb] via-[#f4efeb]/80 to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-l from-[#f4efeb] via-[#f4efeb]/80 to-transparent" />

        {/* ═══ CTA Overlay ═══ */}
        <motion.div
          style={{ x: textX, opacity: textOpacity, scale: textScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-3"
        >
          <Link
            href="/contact"
            className="group pointer-events-auto inline-flex flex-col items-center cursor-pointer"
          >
            <h2
              className="text-white text-base sm:text-2xl md:text-4xl lg:text-5xl tracking-wide sm:tracking-wider select-none font-normal whitespace-nowrap font-serif leading-none"
              style={{
                fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif",
                textShadow: "0 4px 20px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)",
              }}
            >
              Book Your Roof Audit
            </h2>

            <span
              className="text-white text-sm sm:text-lg md:text-xl mt-1 sm:mt-2.5 inline-flex items-center transition-transform duration-300 group-hover:translate-x-2"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
            >
              ⟶
            </span>
          </Link>
        </motion.div>

        {/* Marquee row */}
        <div className="flex w-max items-center animate-[marqueeLeft_60s_linear_infinite] will-change-transform gap-2.5 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-5">
          {[...imageSet, ...imageSet].map((img, i) => (
            <motion.div
              key={`img-${i}`}
              style={{ y: mobileY, rotate: mobileRotate }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 ${img.s} overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl group/img`}
            >
              {/* Image with slow zoom */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 350px"
                />
              </motion.div>

              {/* Black fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none" />

              {/* Inner shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.35)] rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

              {/* ═══ DESKTOP HOVER SHIMMER SWEEP ═══ */}
              <div className="hidden md:block absolute inset-0 -translate-x-full group-hover/img:translate-x-full transition-transform duration-[1500ms] ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />

              {/* ═══ MOBILE AUTO SHIMMER SWEEP (repeating) ═══ */}
              <motion.div
                className="md:hidden absolute inset-0 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </motion.div>

              {/* ═══ DESKTOP: Gold border ring on hover ═══ */}
              <div className="hidden md:block absolute inset-0 border-2 border-[#c2a382]/0 group-hover/img:border-[#c2a382]/50 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none" />

              {/* ═══ MOBILE: AUTO-PULSING Gold border ring ═══ */}
              <motion.div
                className="md:hidden absolute inset-0 rounded-xl sm:rounded-2xl border-2 pointer-events-none"
                animate={{
                  borderColor: [
                    "rgba(194,163,130,0)",
                    "rgba(194,163,130,0.6)",
                    "rgba(194,163,130,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />

              {/* ═══ Breathing golden glow ═══ */}
              <motion.div
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,163,130,0.5),transparent_70%)] pointer-events-none"
              />

              {/* ═══ MOBILE-ONLY FLOATING GOLD DOT ═══ */}
              <motion.div
                className="md:hidden absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c2a382] z-30"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: [
                    "0 0 0px rgba(194,163,130,0.6)",
                    "0 0 12px rgba(194,163,130,1)",
                    "0 0 0px rgba(194,163,130,0.6)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* ═══ MOBILE-ONLY PULSING ARROW INDICATOR ═══ */}
      <motion.div
        className="md:hidden absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c2a382" strokeWidth="2" strokeLinecap="round" className="sm:w-5 sm:h-5">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

    </section>
  );
}