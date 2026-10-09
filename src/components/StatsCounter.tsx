import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CELEBRATORY_STATS } from '../data/mockData';

export const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={containerRef}
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-charcoal-900/60 backdrop-blur-md overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-lime-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-lime-accent px-3 py-1 rounded-full bg-lime-accent/10 border border-lime-accent/20">
            AUDIENCE & DETOUR LOGS
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream-50 mt-3">
            The Road by the Numbers
          </h3>
          <p className="text-xs sm:text-sm text-cream-400 mt-1.5">
            Celebratory community milestones & fan estimates—not official audit metrics.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CELEBRATORY_STATS.map((stat, idx) => (
            <CounterCard
              key={stat.label}
              stat={stat}
              isInView={isInView}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterCardProps {
  stat: {
    label: string;
    value: number;
    suffix: string;
    note: string;
  };
  isInView: boolean;
  delay: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ stat, isInView, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1800; // 1.8 seconds

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * stat.value));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, stat.value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-charcoal-850/80 border border-white/10 hover:border-saffron-500/30 transition-all text-center flex flex-col justify-between"
    >
      <div>
        <div className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-cream-50 flex items-center justify-center tracking-tight">
          <span className="bg-gradient-to-r from-cream-50 via-cream-100 to-saffron-300 bg-clip-text text-transparent">
            {count.toLocaleString()}
          </span>
          <span className="text-saffron-500 ml-1 text-2xl sm:text-3xl">
            {stat.suffix}
          </span>
        </div>
        <p className="mt-2 font-medium text-xs sm:text-sm text-cream-200">
          {stat.label}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5">
        <span className="font-mono text-[10px] text-cream-400 tracking-wide uppercase">
          {stat.note}
        </span>
      </div>
    </motion.div>
  );
};
