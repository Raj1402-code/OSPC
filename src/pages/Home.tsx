import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Coffee, Fuel, Youtube, Heart, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedButton } from '../components/AnimatedButton';
import { FeatureCard } from '../components/FeatureCard';
import { MomentCard } from '../components/MomentCard';
import { StoryModal } from '../components/StoryModal';
import { StatsCounter } from '../components/StatsCounter';
import { SquadSection } from '../components/SquadSection';
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
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <ReactBitsBackground />

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Real Channel Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-charcoal-900/90 border border-saffron-500/40 text-saffron-400 text-xs font-mono tracking-wider uppercase shadow-xl shadow-saffron-500/10 backdrop-blur-md">
                <img
                  src="/channel-1.jpeg"
                  alt="VJ Siddhu Vlogs Logo"
                  className="w-6 h-6 rounded-full object-cover ring-1 ring-saffron-400"
                />
                <span className="font-semibold text-cream-100">VJ SIDDHU VLOGS</span>
                <span className="text-white/30">•</span>
                <span className="text-lime-accent font-bold">FUN PANROM & THERKU SEEMAI</span>
              </div>
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

            {/* Supporting Copy in genuine Tamil creator voice */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-cream-200/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed"
            >
              From Fun Panrom street comedy to southern village feasts and Kodaikanal midnight breakdowns. Experience the unfiltered road trips and counter banter of <strong className="text-cream-50 font-semibold">Siddhu & Harshath Khan</strong>.
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
                Explore The Squad Journey
              </AnimatedButton>

              <AnimatedButton
                to="/join"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Sparkles className="w-4 h-4 text-saffron-400" />}
                iconPosition="left"
              >
                Join Namma Passenger Crew
              </AnimatedButton>
            </motion.div>

            {/* Floating Live Telemetry Strip */}
            <motion.div
              variants={itemVariants}
              className="mt-12 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl glass-panel text-xs font-mono text-cream-300 border border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
                <span>ROUTE: MADURAI ➔ TIRUNELVELI ➔ TUTICORIN</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Coffee className="w-3.5 h-3.5 text-saffron-400" />
                <span>MENU: KARI DOSA & BUN PAROTTA</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Fuel className="w-3.5 h-3.5 text-amber-400" />
                <span>ENERGY: 100% UNFILTERED BANTER</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROAD TRIP VISUAL SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group"
        >
          <img
            src="/siddhu-roadtrip.jpg"
            alt="VJ Siddhu Vlogs Western Ghats Road Trip"
            className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500/90 text-white font-mono text-xs font-bold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                WESTERN GHATS • KODAIKANAL EXPEDITION
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
                “Pack the Car, Bring Harshath, Hit the Ghats.”
              </h3>
              <p className="text-xs sm:text-sm text-cream-200 mt-1 max-w-xl">
                Real roads, unpredictable breakdowns, and the unmistakable laughter of true friendship.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@VjSiddhuVlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs font-mono transition-colors shadow-lg self-start sm:self-auto"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. THE VIBE SECTION */}
      <section id="vibe" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          badge="THE ETHOS • நம்ம வைப்"
          title="What Makes VJ Siddhu Vlogs"
          titleHighlight="Vera Level"
          subtitle="It is not staged studio vlogging. It is the raw warmth of Tamil Nadu, roadside dhabas, and spontaneous jokes."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIBE_FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. MEET THE SQUAD SECTION (Siddhu, Harshath, Arun, Sheriff) */}
      <SquadSection />

      {/* 4. AUDIENCE & STATS STRIP */}
      <StatsCounter />

      {/* 5. FEATURED MOMENTS SECTION */}
      <section id="moments" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="SERIES ARCHIVES • தெற்கு சீமை & சாலை பதிவுகள்"
            title="Celebrated"
            titleHighlight="Detour Episodes"
            subtitle="Fan-favourite village feasts, midnight road breakdowns, and iconic food hunts."
            align="left"
            className="mx-0"
          />

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cream-400">
              *Interactive fan story logs
            </span>
            <AnimatedButton
              to="/journey"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Full Journey Timeline
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

      {/* 6. STRONG NEWSLETTER / PASSENGER CALLOUT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl glass-panel-glow p-8 sm:p-14 overflow-hidden border border-saffron-500/30">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-saffron-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/20 border border-saffron-500/40 text-saffron-400 text-xs font-mono tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lime-accent" />
              JOIN THE PASSENGER MANIFEST • நம்ம கேங்
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-cream-50 tracking-tight leading-tight">
              Take Your Seat in{' '}
              <span className="bg-gradient-to-r from-saffron-400 to-amber-300 bg-clip-text text-transparent">
                Namma Crew.
              </span>
            </h2>

            <p className="mt-4 text-cream-200/90 text-base sm:text-lg leading-relaxed">
              Put your name on the unofficial passenger waitlist for drop updates, behind-the-scenes travel notes, and early notifications on community virunthu gatherings.
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
                <span>Stores in Supabase with Demo Vault fallback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Disclaimer Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-4 rounded-xl bg-charcoal-900/50 border border-white/5 text-[11px] text-cream-400 flex items-center justify-between font-mono">
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-saffron-500" />
            ACADEMIC TRIBUTE: CELEBRATING VJ SIDDHU VLOGS
          </span>
          <span className="hidden sm:inline">COLLEGE WEB DEVELOPMENT PROJECT</span>
        </div>
      </div>
    </div>
  );
};
