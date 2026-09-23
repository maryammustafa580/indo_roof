"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function IndoRoofProjectShowcase() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [activePanel, setActivePanel] = useState(0);

  // Handle Horizontal Scroll Synchronization
  useEffect(() => {
    const outer = outerRef.current;
    const container = containerRef.current;
    if (!outer || !container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = outer.getBoundingClientRect();
          const outerHeight = outer.offsetHeight;
          const windowHeight = window.innerHeight;

          const active = rect.top <= 0 && rect.bottom >= windowHeight;
          setIsInView(active);

          const progress = -rect.top / (outerHeight - windowHeight);
          const clampedProgress = Math.max(0, Math.min(1, progress));
          setScrollProgress(clampedProgress);

          const panelCount = 3;
          const panelIndex = Math.min(
            panelCount - 1,
            Math.floor(clampedProgress * panelCount)
          );
          setActivePanel(panelIndex);

          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          container.scrollLeft = maxScrollLeft * clampedProgress;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const panels = [
    {
      id: "panel-2",
      image: "/plumbing.png",
      badge: "External Surface & Pressure Care",
      items: [
        {
          num: "03",
          title: "High-Pressure Surface Washing",
          desc: "Advanced pressure cleaning technology designed to strip away deeply embedded grime, oil stains, and stubborn dirt from driveways and exterior walls.",
        },
        {
          num: "04",
          title: "Drainage & Plumbing Integration",
          desc: "Seamless rainwater management, downspout clearing, and external plumbing checks to prevent pooling water and protect structural integrity.",
        },
      ],
    },
    {
      id: "panel-3",
      image: "/painting.png",
      badge: "Restoration & Protection",
      items: [
        {
          num: "05",
          title: "Eco-Friendly Soft Washing",
          desc: "Biodegradable, plant-safe cleaning agents that neutralize mold, lichen, and algae roots at a molecular level without harming surrounding landscaping.",
        },
        {
          num: "06",
          title: "Long-Term Shield Sealing",
          desc: "Application of protective membrane sealants that repel moisture, prevent future staining, and guard surfaces against harsh UV degradation.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900&family=Cormorant+Garamond:ital,wght@0,400;0,600&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Custom Keyframe Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 4rem; }
        }

        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: scale(1.15) translateY(30px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes imageZoomPan {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }

        @keyframes imageFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes blackFadeIn {
          0% { opacity: 0; }
          100% { opacity: 0.55; }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(140, 109, 79, 0.25),
                        0 20px 40px -10px rgba(0,0,0,0.3);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(140, 109, 79, 0),
                        0 25px 50px -10px rgba(0,0,0,0.4);
          }
        }

        .animate-fade-in-up { animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-line-grow { animation: lineGrow 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-image-reveal { animation: imageReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-image-zoom-pan { animation: imageZoomPan 12s ease-in-out infinite; }
        .animate-image-float { animation: imageFloat 5s ease-in-out infinite; }
        .animate-black-fade { animation: blackFadeIn 1.5s ease-out forwards; }
        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Top Header Section */}
      <section className="relative bg-[#f4efeb] pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 flex flex-col items-center justify-center w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#8c6d4f]/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#b89774]/5 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 tracking-tight mb-4 font-serif animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
          >
            Our Core Approach
          </h1>
          <p
            className="text-stone-600 text-sm md:text-base leading-relaxed font-light animate-fade-in-up delay-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A closer look at the advanced cleaning methodologies, precision
            exterior care, and protective standards that define our service
            process.
          </p>
          <div className="w-16 h-[2px] bg-[#8c6d4f] mx-auto mt-6 animate-line-grow delay-400" />
        </div>
      </section>

      {/* Pinned Horizontal Scroll Section */}
      <div ref={outerRef} className="relative h-[350vh] w-full bg-[#f4efeb]">
        <div className="sticky top-0 h-screen w-full overflow-hidden text-stone-900 font-sans flex items-center">
          <div
            ref={containerRef}
            className="relative h-full w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-none flex items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="inline-flex h-full items-center pl-6 sm:pl-12 lg:pl-20 pr-20 gap-10 sm:gap-16 lg:gap-24">
              
              {/* START BLOCK: Panel 1 (Points 01 & 02) */}
              <div
                className={`relative shrink-0 w-[92vw] sm:w-[820px] lg:w-[1050px] flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                {/* Dual Image Container */}
                <div className="flex items-center justify-center gap-3 sm:gap-5 shrink-0 w-full md:w-auto">
                  {/* Image 1 */}
                  <div className="relative h-[240px] sm:h-[400px] lg:h-[480px] w-[140px] sm:w-[250px] lg:w-[290px] rounded-[140px] overflow-hidden bg-stone-900 shadow-xl border border-stone-300/60 group animate-image-reveal animate-image-float">
                    <div className="absolute inset-0 animate-image-zoom-pan">
                      <Image
                        src="/img1.png"
                        alt="Roof Washing Process"
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Black fade overlay - stays on hover, just slightly lighter */}
                    <div className="absolute inset-0 bg-black animate-black-fade pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
                    {/* Warm tone overlay */}
                    <div className="absolute inset-0 bg-[#b89774]/25 mix-blend-multiply pointer-events-none transition-opacity duration-500" />
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-20deg]" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="relative h-[200px] sm:h-[340px] lg:h-[400px] w-[110px] sm:w-[200px] lg:w-[230px] rounded-r-[140px] rounded-l-none overflow-hidden bg-stone-900 shadow-xl border-y border-r border-stone-300/60 group animate-image-reveal delay-200 animate-image-float">
                    <div className="absolute inset-0 animate-image-zoom-pan" style={{ animationDelay: "1s" }}>
                      <Image
                        src="/contact2.png"
                        alt="Roof Inspection"
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Black fade overlay - stays on hover, just slightly lighter */}
                    <div className="absolute inset-0 bg-black animate-black-fade delay-200 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
                    {/* Warm tone overlay */}
                    <div className="absolute inset-0 bg-[#b89774]/25 mix-blend-multiply pointer-events-none transition-opacity duration-500" />
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-20deg]" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Stacked Content */}
                <div className="flex flex-col justify-center whitespace-normal w-full md:w-[480px] space-y-8 sm:space-y-12 lg:space-y-14">
                  {/* Item 01 */}
                  <div className="flex flex-col relative group animate-fade-in-left delay-300">
                    <div className="absolute -top-8 -left-10 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none opacity-95 -rotate-12 animate-float">
                      <Image
                        src="/circule.svg"
                        alt="Background Circle"
                        fill
                        className="object-contain"
                        style={{ filter: "brightness(0.35) sepia(1) hue-rotate(330deg) saturate(3.5)" }}
                      />
                    </div>

                    <div className="flex items-baseline space-x-3 sm:space-x-4 mb-2 sm:mb-3 relative z-10">
                      <span
                        className="text-[#8c6d4f] text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif transition-transform duration-300 group-hover:scale-110"
                        style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                      >
                        01
                      </span>
                      <h3
                        className="text-stone-900 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide font-serif"
                        style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                      >
                        Comprehensive Assessment
                      </h3>
                    </div>
                    <p
                      className="text-stone-600 text-xs sm:text-sm lg:text-base font-light leading-relaxed pl-10 sm:pl-12 lg:pl-14"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Detailed diagnostic evaluations of roof structures,
                      external walls, and drainage points to detect hidden
                      vulnerabilities prior to treatment.
                    </p>
                  </div>

                  {/* Item 02 */}
                  <div className="flex flex-col relative group animate-fade-in-left delay-500">
                    <div className="absolute -top-8 -left-10 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none opacity-95 -rotate-12 animate-float">
                      <Image
                        src="/circule.svg"
                        alt="Background Circle"
                        fill
                        className="object-contain"
                        style={{ filter: "brightness(0.35) sepia(1) hue-rotate(330deg) saturate(3.5)" }}
                      />
                    </div>

                    <div className="flex items-baseline space-x-3 sm:space-x-4 mb-2 sm:mb-3 relative z-10">
                      <span
                        className="text-[#8c6d4f] text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif transition-transform duration-300 group-hover:scale-110"
                        style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                      >
                        02
                      </span>
                      <h3
                        className="text-stone-900 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide font-serif"
                        style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                      >
                        Targeted Soft-Wash
                      </h3>
                    </div>
                    <p
                      className="text-stone-600 text-xs sm:text-sm lg:text-base font-light leading-relaxed pl-10 sm:pl-12 lg:pl-14"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Utilizing specialized low-pressure techniques to safely
                      clean delicate roof membranes and tiles without causing
                      structural compromise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subsequent Horizontal Panels (Points 03 to 06) */}
              {panels.map((panel, index) => {
                const triggerThreshold = (index + 1) / (panels.length + 1);
                const isActivated = scrollProgress >= triggerThreshold - 0.15;

                return (
                  <div
                    key={panel.id}
                    className={`relative shrink-0 w-[92vw] sm:w-[800px] lg:w-[980px] flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 transition-all duration-700 ease-out ${
                      isActivated ? "opacity-100 translate-y-0 scale-100" : "opacity-30 translate-y-8 scale-95"
                    }`}
                  >
                    {/* Panel Image */}
                    <div
                      className={`relative h-[260px] sm:h-[400px] lg:h-[480px] w-[180px] sm:w-[280px] lg:w-[330px] rounded-[160px] overflow-hidden bg-stone-900 shadow-xl border border-stone-300/60 group shrink-0 transition-all duration-700 ${
                        isActivated ? "animate-glow-pulse" : ""
                      }`}
                    >
                      <div className="absolute inset-0 animate-image-zoom-pan" style={{ animationDelay: `${index}s` }}>
                        <Image
                          src={panel.image}
                          alt="Indo Roof Service Detail"
                          fill
                          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                        />
                      </div>

                      {/* Black fade overlay - stays on hover, slightly lighter */}
                      <div
                        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 group-hover:opacity-40 ${
                          isActivated ? "opacity-55" : "opacity-75"
                        }`}
                      />

                      {/* Warm tone overlay */}
                      <div className="absolute inset-0 bg-[#b89774]/25 mix-blend-multiply pointer-events-none transition-opacity duration-500" />

                      {/* Shimmer sweep on hover */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-20deg]" />
                      </div>

                      {/* Badge */}
                      <div
                        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 bg-stone-900/80 backdrop-blur-md text-[#c2a382] text-[9px] sm:text-[10px] lg:text-xs tracking-widest uppercase px-3 sm:px-4 py-1.5 rounded-full border border-white/10 text-center whitespace-nowrap transition-all duration-500 group-hover:bg-stone-900/95 group-hover:border-[#8c6d4f]/50 z-10"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {panel.badge}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center whitespace-normal w-full md:w-[500px] space-y-8 sm:space-y-12 lg:space-y-14">
                      {panel.items.map((item, itemIndex) => (
                        <div
                          key={item.num}
                          className={`flex flex-col relative group transition-all duration-700 ${
                            isActivated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                          }`}
                          style={{
                            transitionDelay: isActivated ? `${itemIndex * 200 + 200}ms` : "0ms",
                          }}
                        >
                          <div className="absolute -top-8 -left-10 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none opacity-95 -rotate-12 animate-float">
                            <Image
                              src="/circule.svg"
                              alt="Background Circle"
                              fill
                              className="object-contain"
                              style={{ filter: "brightness(0.35) sepia(1) hue-rotate(330deg) saturate(3.5)" }}
                            />
                          </div>

                          <div className="flex items-baseline space-x-3 sm:space-x-4 mb-2 sm:mb-3 relative z-10">
                            <span
                              className="text-[#8c6d4f] text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif transition-transform duration-300 group-hover:scale-110"
                              style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                            >
                              {item.num}
                            </span>
                            <h3
                              className="text-stone-900 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide font-serif"
                              style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p
                            className="text-stone-600 text-xs sm:text-sm lg:text-base font-light leading-relaxed pl-10 sm:pl-12 lg:pl-14"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Final End Panel */}
              <div className="relative shrink-0 w-[260px] sm:w-[340px] h-full flex flex-col items-center justify-center text-center">
                <Link href="/contact" className="group flex flex-col items-center space-y-4">
                  <div className="relative h-[280px] sm:h-[380px] w-[200px] sm:w-[260px] rounded-[130px] overflow-hidden bg-stone-900 border border-stone-300 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:border-[#8c6d4f] group-hover:shadow-2xl group-hover:shadow-[#8c6d4f]/20 group-hover:scale-105">
                    <div className="absolute inset-0 animate-image-zoom-pan">
                      <Image
                        src="/roof.png"
                        alt="Get Free Estimate"
                        fill
                        className="object-cover opacity-40 transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Black fade overlay - stays on hover */}
                    <div className="absolute inset-0 bg-black opacity-45 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-[#b89774]/20 mix-blend-multiply pointer-events-none" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                      <span
                        className="text-white font-serif text-xl sm:text-2xl lg:text-3xl font-light mb-3 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
                        style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
                      >
                        Book Roof <br />
                        Cleaning
                      </span>
                      <span className="text-[#c2a382] text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-110">
                        ⟶
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}