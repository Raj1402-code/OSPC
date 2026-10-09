import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Coffee, Fuel } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedButton } from '../components/AnimatedButton';
import { FeatureCard } from '../components/FeatureCard';
import { MomentCard } from '../components/MomentCard';
import { StoryModal } from '../components/StoryModal';
import { StatsCounter } from '../components/StatsCounter';
import { ReactBitsBackground } from '../components/ReactBitsBackground';
import { VIBE_FEATURES, FEATURED_MOMENTS } from '../data/mockData';
import type { VlogMoment } from '../types';

export const Home: React.FC = () => {
  const [selectedMoment, setSelectedMoment] = useState<VlogMoment | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <ReactBitsBackground />

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Ambient Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/80 border border-saffron-500/30 text-saffron-400 text-xs font-mono tracking-widest uppercase shadow-lg shadow-saffron-500/10 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5 animate-spin-slow text-lime-accent" />
                <span>UNOFFICIAL TRIBUTE • CREATOR JOURNAL</span>
              </span>
            </motion.div>

            {/* Editorial Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 tracking-tight leading-[1.05]"
            >
              Every Detour <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-saffron-400 via-amber-400 to-lime-accent bg-clip-text text-transparent">
                Has a Story.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-cream-200/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed"
            >
              For the missed turns, the roadside chai, and the stories nobody planned. Unfiltered road trips, spontaneous comedy, and genuine culture from the passenger seat.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <AnimatedButton
                to="/journey"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore the Journey
              </AnimatedButton>

              <AnimatedButton
                to="/join"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Sparkles className="w-4 h-4 text-saffron-400" />}
                iconPosition="left"
              >
                Join the Crew
              </AnimatedButton>
            </motion.div>

            {/* Floating Live Telemetry Strip */}
            <motion.div
              variants={itemVariants}
              className="mt-14 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl glass-panel text-xs font-mono text-cream-300 border border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
                <span>ROUTE: HIGHWAY EXPRESS</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Coffee className="w-3.5 h-3.5 text-saffron-400" />
                <span>CHAI BREAK FREQUENCY: FREQUENT</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Fuel className="w-3.5 h-3.5 text-amber-400" />
                <span>VIBE: 100% UNFILTERED</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE VIBE SECTION */}
      <section id="vibe" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          badge="THE ETHOS"
          title="Built On The Chaos Of"
          titleHighlight="Real Highways"
          subtitle="No staged dialogues. No synthetic glam. Just the authentic pulse of unexpected journeys across landscapes and roadside dhabas."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIBE_FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. AUDIENCE & STATS STRIP */}
      <StatsCounter />

      {/* 4. FEATURED MOMENTS SECTION */}
      <section id="moments" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="ARCHIVE VAULT"
            title="Celebrated"
            titleHighlight="Detour Moments"
            subtitle="Iconic fan-favourite road logs and spontaneous encounters immortalized in community folklore."
            align="left"
            className="mx-0"
          />

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cream-400">
              *Safe simulated fan previews
            </span>
            <AnimatedButton
              to="/journey"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Full Timeline
            </AnimatedButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_MOMENTS.map((moment, idx) => (
            <MomentCard
              key={moment.id}
              moment={moment}
              index={idx}
              onSelect={setSelectedMoment}
            />
          ))}
        </div>

        {/* Modal for viewing details */}
        <StoryModal
          moment={selectedMoment}
          onClose={() => setSelectedMoment(null)}
        />
      </section>

      {/* 5. STRONG NEWSLETTER / PASSENGER CALLOUT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl glass-panel-glow p-8 sm:p-14 overflow-hidden border border-saffron-500/30">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-saffron-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/20 border border-saffron-500/40 text-saffron-400 text-xs font-mono tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lime-accent" />
              JOIN THE PASSENGER MANIFEST
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-cream-50 tracking-tight leading-tight">
              Get in Before the{' '}
              <span className="bg-gradient-to-r from-saffron-400 to-amber-300 bg-clip-text text-transparent">
                Next Detour.
              </span>
            </h2>

            <p className="mt-4 text-cream-200/90 text-base sm:text-lg leading-relaxed">
              Hop onto the fan waitlist for drop announcements, behind-the-scenes road journals, and early notices on community meetups. No spam—only high octane road energy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <AnimatedButton
                to="/join"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Sign Passenger Manifest
              </AnimatedButton>

              <div className="text-xs font-mono text-cream-400 flex items-center gap-2 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                <span>Saves to Supabase Database with Demo Fallback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Disclaimer Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-4 rounded-xl bg-charcoal-900/50 border border-white/5 text-[11px] text-cream-400 flex items-center justify-between font-mono">
          <span>PROJECT TYPE: UNOFFICIAL FAN TRIBUTE (COLLEGE ASSIGNMENT)</span>
          <span className="hidden sm:inline">ALL TRADEMARKS BELONG TO THEIR RESPECTIVE OWNERS</span>
        </div>
      </div>
    </div>
  );
};
