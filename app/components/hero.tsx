'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Zap, Phone, ArrowRight, Star, Award, Home, Clock, Sparkles, LucideIcon } from 'lucide-react';

type MarqueeItem = {
  icon: LucideIcon;
  text: string;
};

export default function HeroSection() {
  const router = useRouter();
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Moss-Free', 'Algae-Free', 'Spotless', 'Like-New'];

  const phoneNumbers = ['+1 (778) 929-5043', '+1 (778) 955-2725'];
  const [phoneIndex, setPhoneIndex] = useState(0);
  const [phoneVisible, setPhoneVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // Phone rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoneVisible(false);
      setTimeout(() => {
        setPhoneIndex((prev) => (prev + 1) % phoneNumbers.length);
        setPhoneVisible(true);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [phoneNumbers.length]);

  const marqueeItems: MarqueeItem[] = [
    { icon: Award, text: '15+ Years Experience' },
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Home, text: '5,000+ Roofs Cleaned' },
    { icon: Zap, text: 'Same-Day Service' },
    { icon: Clock, text: '24/7 Support Available' },
    { icon: Star, text: '4.9★ from 2,000+ Reviews' },
    { icon: Shield, text: 'Fully Certified Professionals' },
    { icon: Zap, text: 'Fast & Reliable Response' },
    { icon: Sparkles, text: 'Professional Roof Restoration' },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#3c3835] font-sans flex flex-col">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Black Fade Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"
        style={{ width: '60%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />

      {/* Gold Glow Left */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c2a382]/10 rounded-full blur-[140px] z-10" />

      {/* ═══ Main Content ═══ */}
      {/* flex-1 ensures this takes available space, mt-auto pushes it down, but with adjusted padding */}
      <div className="relative z-20 flex-1 flex items-end w-full px-5 sm:px-10 lg:px-16 xl:px-24 pb-20 sm:pb-28 md:pb-32">
        <div className="w-full max-w-3xl">
          <h1
            className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f4efeb] leading-[1.1] tracking-tight mb-4 sm:mb-5"
            style={{ fontFamily: "'Playfair Display', 'Baskerville', serif" }}
          >
            <span className="block font-extrabold">We Make Your Roof</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382]">
              {text}
              <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#c2a382] ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-[#f4efeb]/70 max-w-xl mb-6 sm:mb-8 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Transform your roof's appearance with our advanced soft-wash
            technology. Safe for tiles, shingles, and all roof types.
          </p>

          {/* ═══ Buttons ═══ */}
          <div className="flex flex-row gap-2 sm:gap-3.5">
            {/* Primary — Get Free Quote */}
            <div className="group relative inline-flex flex-1 sm:flex-none">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] opacity-40 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#c2a382] via-[#e6d5bc] to-[#c2a382] bg-[length:200%_100%] animate-[border-flow_3s_linear_infinite] opacity-100" />

              <button
                onClick={() => router.push('/contact')}
                className="relative inline-flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto px-3 sm:px-5 py-2.5 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] bg-gradient-to-b from-[#d4b896] via-[#c2a382] to-[#a88865] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2),0_8px_30px_-8px_rgba(194,163,130,0.8)] cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_70%)]" />

                <span className="relative z-10 flex items-center gap-1 sm:gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] whitespace-nowrap">
                  Get Free Quote
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0" />
                </span>
              </button>
            </div>

            {/* Call */}
            <div className="group relative inline-flex flex-1 sm:flex-none">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#c2a382]/10 via-[#c2a382]/20 to-[#c2a382]/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#f4efeb]/10 via-[#c2a382]/40 to-[#f4efeb]/10 bg-[length:200%_100%] opacity-100 group-hover:animate-[border-flow_3s_linear_infinite]" />

              <a
                href={`tel:${phoneIndex === 0 ? '+17789295043' : '+17789552725'}`}
                className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto px-3 sm:px-5 py-2.5 sm:py-2.5 rounded-xl font-semibold text-[11px] sm:text-sm text-[#f4efeb] overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] bg-[#f4efeb]/[0.05] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(244,239,235,0.1),0_8px_30px_-8px_rgba(60,56,53,0.5)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#f4efeb]/10 to-transparent rounded-t-xl pointer-events-none" />

                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="relative flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#d4b896] via-[#c2a382] to-[#a88865] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_4px_12px_rgba(194,163,130,0.6)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-300 flex-shrink-0">
                    <span className="absolute inset-0 rounded-full bg-[#c2a382] opacity-75 group-hover:animate-ping" />
                    <Phone className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#3c3835] relative z-10 drop-shadow-sm" />
                  </span>

                  <span className="relative inline-flex items-center overflow-hidden min-w-0">
                    <span
                      className={`inline-block whitespace-nowrap text-[10px] sm:text-sm drop-shadow-[0_1px_2px_rgba(60,56,53,0.4)] transition-all duration-[400ms] ease-out ${
                        phoneVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                      }`}
                    >
                      {phoneNumbers[phoneIndex]}
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM MARQUEE ═══ */}
      {/* Removed 'absolute' positioning, now it sits naturally at the bottom of flex column */}
      <div className="relative z-20 w-full mt-auto">
        <div className="relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c2a382]/40 to-transparent" />
          <div className="absolute top-0 h-px w-32 bg-gradient-to-r from-transparent via-[#e6d5bc] to-transparent animate-[shine-line_3s_ease-in-out_infinite]" />
        </div>

        <div className="relative backdrop-blur-2xl border-t border-[#f4efeb]/5 overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#c2a382]/12 via-[#c2a382]/4 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c2a382]/30 to-transparent" />

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-r from-[#3C3835] via-[#3C3835]/70 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-l from-[#3C3835] via-[#3C3835]/70 to-transparent" />

            <div className="flex w-max animate-[marquee_55s_linear_infinite] will-change-transform">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`marquee-${i}`}
                    className="group/item flex items-center gap-3 flex-shrink-0 cursor-default mx-6 sm:mx-10"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1.5 rounded-full bg-[#c2a382]/20 blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#d4b896] via-[#c2a382] to-[#a88865] flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_2px_10px_rgba(194,163,130,0.5)] transition-all duration-500 group-hover/item:scale-110 group-hover/item:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_4px_20px_rgba(194,163,130,0.8)]">
                        <Icon className="w-3.5 h-3.5 text-[#3c3835]" strokeWidth={2.5} />
                        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
                      </div>

                      <div className="absolute -inset-1 rounded-full border border-[#c2a382]/0 group-hover/item:border-[#c2a382]/50 group-hover/item:scale-125 transition-all duration-500" />
                    </div>

                    <span
                      className="relative text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span className="text-[#f4efeb]/85 group-hover/item:text-[#f4efeb] transition-colors duration-500">
                        {item.text}
                      </span>

                      <span className="absolute inset-0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#c2a382]/60 to-transparent skew-x-12 pointer-events-none" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2a382]/50 to-transparent" />
          <div className="absolute left-0 bottom-0 w-24 h-px bg-gradient-to-r from-[#c2a382]/60 to-transparent" />
          <div className="absolute right-0 bottom-0 w-24 h-px bg-gradient-to-l from-[#c2a382]/60 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes shine-line {
          0% { left: -20%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }

        @keyframes marquee {
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
