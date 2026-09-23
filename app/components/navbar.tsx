"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/roof.png", alt: "Roofing Service", label: "Roofing" },
    { src: "/presure.png", alt: "Pressure Washing Service", label: "Pressure Washing" },
    { src: "/demolition.png", alt: "Demolition Service", label: "Demolition" },
    { src: "/exterior.png", alt: "Exterior Service", label: "Exterior" },
    { src: "/plumbing.png", alt: "Plumbing Service", label: "Plumbing" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 600);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Bar */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent font-sans">
        <div className="w-full max-w-[1750px] mx-auto h-[60px] md:h-[75px] flex items-center justify-between px-6 sm:px-10 md:px-16">

          {/* Top Left: Logo + Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 transition-opacity animate-[logoPulse_3s_ease-in-out_infinite]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Indo Roof Cleaners Logo"
                fill
                className="object-contain w-full h-full relative z-10"
                priority
              />
            </div>
            <span
              className="relative text-white text-sm sm:text-base font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#c2a382]"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
            >
              Indo Roof Cleaners
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] group-hover:w-full transition-all duration-500 ease-out" />
            </span>
          </Link>

          {/* ═══ Top Right: Hamburger (Continuous Pulse Lines) ═══ */}
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex flex-col items-end justify-center gap-1.5 w-9 h-9 cursor-pointer focus:outline-none"
            aria-label="Open menu"
          >
            {/* Subtle glow behind on hover */}
            <span className="absolute inset-0 rounded-full bg-[#c2a382]/0 group-hover:bg-[#c2a382]/15 blur-md transition-all duration-500 pointer-events-none" />

            {/* Top Line */}
            <span className="h-[1.5px] bg-white group-hover:bg-[#c2a382] animate-[pulseLineTop_2s_ease-in-out_infinite] transition-all duration-300 group-hover:h-[2px] relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />

            {/* Bottom Line */}
            <span className="h-[1.5px] bg-white group-hover:bg-[#c2a382] animate-[pulseLineBottom_2s_ease-in-out_infinite] transition-all duration-300 group-hover:h-[2px] relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />
          </button>

        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex overflow-hidden font-sans">

          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] transition-opacity duration-600 ${
              isClosing ? "animate-[fadeOut_0.6s_ease-out_forwards]" : "animate-[fadeIn_0.6s_ease-out]"
            }`}
            onClick={handleClose}
          />

          {/* Left Panel: Navigation Links */}
          <div className={`relative w-full md:w-1/2 h-full bg-[#3c3835] text-[#f4efeb] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 z-10 shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
            isClosing
              ? "animate-[slideLeftOut_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              : "animate-[slideLeftIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          }`}>

            {/* Top Left inside menu */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={handleClose}
                className="group flex items-center gap-3.5 animate-[logoPulse_3s_ease-in-out_infinite]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Indo Roof Cleaners Logo"
                    fill
                    className="object-contain w-full h-full relative z-10"
                  />
                </div>
                <span
                  className="relative text-white text-base sm:text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#c2a382]"
                  style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                >
                  Indo Roof Cleaners
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-[#c2a382] group-hover:w-full transition-all duration-500 ease-out" />
                </span>
              </Link>

              {/* Mobile-Only Close Button */}
              <button
                onClick={handleClose}
                className="md:hidden group relative flex flex-col items-end justify-center gap-1.5 w-9 h-9 cursor-pointer focus:outline-none"
                aria-label="Close menu"
              >
                <span className="absolute inset-0 rounded-full bg-[#c2a382]/0 group-hover:bg-[#c2a382]/15 blur-md transition-all duration-500" />
                <span className="w-6 h-[1.5px] bg-[#f4efeb] rotate-45 translate-y-[3px] transition-all duration-500 group-hover:bg-[#c2a382] group-hover:rotate-[135deg] group-hover:scale-x-110 relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />
                <span className="w-6 h-[1.5px] bg-[#f4efeb] -rotate-45 -translate-y-[3px] transition-all duration-500 group-hover:bg-[#c2a382] group-hover:-rotate-[135deg] group-hover:scale-x-110 relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />
              </button>
            </div>

            {/* Center Navigation Links */}
            <div className="w-full my-auto py-6">
              <nav className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-6">
                {[
                  { name: "HOME", path: "/" },
                  { name: "ABOUT", path: "/about" },
                  { name: "SERVICES", path: "/services" },
                  { name: "TESTIMONIALS", path: "/testimonials" },
                  { name: "CONTACT", path: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={handleClose}
                    className="group relative flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#f4efeb] hover:text-[#c2a382] transition-all duration-500 w-fit opacity-0 animate-[linkSlideIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    style={{
                      fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif",
                      animationDelay: `${0.15 + index * 0.08}s`,
                    }}
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-0 bg-gradient-to-r from-[#c2a382] to-transparent group-hover:w-8 transition-all duration-500" />
                    <span className="relative transition-all duration-500 group-hover:translate-x-12">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#c2a382] via-[#d4b896] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                      <span className="absolute inset-0 bg-gradient-to-r from-[#c2a382]/0 via-[#c2a382]/10 to-[#c2a382]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile-Only Arched Image & Contacts */}
            <div className="flex md:hidden flex-col items-center justify-center pt-5 pb-2 border-t border-stone-700/60 mt-auto gap-4">
              <div className="relative w-[160px] h-[210px] sm:w-[190px] sm:h-[240px]">
                <div className="absolute -inset-2.5 border border-[#c2a382]/30 rounded-t-[95px] pointer-events-none translate-x-2 translate-y-2 shadow-sm animate-[frameFloat_4s_ease-in-out_infinite]" />
                <div className="relative w-full h-full overflow-hidden rounded-t-[95px] bg-stone-800 shadow-xl border border-[#c2a382]/20">
                  {images.map((img, index) => {
                    let positionClass = "translate-x-full opacity-0";
                    if (index === currentIndex) {
                      positionClass = "translate-x-0 opacity-100 z-10";
                    } else if (
                      index === (currentIndex - 1 + images.length) % images.length
                    ) {
                      positionClass = "-translate-x-full opacity-0 z-0";
                    }
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${positionClass}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          priority={index === 0}
                          className="object-cover object-center grayscale contrast-115 brightness-95"
                        />
                      </div>
                    );
                  })}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-3 inset-x-0 text-center z-30 pointer-events-none px-3">
                    <span
                      className="text-white text-[11px] sm:text-xs font-light tracking-[0.2em] uppercase drop-shadow-md"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {images[currentIndex].label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-light tracking-[0.15em] uppercase text-[#f4efeb]/80 text-center">
                <a href="https://instagram.com/indo_roof_cleaners" target="_blank" rel="noreferrer" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Instagram
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="tel:+17789295043" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  +1 (778) 929-5043
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="tel:+17789552725" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  +1 (778) 955-2725
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            <div className="hidden md:block"></div>
          </div>

          {/* Right Panel */}
          <div className={`hidden md:flex relative w-1/2 h-full bg-[#f4efeb] flex-col justify-between items-center p-8 md:p-12 lg:p-16 z-10 ${
            isClosing
              ? "animate-[slideRightOut_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              : "animate-[slideRightIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          }`}>

            <div className="w-full flex justify-end">
              <button
                onClick={handleClose}
                className="group relative flex flex-col items-end justify-center gap-1.5 w-10 h-10 cursor-pointer focus:outline-none"
                aria-label="Close menu"
              >
                <span className="absolute inset-0 rounded-full bg-[#c2a382]/0 group-hover:bg-[#c2a382]/15 blur-md transition-all duration-500" />
                <span className="w-7 h-[1.5px] bg-stone-900 rotate-45 translate-y-[3.5px] transition-all duration-500 group-hover:bg-[#c2a382] group-hover:rotate-[135deg] group-hover:scale-x-110 relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />
                <span className="w-7 h-[1.5px] bg-stone-900 -rotate-45 -translate-y-[3.5px] transition-all duration-500 group-hover:bg-[#c2a382] group-hover:-rotate-[135deg] group-hover:scale-x-110 relative z-10 group-hover:shadow-[0_0_8px_rgba(194,163,130,0.8)]" />
              </button>
            </div>

            <div className="relative flex flex-col items-center justify-center my-auto gap-6 w-full max-w-[340px]">
              <div className="relative w-[210px] h-[280px] md:w-[230px] md:h-[300px] lg:w-[260px] lg:h-[340px]">
                <div className="absolute -inset-3.5 border border-[#c2a382]/30 rounded-t-[130px] pointer-events-none translate-x-3 translate-y-3 shadow-sm animate-[frameFloat_4s_ease-in-out_infinite]" />
                <div className="relative w-full h-full overflow-hidden rounded-t-[130px] bg-stone-200 shadow-2xl border border-[#c2a382]/20 transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(194,163,130,0.5)]">
                  {images.map((img, index) => {
                    let positionClass = "translate-x-full opacity-0";
                    if (index === currentIndex) {
                      positionClass = "translate-x-0 opacity-100 z-10";
                    } else if (
                      index === (currentIndex - 1 + images.length) % images.length
                    ) {
                      positionClass = "-translate-x-full opacity-0 z-0";
                    }
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${positionClass}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          priority={index === 0}
                          className="object-cover object-center grayscale contrast-115 brightness-95"
                        />
                      </div>
                    );
                  })}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-4 inset-x-0 text-center z-30 pointer-events-none px-4">
                    <span
                      className="text-white text-xs lg:text-sm font-light tracking-[0.2em] uppercase drop-shadow-md"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {images[currentIndex].label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] lg:text-xs font-light tracking-[0.15em] uppercase text-stone-700 text-center w-full">
                <a href="https://instagram.com/indo_roof_cleaners" target="_blank" rel="noreferrer" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Instagram
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="tel:+17789295043" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  +1 (778) 929-5043
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="tel:+17789552725" className="relative hover:text-[#c2a382] transition-colors duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  +1 (778) 955-2725
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#c2a382] group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            <div></div>
          </div>

        </div>
      )}

      <style jsx global>{`
        @keyframes logoPulse {
          0% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); opacity: 0.95; }
        }
        @keyframes pulseLineTop {
          0% { width: 24px; }
          50% { width: 12px; }
          100% { width: 24px; }
        }
        @keyframes pulseLineBottom {
          0% { width: 12px; }
          50% { width: 24px; }
          100% { width: 12px; }
        }
        @keyframes slideLeftIn {
          0% { transform: translateX(-100%) scale(0.95); opacity: 0; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes slideLeftOut {
          0% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(-100%) scale(0.95); opacity: 0; }
        }
        @keyframes slideRightIn {
          0% { transform: translateX(100%) scale(0.95); opacity: 0; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes slideRightOut {
          0% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(100%) scale(0.95); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes linkSlideIn {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes frameFloat {
          0%, 100% { transform: translate(0.75rem, 0.75rem); }
          50% { transform: translate(0.9rem, 0.9rem); }
        }
      `}</style>
    </>
  );
}