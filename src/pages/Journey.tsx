import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight, ShieldCheck, HeartHandshake, ShieldAlert, Sparkles, Utensils } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedButton } from '../components/AnimatedButton';
import { MILESTONES, AUDIENCE_THEMES } from '../data/mockData';

export const Journey: React.FC = () => {
  return (
    <div className="relative overflow-hidden pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-saffron-500/30 text-saffron-400 text-xs font-mono tracking-widest uppercase mb-6"
        >
          <img
            src="/channel-1.jpeg"
            alt="VJ Siddhu Vlogs"
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>CHANNEL ROADMAP • பயணம் தான் கதை</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-cream-50 tracking-tight leading-[1.1]"
        >
          The Journey Is the{' '}
          <span className="bg-gradient-to-r from-saffron-400 via-amber-400 to-lime-accent bg-clip-text text-transparent">
            Content.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-cream-200/90 text-base sm:text-lg leading-relaxed"
        >
          From the early Fun Panrom street mic days to the historic Therku Seemai village expeditions and 6M Virunthu. An authentic chronicle of VJ Siddhu, Harshath, and the squad.
        </motion.p>

        {/* Responsible Disclaimer Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal-900/60 border border-white/10 text-xs text-cream-400 font-mono"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>Fan-curated timeline commemorating the channel’s real evolutionary milestones.</span>
        </motion.div>
      </section>

      {/* 2. VERTICAL ANIMATED TIMELINE */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative">
          {/* Central Timeline Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-saffron-500 via-amber-400 to-lime-accent opacity-30" />

          <div className="space-y-12 md:space-y-20">
            {MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-16`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-charcoal-900 border-2 border-saffron-500 shadow-lg shadow-saffron-500/40 flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-lime-accent animate-pulse" />
                  </div>

                  {/* Milestone Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-12 md:ml-0 md:w-1/2 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-saffron-500/40 transition-all duration-300 shadow-xl group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 border border-saffron-500/30">
                        {milestone.year}
                      </span>
                      <span className="font-mono text-xs text-lime-accent font-medium bg-charcoal-900/90 px-2.5 py-1 rounded-md border border-white/5">
                        {milestone.highlightStat}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-cream-50 group-hover:text-saffron-400 transition-colors">
                      {milestone.title}
                    </h3>

                    <h4 className="text-xs font-mono text-cream-300/80 mt-1">
                      {milestone.tagline}
                    </h4>

                    <p className="mt-4 text-sm text-cream-300/80 leading-relaxed">
                      {milestone.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-mono text-cream-400">
                      <MapPin className="w-3.5 h-3.5 text-lime-accent" />
                      <span>{milestone.location}</span>
                    </div>

                    {/* Tag Pills */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-charcoal-900 border border-white/5 text-cream-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Empty side for layout balance on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIRUNTHU SPOTLIGHT SHOWCASE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl overflow-hidden glass-panel border border-saffron-500/30 grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-6 h-64 md:h-full relative">
            <img
              src="/therku-seemai-feast.jpg"
              alt="Therku Seemai Village Virunthu Feast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-charcoal-900/90" />
          </div>

          <div className="md:col-span-6 p-8 sm:p-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-accent/10 border border-lime-accent/30 text-lime-accent font-mono text-xs font-bold uppercase">
              <Utensils className="w-3.5 h-3.5" />
              THE 6M VIRUNTHU SPIRIT
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-cream-50 leading-tight">
              “When We Feasted Together on Banana Leaves.”
            </h3>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
              Crossing 6 Million subscribers was celebrated the true Tamil way: by rolling out mats on an open village ground, cooking hot biryani, and serving our subscriber family with love.
            </p>

            <div className="pt-2 text-xs font-mono text-saffron-400">
              #NammaMakkal • #TherkuSeemai • #6MVirunthu
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT THE CREW COMES FOR" AUDIENCE THEMES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="AUDIENCE ANCHOR • நம்ம மக்கள் வைப்"
          title="What the Crew"
          titleHighlight="Rides For"
          subtitle="The core values that make VJ Siddhu Vlogs feel like sitting with family."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE_THEMES.map((theme, idx) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-lime-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center mb-5 text-lime-accent">
                  {idx === 0 && <Sparkles className="w-6 h-6 text-saffron-400" />}
                  {idx === 1 && <Compass className="w-6 h-6 text-amber-400" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6 text-lime-accent" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6 text-saffron-400" />}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-saffron-400 font-semibold block mb-1">
                  {theme.highlight}
                </span>

                <h3 className="font-display font-bold text-lg text-cream-50">
                  {theme.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-cream-400 flex items-center justify-between">
                <span>CREW VALUE 0{idx + 1}</span>
                <span className="text-lime-accent">✓ VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION TO /join */}
      <section className="pt-4 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-charcoal-850 to-charcoal-900 border border-saffron-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-saffron-500/20 blur-3xl pointer-events-none" />

          <span className="font-mono text-xs uppercase tracking-widest text-lime-accent px-3 py-1 rounded-full bg-lime-accent/10 border border-lime-accent/20 inline-block mb-4">
            NEXT EXPEDITION
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-cream-50">
            Ready to Take Your Seat Shotgun?
          </h2>

          <p className="mt-4 text-cream-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The road trip continues. Put your name on the unofficial passenger list for notifications on what Siddhu and Harshath are cooking up next.
          </p>

          <div className="mt-8 flex justify-center">
            <AnimatedButton
              to="/join"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Sign Up on the Passenger List
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
};
