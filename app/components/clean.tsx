'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CleanImage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const autoCleanIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  const getBrushSize = () => {
    if (typeof window === 'undefined') return 55;
    if (window.innerWidth < 640) return 38;
    if (window.innerWidth < 1024) return 48;
    return 58;
  };

  const dirtyImgRef = useRef<HTMLImageElement | null>(null);
  const cleanImgRef = useRef<HTMLImageElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dirtyImgRef.current || !cleanImgRef.current) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    canvasCtxRef.current = ctx;

    const container = canvas.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const baseAspect =
      cleanImgRef.current.height && cleanImgRef.current.width
        ? cleanImgRef.current.height / cleanImgRef.current.width
        : 0.6;

    const isMobile = window.innerWidth < 640;
    const mobileHeightMultiplier = 1.2;
    const imgAspect = isMobile ? baseAspect * mobileHeightMultiplier : baseAspect;
    const height = width * imgAspect;

    canvas.width = width;
    canvas.height = height;
    container.style.height = `${height}px`;

    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(dirtyImgRef.current, 0, 0, width, height);
  }, []);

  const startAutoCleanLoop = useCallback(() => {
    if (!isMountedRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvasCtxRef.current;
    if (!canvas || !ctx) return;

    if (autoCleanIntervalRef.current) {
      clearInterval(autoCleanIntervalRef.current);
      autoCleanIntervalRef.current = null;
    }

    const width = canvas.width;
    const height = canvas.height;
    const brushSize = getBrushSize();

    const pathPoints: { x: number; y: number }[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    pathPoints.push({ x: centerX, y: centerY });

    const maxRadius = Math.sqrt(width * width + height * height) / 2 + brushSize;
    const ringSpacing = brushSize * 0.7;
    const totalRings = Math.ceil(maxRadius / ringSpacing);
    const pointsPerRing = 24;

    for (let r = 1; r <= totalRings; r++) {
      const radius = r * ringSpacing;
      const angleOffset = (r * Math.PI) / pointsPerRing / 2;
      for (let p = 0; p < pointsPerRing; p++) {
        const angle = (p / pointsPerRing) * Math.PI * 2 + angleOffset;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        pathPoints.push({ x, y });
      }
    }

    let currentIndex = 0;

    autoCleanIntervalRef.current = setInterval(() => {
      if (!isMountedRef.current) return;

      const canvasEl = canvasRef.current;
      const ctxEl = canvasCtxRef.current;
      if (!canvasEl || !ctxEl) {
        if (autoCleanIntervalRef.current) clearInterval(autoCleanIntervalRef.current);
        return;
      }

      if (currentIndex >= pathPoints.length) {
        if (autoCleanIntervalRef.current) {
          clearInterval(autoCleanIntervalRef.current);
          autoCleanIntervalRef.current = null;
        }

        restartTimeoutRef.current = setTimeout(() => {
          if (!isMountedRef.current) return;
          const c = canvasRef.current;
          const cx = canvasCtxRef.current;
          const d = dirtyImgRef.current;
          if (!c || !cx || !d) return;

          cx.globalCompositeOperation = 'source-over';
          cx.drawImage(d, 0, 0, c.width, c.height);

          restartTimeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) startAutoCleanLoop();
          }, 400);
        }, 1500);

        return;
      }

      const point = pathPoints[currentIndex];

      ctxEl.save();
      ctxEl.globalCompositeOperation = 'destination-out';

      const gradient = ctxEl.createRadialGradient(
        point.x,
        point.y,
        3,
        point.x,
        point.y,
        brushSize * 1.3
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctxEl.fillStyle = gradient;
      ctxEl.beginPath();
      ctxEl.arc(point.x, point.y, brushSize * 1.3, 0, Math.PI * 2);
      ctxEl.fill();
      ctxEl.restore();

      currentIndex++;
    }, 30);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    const dirty = new window.Image();
    const clean = new window.Image();

    dirty.crossOrigin = 'anonymous';
    clean.crossOrigin = 'anonymous';

    dirty.src = '/dirty.png';
    clean.src = '/clean.png';

    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        dirtyImgRef.current = dirty;
        cleanImgRef.current = clean;
        setImagesLoaded(true);
        requestAnimationFrame(() => {
          initCanvas();
        });
      }
    };

    dirty.onload = handleLoad;
    clean.onload = handleLoad;

    const handleResize = () => {
      if (dirtyImgRef.current && cleanImgRef.current) {
        initCanvas();
        setTimeout(() => {
          if (isMountedRef.current) startAutoCleanLoop();
        }, 200);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener('resize', handleResize);
      if (autoCleanIntervalRef.current) clearInterval(autoCleanIntervalRef.current);
      if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
    };
  }, [initCanvas, startAutoCleanLoop]);

  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return;

    const t = setTimeout(() => {
      if (isMountedRef.current) startAutoCleanLoop();
    }, 500);

    return () => clearTimeout(t);
  }, [imagesLoaded, startAutoCleanLoop]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
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
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 4rem; }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(194, 163, 130, 0.4); }
          50% { border-color: rgba(194, 163, 130, 0.8); }
        }

        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-line-grow { animation: lineGrow 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-border-glow { animation: borderGlow 3s ease-in-out infinite; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* ✅ Plain bg, NO glows */}
      <section className="relative w-full pt-6 sm:pt-10 md:pt-14 lg:pt-16 pb-20 sm:pb-16 md:pb-20 lg:pb-24 px-3 sm:px-6 md:px-8 bg-[#f4efeb] min-h-[auto] sm:min-h-screen text-stone-900 flex flex-col items-center justify-center font-sans select-none overflow-x-hidden">

        {/* ❌ All background glows removed to prevent seams */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 text-center max-w-xs sm:max-w-xl md:max-w-2xl mb-4 sm:mb-8 md:mb-10"
        >
          <span
            className="text-[#8c6d4f] text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase block mb-1.5 sm:mb-3 animate-fade-in-up"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Interactive Cleaning Experience
          </span>
          <h1
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 tracking-tight mb-2 sm:mb-4 font-serif animate-fade-in-up delay-200"
            style={{ fontFamily: "'Playfair Display', 'Baskerville', 'Cormorant Garamond', serif" }}
          >
            Watch it clean.
            <br />
            <span className="text-[#8c6d4f]">See the transformation unfold.</span>
          </h1>
          <p
            className="text-stone-600 text-[11px] sm:text-sm md:text-base max-w-[280px] sm:max-w-md md:max-w-lg mx-auto leading-relaxed font-light animate-fade-in-up delay-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Watch the automated cleaning loop reveal the pristine surface beneath the grime.
          </p>
          <div className="w-10 sm:w-16 h-[2px] bg-[#8c6d4f] mx-auto mt-3 sm:mt-6 animate-line-grow delay-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-0"
        >
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden ring-1 sm:ring-2 ring-[#c2a382]/40 bg-[#3c3835] transition-all duration-500 shadow-lg sm:shadow-xl animate-glow-pulse animate-border-glow">

            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-l-2 border-[#c2a382]/60 z-40 pointer-events-none" />
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-r-2 border-[#c2a382]/60 z-40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-l-2 border-[#c2a382]/60 z-40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-r-2 border-[#c2a382]/60 z-40 pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmerSweep_4s_ease-in-out_infinite] skew-x-[-20deg]" />
            </div>

            <div className="relative w-full bg-[#3c3835] flex items-center justify-center pointer-events-none">
              {!imagesLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#3c3835] text-[#f4efe6] z-30 min-h-[200px] sm:min-h-[350px]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-[#8c6d4f] border-t-transparent rounded-full animate-spin"></div>
                    <p
                      className="text-xs sm:text-sm text-[#c2a382]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Loading roof surfaces...
                    </p>
                  </div>
                </div>
              )}

              <img
                src="/clean.png"
                alt="Clean Roof"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
              />

              <canvas
                ref={canvasRef}
                className="relative z-10 w-full h-full block pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 mt-8 sm:mt-12 md:mt-16 flex items-center justify-center"
        >
          <div className="w-24 sm:w-32 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#8c6d4f]/50 to-transparent" />
        </motion.div>
      </section>
    </>
  );
}