import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Sparkles, UtensilsCrossed, Shield } from 'lucide-react';
import { SQUAD_MEMBERS } from '../data/mockData';
import { SectionHeading } from './SectionHeading';

export const SquadSection: React.FC = () => {
  return (
    <section id="squad" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeading
        badge="NAMMA GANG • நம்ம கேங்"
        title="Meet The Unfiltered"
        titleHighlight="Squad"
        subtitle="The brotherhood behind every spontaneous counter, roadside feast, and unstoppable wheezing laughter fit."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SQUAD_MEMBERS.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl glass-panel p-6 border border-white/10 hover:border-saffron-500/40 transition-all flex flex-col justify-between group overflow-hidden relative"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-500/10 rounded-full blur-2xl group-hover:bg-saffron-500/20 transition-colors pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-saffron-400 bg-saffron-500/10 px-2.5 py-1 rounded-full border border-saffron-500/30">
                  {member.badge}
                </span>
                <span className="text-xs font-mono text-lime-accent">
                  {member.tamilName}
                </span>
              </div>

              {/* Avatar placeholder / stylized icon badge */}
              <div className="w-16 h-16 rounded-2xl bg-charcoal-900 border border-white/15 flex items-center justify-center mb-5 group-hover:border-saffron-500/50 group-hover:scale-105 transition-all shadow-inner">
                {idx === 0 && (
                  <img
                    src="/channel-1.jpeg"
                    alt="VJ Siddhu"
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                )}
                {idx === 1 && <Smile className="w-8 h-8 text-saffron-400" />}
                {idx === 2 && <Sparkles className="w-8 h-8 text-lime-accent" />}
                {idx === 3 && <Shield className="w-8 h-8 text-amber-400" />}
              </div>

              <h3 className="font-display font-extrabold text-xl text-cream-50 group-hover:text-saffron-400 transition-colors">
                {member.name}
              </h3>

              <h4 className="text-xs font-mono text-cream-300 mt-1">
                {member.role}
              </h4>

              <p className="mt-3 text-xs text-cream-300/80 leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[11px] font-mono text-cream-400">
                <UtensilsCrossed className="w-3.5 h-3.5 text-lime-accent shrink-0" />
                <span className="truncate">Fav: {member.favoriteFood}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
