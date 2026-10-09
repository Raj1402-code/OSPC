import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ReactBitsBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Perspective Horizon Grid (Inspired by React Bits Matrix / Grid) */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 20%, transparent 85%)',
        }}
      />

      {/* 2. Primary Saffron Glow Orb (Tracks mouse with damping) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.18 }
            : {
                x: mousePos.x * 40,
                y: mousePos.y * 30,
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          x: { type: 'spring', damping: 40, stiffness: 60 },
          y: { type: 'spring', damping: 40, stiffness: 60 },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute -top-32 left-1/4 w-[540px] h-[540px] rounded-full bg-gradient-to-tr from-saffron-600/25 via-saffron-500/15 to-transparent blur-[120px]"
      />

      {/* 3. Electric Lime Glow Accent Orb */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.12 }
            : {
                x: mousePos.x * -30,
                y: mousePos.y * -25,
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          x: { type: 'spring', damping: 40, stiffness: 60 },
          y: { type: 'spring', damping: 40, stiffness: 60 },
          scale: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-44 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-lime-accent/15 via-lime-glow/10 to-transparent blur-[110px]"
      />

      {/* 4. Deep Charcoal / Indigo Grounding Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-500/5 rounded-full blur-[140px]" />

      {/* 5. Subtle Road Markers / Floating Telemetry Coordinates */}
      <div className="absolute inset-0 flex justify-between px-8 py-20 opacity-20 font-mono text-[10px] text-cream-300">
        <div className="space-y-1">
          <div>LOC: 28.6139° N, 77.2090° E</div>
          <div>ELEV: 2,140M • RAIN: MONSOON</div>
          <div>CAM: LOG-PROFILE • FPS: 60</div>
        </div>
        <div className="text-right space-y-1 hidden sm:block">
          <div>RIG: UNFILTERED ROAD PROTOCOL</div>
          <div>AUDIO: DUAL WINDSCREEN CHATTER</div>
          <div>CHAI STOPS: ACTIVE</div>
        </div>
      </div>
    </div>
  );
};
