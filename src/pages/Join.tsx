import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Ticket,
  Radio,
  ShieldCheck,
  ChevronDown,
  RotateCcw,
  Database,
  Users,
  Utensils
} from 'lucide-react';
import { AnimatedButton } from '../components/AnimatedButton';
import { submitFanSignup, getLocalSignups } from '../lib/signup';
import { isSupabaseConfigured } from '../lib/supabase';
import type { WaitlistFormData } from '../types';

// Zod schema matching database requirements
const signupSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your name (at least 2 characters).' })
    .max(80, { message: 'Name must be under 80 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please provide a valid email address.' }),
  favoriteVlogType: z.enum([
    'Therku Seemai & Village Vlogs',
    'Squad Road Trips & Hill Stations',
    'Harshath & Siddhu Comedy Counters',
    'Food Hunts & Street Food Trails',
  ] as const, {
    errorMap: () => ({ message: 'Please select your favourite vlog format.' }),
  }),
  message: z
    .string()
    .max(500, { message: 'Message must be under 500 characters.' })
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must agree to receive fan-project updates to join.',
    }),
  }),
});

type FormData = z.infer<typeof signupSchema>;

export const Join: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success?: boolean;
    message?: string;
    isSimulated?: boolean;
    ticketData?: FormData;
  } | null>(null);
  const [showManifestVault, setShowManifestVault] = useState(false);

  const supabaseReady = isSupabaseConfigured();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      favoriteVlogType: 'Therku Seemai & Village Vlogs',
      message: '',
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await submitFanSignup(data as WaitlistFormData);

      if (response.success) {
        // Trigger celebratory confetti burst
        try {
          confetti({
            particleCount: 110,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#f97316', '#84cc16', '#fbbf24', '#ffffff'],
          });
        } catch {
          // ignore confetti fallback
        }

        setSubmissionStatus({
          success: true,
          message: response.message,
          isSimulated: response.isSimulated,
          ticketData: data,
        });
      } else {
        setSubmissionStatus({
          success: false,
          message: response.message || 'Submission failed. Please check your network and try again.',
        });
      }
    } catch (err: unknown) {
      setSubmissionStatus({
        success: false,
        message: err instanceof Error ? err.message : 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    reset();
    setSubmissionStatus(null);
  };

  const localEntries = getLocalSignups();

  return (
    <div className="min-h-[88vh] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-lime-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* LEFT COLUMN: FORM OR CONFIRMATION TICKET */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 font-mono text-xs uppercase tracking-wider border border-saffron-500/30">
                  <Ticket className="w-3.5 h-3.5" />
                  PASSENGER MANIFEST • நம்ம கேங்
                </span>

                <span className="flex items-center gap-1.5 text-xs font-mono text-cream-400">
                  <Database className="w-3.5 h-3.5 text-lime-accent" />
                  <span>{supabaseReady ? 'Supabase Connected' : 'Demo Vault Ready'}</span>
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-cream-50 tracking-tight leading-tight">
                Your Name on the{' '}
                <span className="bg-gradient-to-r from-saffron-400 to-amber-300 bg-clip-text text-transparent">
                  Passenger List.
                </span>
              </h1>
              <p className="mt-3 text-cream-300 text-sm sm:text-base leading-relaxed">
                Take your seat with Siddhu, Harshath, Arun, and the 6M+ crew. Receive drop notices, travel itineraries, and virunthu meetup alerts.
              </p>
            </div>

            {/* FORM VIEW OR SUCCESS VIEW */}
            <AnimatePresence mode="wait">
              {submissionStatus?.success ? (
                /* POLISHED SUCCESS STATE / BOARDING PASS */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-charcoal-900 border border-lime-accent/40 text-cream-100 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-lime-accent/20 text-lime-accent flex items-center justify-center border border-lime-accent/40">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-cream-50">
                          Seat Confirmed Shotgun! வெல்கம் மச்சி!
                        </h3>
                        <p className="text-xs font-mono text-lime-accent">
                          {submissionStatus.message}
                        </p>
                      </div>
                    </div>

                    {/* Digital Passenger Boarding Pass Ticket */}
                    {submissionStatus.ticketData && (
                      <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-white/15 font-mono text-xs space-y-3 relative overflow-hidden shadow-xl">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="/channel-1.jpeg"
                              alt="VJ Siddhu Logo"
                              className="w-8 h-8 rounded-full object-cover ring-1 ring-saffron-500"
                            />
                            <div>
                              <div className="font-bold text-cream-50 font-display">VJ SIDDHU VLOGS</div>
                              <div className="text-[10px] text-lime-accent">OFFICIAL PASSENGER PASS</div>
                            </div>
                          </div>
                          <span className="text-saffron-400 font-bold tracking-wider">#SIDHU-CREW-{Math.floor(1000 + Math.random() * 9000)}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">PASSENGER:</span>
                          <span className="text-saffron-400 font-bold uppercase">
                            {submissionStatus.ticketData.fullName}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">EMAIL:</span>
                          <span className="text-cream-200">
                            {submissionStatus.ticketData.email}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">VLOG GENRE:</span>
                          <span className="text-lime-accent">
                            {submissionStatus.ticketData.favoriteVlogType}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-cream-400 pt-1">
                          <span>ROUTE: THERKU SEEMAI EXPRESS</span>
                          <span className="text-saffron-400 font-bold">FUN PANROM!</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-cream-200 font-medium text-sm flex items-center justify-center gap-2 border border-white/10 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Register Another Crew Mate
                    </button>
                    <AnimatedButton to="/" variant="secondary" size="md">
                      Return to Hub Home
                    </AnimatedButton>
                  </div>
                </motion.div>
              ) : (
                /* INTERACTIVE FORM */
                <motion.form
                  key="signup-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {/* Error banner if submission failed */}
                  {submissionStatus?.success === false && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Submission Notice:</span>
                        {submissionStatus.message}
                      </div>
                    </motion.div>
                  )}

                  {/* 1. Full Name Field */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase tracking-wider text-cream-200 mb-2"
                    >
                      Your Name / பெயர் <span className="text-saffron-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Vignesh, Karthik, or Priya"
                      {...register('fullName')}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-saffron-500'
                      } text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:ring-1 focus:ring-saffron-500 transition-colors`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* 2. Email Address Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-cream-200 mb-2"
                    >
                      Email Address <span className="text-saffron-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. namma.fan@gmail.com"
                      {...register('email')}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-saffron-500'
                      } text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:ring-1 focus:ring-saffron-500 transition-colors`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* 3. Favourite Kind of Vlog Field */}
                  <div>
                    <label
                      htmlFor="favoriteVlogType"
                      className="block text-xs font-mono uppercase tracking-wider text-cream-200 mb-2"
                    >
                      Favourite Kind of VJ Siddhu Vlog <span className="text-saffron-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="favoriteVlogType"
                        {...register('favoriteVlogType')}
                        aria-invalid={errors.favoriteVlogType ? 'true' : 'false'}
                        aria-describedby={errors.favoriteVlogType ? 'vlogType-error' : undefined}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/15 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-saffron-500 appearance-none pr-10 cursor-pointer"
                      >
                        <option value="Therku Seemai & Village Vlogs">Therku Seemai & Village Vlogs (தெற்கு சீமை)</option>
                        <option value="Squad Road Trips & Hill Stations">Squad Road Trips & Hill Stations (கொடைக்கானல் / ஊட்டி)</option>
                        <option value="Harshath & Siddhu Comedy Counters">Harshath & Siddhu Comedy Counters (பன் பண்றோம்)</option>
                        <option value="Food Hunts & Street Food Trails">Food Hunts & Street Food Trails (பரோட்டா & சால்னா வேட்டை)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-cream-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.favoriteVlogType && (
                      <p id="vlogType-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.favoriteVlogType.message}
                      </p>
                    )}
                  </div>

                  {/* 4. Optional Message Field */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-cream-200"
                      >
                        Message to Siddhu, Harshath & Arun (Optional)
                      </label>
                      <span className="text-[11px] font-mono text-cream-400">Max 500 chars</span>
                    </div>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share your favourite counter dialogue, dhaba recommendation, or route suggestion..."
                      {...register('message')}
                      className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/15 text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:ring-1 focus:ring-saffron-500 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* 5. Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('consent')}
                        aria-invalid={errors.consent ? 'true' : 'false'}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-charcoal-900 text-saffron-500 focus:ring-saffron-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-xs text-cream-300 leading-relaxed select-none">
                        I agree to receive updates from this fan-project demo.{' '}
                        <span className="text-cream-400 font-mono block sm:inline">
                          (Academic demonstration, zero spam)
                        </span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <AnimatedButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={
                        isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? 'Confirming Shotgun Seat...' : 'Claim Your Passenger Seat'}
                    </AnimatedButton>
                  </div>

                  {/* Small note */}
                  <p className="text-[11px] text-center text-cream-400 font-mono pt-1">
                    Protected by client validation & academic privacy guidelines.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Student/Evaluator Live Inspector Drawer */}
          <div className="mt-6 p-4 rounded-2xl bg-charcoal-900/60 border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cream-300 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-lime-accent" />
                <span>Evaluator Vault ({localEntries.length} demo signups recorded)</span>
              </span>
              <button
                type="button"
                onClick={() => setShowManifestVault(!showManifestVault)}
                className="text-xs font-mono text-saffron-400 hover:text-saffron-300"
              >
                {showManifestVault ? 'Hide entries' : 'Inspect entries'}
              </button>
            </div>

            {showManifestVault && (
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2 max-h-48 overflow-y-auto">
                {localEntries.length === 0 ? (
                  <p className="text-xs text-cream-400 italic">No entries yet. Fill out the form above to test submission!</p>
                ) : (
                  localEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="p-2.5 rounded-lg bg-charcoal-950/80 border border-white/5 text-[11px] font-mono flex items-center justify-between text-cream-300"
                    >
                      <div>
                        <span className="text-saffron-400 font-semibold">{entry.full_name}</span> ({entry.email})
                      </div>
                      <span className="text-lime-accent">{entry.favorite_vlog_type}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: PASSENGER PRIVILEGES & AUTHENTIC BANTER */}
        <div className="lg:col-span-5 space-y-6">
          {/* Passenger Lounge Card */}
          <div className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-white/10 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <img
                src="/channel-1.jpeg"
                alt="VJ Siddhu Vlogs"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-saffron-500 shadow-md"
              />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-saffron-400 font-bold">
                  NAMMA SQUAD RADAR
                </span>
                <h3 className="font-display font-bold text-lg text-cream-50">
                  Passenger Seat Privileges
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                {
                  title: 'Therku Seemai Route Drops',
                  desc: 'Get first notice when the squad sets off on Southern Tamil Nadu village expeditions.',
                },
                {
                  title: 'Food Trail & Dhaba Suggestions',
                  desc: 'Suggest the next legendary parotta stall or village kari dosa spot for the team to review.',
                },
                {
                  title: '6M+ Subscriber Family Love',
                  desc: 'Be in the front row for community virunthu gatherings, open meets, and fan updates.',
                },
              ].map((perk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-charcoal-950 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-lime-accent text-xs font-mono font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cream-100">{perk.title}</h4>
                    <p className="text-xs text-cream-300/80 mt-0.5 leading-relaxed">{perk.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cream-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-lime-accent" />
                RLS Guarded DB
              </span>
              <span>EST. TRIP TIME: ALWAYS FUN</span>
            </div>
          </div>

          {/* Authentic Food & Quote Card */}
          <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-cream-400">
              <span className="flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-saffron-400" />
                NAMMA DIALOGUE #VERA-LEVEL
              </span>
              <span className="text-lime-accent">MADURAI SALNA VIBE</span>
            </div>

            {/* Audio Wave Visual Bars */}
            <div className="flex items-end gap-1.5 h-12 py-1 justify-between px-2 bg-charcoal-950/70 rounded-xl border border-white/5">
              {[35, 60, 20, 80, 45, 95, 30, 70, 50, 85, 40, 100, 65, 30, 75, 45, 90, 25, 55, 80].map(
                (h, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      height: [`${h}%`, `${Math.max(15, (h * 1.3) % 100)}%`, `${h}%`],
                    }}
                    transition={{
                      duration: 1.2 + (idx % 5) * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 bg-gradient-to-t from-saffron-500 to-amber-300 rounded-full"
                  />
                )
              )}
            </div>

            <p className="text-xs text-cream-200 italic font-serif leading-relaxed">
              “வண்டில பெட்ரோல் இருக்கு... கூட மச்சி ஹர்ஷத் இருக்கான்... முன்னாடி தெற்கு சீமை ரோடு இருக்கு! பன் பண்றோம்!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
