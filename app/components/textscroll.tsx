'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Textscroll() {
  const textItems = [
    "Professional Roofing",
    "Pressure Washing",
    "Exterior Restoration",
    "Safe Roof Cleaning",
    "Quality Craftsmanship"
  ];

  const floatingImages = [
    // Top 2 images (Thora mazeed spaced out)
    { src: "/roof.png", alt: "Roofing Service", position: "top-[10%] left-[14%] sm:top-[12%] sm:left-[4%] lg:left-[32%]", animation: "animate-float-slow" },
    { src: "/presure.png", alt: "Pressure Washing Service", position: "top-[10%] right-[14%] sm:top-[12%] sm:right-[4%] lg:right-[32%]", animation: "animate-float-fast" },
    
    // Middle 2 images (Text ke qareeb lekin apas mein difference ke sath)
    { src: "/exterior.png", alt: "Exterior Service", position: "top-[40%] left-[8%] sm:top-[42%] sm:left-[2%] lg:left-[23%]", animation: "animate-float-fast" },
    { src: "/demolition.png", alt: "Demolition Service", position: "top-[40%] right-[8%] sm:top-[42%] sm:right-[2%] lg:right-[23%]", animation: "animate-float-drift" },
    
    // Bottom 2 images (Thora mazeed spaced out)
    { src: "/plumbing.png", alt: "Plumbing Service", position: "bottom-[10%] left-[14%] sm:bottom-[10%] sm:left-[6%] lg:left-[32%]", animation: "animate-float-slow" },
    { src: "/roof.png", alt: "Roof Restoration Studio", position: "bottom-[10%] right-[14%] sm:bottom-[10%] sm:right-[6%] lg:right-[32%]", animation: "animate-float-drift" },
  ];

  return (
    <>
      {/* Google Fonts - Same as main component */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative w-full h-[550px] sm:h-screen bg-[#3c3835] flex items-center justify-center overflow-hidden text-stone-100 font-sans px-4">
        
        {/* Inline styles for floating animations */}
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-4px) rotate(1deg); }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-1deg); }
          }
          @keyframes floatDrift {
            0%, 100% { transform: translate(0px, 0px); }
            50% { transform: translate(3px, -4px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: floatFast 4s ease-in-out infinite;
          }
          .animate-float-drift {
            animation: floatDrift 7s ease-in-out infinite;
          }
        `}</style>

        {/* Background Subtle Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3c3835]/80 via-[#2d2a28] to-[#3c3835]/90 pointer-events-none"></div>

        {/* Centered Continuously Sliding Text Container */}
        <div className="absolute text-center h-[250px] sm:h-[280px] overflow-hidden flex flex-col items-center justify-center z-30 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] pt-1 px-2 w-full max-w-[700px]">
          
          <motion.div 
            className="flex flex-col items-center will-change-transform"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "linear" 
            }}
          >
            {/* First Set */}
            {textItems.map((text, index) => (
              <span 
                key={`set1-${index}`} 
                className="text-3xl sm:text-4xl font-serif font-light tracking-tight leading-tight whitespace-nowrap text-stone-100 py-1 sm:py-3 drop-shadow-md"
                style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
              >
                {text}
              </span>
            ))}
            
            {/* Second Set for seamless loop */}
            {textItems.map((text, index) => (
              <span 
                key={`set2-${index}`} 
                className="text-3xl sm:text-4xl font-serif font-light tracking-tight leading-tight whitespace-nowrap text-stone-100 py-1 sm:py-3 drop-shadow-md"
                style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Floating Images (Increased mobile size & adjusted distance) */}
        {floatingImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute ${img.position} w-[115px] h-[78px] sm:w-[160px] sm:h-[105px] lg:w-[190px] lg:h-[120px] overflow-hidden rounded-md sm:rounded-lg border border-[#c2a382]/50 shadow-2xl z-20 ${img.animation} opacity-90 sm:opacity-95 hover:opacity-100 transition-opacity`}
          >
            <Image 
              src={img.src} 
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <span 
              className="absolute bottom-0.5 left-1 right-1 text-[8px] sm:text-[10px] font-serif tracking-wider text-[#c2a382] truncate text-center drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
            >
              {img.alt}
            </span>
          </div>
        ))}

      </div>
    </>
  );
}