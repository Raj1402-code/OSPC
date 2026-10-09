import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, MapPin, Clock, Quote, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { VlogMoment } from '../types';

interface StoryModalProps {
  moment: VlogMoment | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ moment, onClose }) => {
  if (!moment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-charcoal-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Top Video Preview Simulation Header */}
          <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${moment.thumbnailGradient} flex flex-col justify-between p-6 overflow-hidden`}>
            {/* Film Grain & Scanlines */}
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-saffron-400 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                {moment.category}
              </span>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron-500"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Player Action Center */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
              <div className="w-16 h-16 rounded-full bg-saffron-500/90 text-white flex items-center justify-center shadow-lg shadow-saffron-500/40 border-2 border-white/30 backdrop-blur-sm group cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
              <span className="text-xs font-mono text-cream-200 mt-2 bg-black/50 px-3 py-0.5 rounded-full backdrop-blur-sm">
                FAN SIMULATION • LOG RECORDING
              </span>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-cream-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lime-accent" />
                {moment.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-saffron-400" />
                {moment.duration}
              </span>
            </div>
          </div>

          {/* Story Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-cream-50 leading-tight">
                {moment.title}
              </h3>
              <p className="mt-2 text-cream-200 text-sm sm:text-base leading-relaxed">
                {moment.teaser}
              </p>
            </div>

            {/* Soundbite Quote */}
            <div className="p-4 rounded-2xl bg-charcoal-850 border border-saffron-500/20 flex items-start gap-3">
              <Quote className="w-5 h-5 text-saffron-400 shrink-0 mt-1" />
              <p className="text-sm italic text-cream-100 font-serif">
                {moment.quote}
              </p>
            </div>

            {/* Behind-the-scenes Log Notes */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-saffron-400 mb-3 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5" />
                Field Producer & Passenger Log Notes
              </h4>
              <ul className="space-y-2">
                {moment.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent mt-2 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer & Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-lime-accent" />
                Royalty-free simulated fan story preview
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 font-medium transition-colors border border-white/10"
              >
                Back to Highlights
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
