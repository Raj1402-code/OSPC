import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, Users, ArrowRight } from 'lucide-react';
import { VibeFeature } from '../types';

interface FeatureCardProps {
  feature: VibeFeature;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const getIcon = () => {
    switch (feature.iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-saffron-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-lime-accent" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      default:
        return <Compass className="w-6 h-6 text-saffron-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-saffron-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div
        className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${feature.accentColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-charcoal-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-saffron-500/40 transition-all duration-300 shadow-inner">
            {getIcon()}
          </div>
          <span className="font-mono text-xs tracking-widest text-cream-400 uppercase bg-charcoal-900/80 px-2.5 py-1 rounded-full border border-white/5">
            {feature.badge}
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl text-cream-50 group-hover:text-saffron-400 transition-colors">
          {feature.title}
        </h3>

        <h4 className="font-mono text-xs text-saffron-400/90 mt-1 uppercase tracking-wide">
          {feature.subtitle}
        </h4>

        <p className="mt-4 text-cream-300/80 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cream-400 group-hover:text-cream-200">
        <span className="tracking-wider uppercase">Unscripted DNA</span>
        <ArrowRight className="w-4 h-4 text-saffron-400 transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </motion.div>
  );
};
