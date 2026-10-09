import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, MapPin, Sparkles } from 'lucide-react';
import { VlogMoment } from '../types';

interface MomentCardProps {
  moment: VlogMoment;
  index: number;
  onSelect: (moment: VlogMoment) => void;
}

export const MomentCard: React.FC<MomentCardProps> = ({ moment, index, onSelect }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-3xl bg-charcoal-900/90 border border-white/10 hover:border-saffron-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-saffron-500/10"
    >
      {/* Visual Thumbnail Representation (Photo or Gradient with Grain) */}
      <div className={`relative h-52 w-full bg-gradient-to-br ${moment.thumbnailGradient} p-5 flex flex-col justify-between overflow-hidden`}>
        {moment.image && (
          <img
            src={moment.image}
            alt={moment.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-transparent pointer-events-none" />

        {/* Ambient Top Tags */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-saffron-400 border border-white/10">
            <Sparkles className="w-3 h-3" />
            {moment.category}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-cream-200 border border-white/10">
            <Clock className="w-3 h-3 text-saffron-400" />
            {moment.duration}
          </span>
        </div>

        {/* Center Hover Play Icon */}
        <div className="relative z-10 flex items-center justify-center my-auto">
          <motion.button
            onClick={() => onSelect(moment)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="w-14 h-14 rounded-full bg-saffron-500 text-white flex items-center justify-center shadow-lg shadow-saffron-500/30 border border-white/30 group-hover:bg-saffron-400 transition-colors cursor-pointer"
            aria-label={`Open story preview for ${moment.title}`}
          >
            <Play className="w-6 h-6 ml-1 fill-white" />
          </motion.button>
        </div>

        {/* Bottom Location Pill */}
        <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-mono text-cream-300 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm self-start border border-white/5">
          <MapPin className="w-3 h-3 text-lime-accent" />
          {moment.location}
        </div>
      </div>

      {/* Card Editorial Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-cream-50 group-hover:text-saffron-400 transition-colors line-clamp-1">
            {moment.title}
          </h3>
          <p className="mt-2 text-cream-300/80 text-sm leading-relaxed line-clamp-2">
            {moment.teaser}
          </p>
        </div>

        <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => onSelect(moment)}
            className="text-xs font-mono font-semibold tracking-wider uppercase text-saffron-400 hover:text-saffron-300 flex items-center gap-1.5 transition-colors focus:outline-none"
          >
            <span>WATCH STORY</span>
            <span className="text-sm">→</span>
          </button>
          <span className="text-[11px] font-mono text-cream-400">
            UNOFFICIAL LOG
          </span>
        </div>
      </div>
    </motion.article>
  );
};
