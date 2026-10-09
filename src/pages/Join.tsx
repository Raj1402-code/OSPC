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
  Compass,
  Radio,
  ShieldCheck,
  ChevronDown,
  RotateCcw,
  Database,
  Users
} from 'lucide-react';
import { AnimatedButton } from '../components/AnimatedButton';
import { submitFanSignup, getLocalSignups } from '../lib/signup';
import { isSupabaseConfigured } from '../lib/supabase';
import type { WaitlistFormData } from '../types';

// Zod schema matching database requirements
const signupSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters).' })
    .max(80, { message: 'Name must be under 80 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please provide a valid email address.' }),
  favoriteVlogType: z.enum([
    'Road trip',
    'Food and culture',
    'Comedy and chaos',
    'Behind the scenes',
  ] as const, {
    errorMap: () => ({ message: 'Please select your favourite vlog format.' }),
  }),
  message: z
    .string()
    .max(500, { message: 'Message must be under 500 characters.' })
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must agree to receive fan-project demo updates to join.',
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
      favoriteVlogType: 'Road trip',
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
            particleCount: 100,
            spread: 70,
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
                  PASSENGER BOARDING LIST
                </span>

                <span className="flex items-center gap-1.5 text-xs font-mono text-cream-400">
                  <Database className="w-3.5 h-3.5 text-lime-accent" />
                  <span>{supabaseReady ? 'Cloud Supabase Active' : 'Demo Vault Ready'}</span>
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-cream-50 tracking-tight leading-tight">
                Your Name on the{' '}
                <span className="bg-gradient-to-r from-saffron-400 to-amber-300 bg-clip-text text-transparent">
                  Passenger List.
                </span>
              </h1>
              <p className="mt-3 text-cream-300 text-sm sm:text-base leading-relaxed">
                Get occasional updates, community drops, and first notice of what’s next. Unofficial fan club waitlist.
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
                          Seat Confirmed, Shotgun!
                        </h3>
                        <p className="text-xs font-mono text-lime-accent">
                          {submissionStatus.message}
                        </p>
                      </div>
                    </div>

                    {/* Digital Passenger Boarding Pass Ticket */}
                    {submissionStatus.ticketData && (
                      <div className="p-5 rounded-xl bg-charcoal-950/80 border border-white/10 font-mono text-xs space-y-3 relative overflow-hidden">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">PASSENGER:</span>
                          <span className="text-saffron-400 font-bold uppercase">
                            {submissionStatus.ticketData.fullName}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">DISPATCH EMAIL:</span>
                          <span className="text-cream-200">
                            {submissionStatus.ticketData.email}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-cream-400">FAVOURITE TRIP:</span>
                          <span className="text-lime-accent">
                            {submissionStatus.ticketData.favoriteVlogType}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-cream-400 pt-1">
                          <span>BOARDING PASS NO: #SIDHU-{Math.floor(1000 + Math.random() * 9000)}</span>
                          <span className="text-saffron-400">UNOFFICIAL FAN PASS</span>
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
                      Register Another Passenger
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
                      Full Name <span className="text-saffron-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Gurpreet Singh or Rhea Roy"
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
                      placeholder="e.g. roadtrip.lover@example.com"
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
                      Favourite Kind of Vlog <span className="text-saffron-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="favoriteVlogType"
                        {...register('favoriteVlogType')}
                        aria-invalid={errors.favoriteVlogType ? 'true' : 'false'}
                        aria-describedby={errors.favoriteVlogType ? 'vlogType-error' : undefined}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/15 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-saffron-500 appearance-none pr-10 cursor-pointer"
                      >
                        <option value="Road trip">Road trip</option>
                        <option value="Food and culture">Food and culture</option>
                        <option value="Comedy and chaos">Comedy and chaos</option>
                        <option value="Behind the scenes">Behind the scenes</option>
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
                        Note to the Crew (Optional)
                      </label>
                      <span className="text-[11px] font-mono text-cream-400">Max 500 chars</span>
                    </div>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share your favourite highway, dhaba recommendation, or detour memory..."
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
                          (Academic demonstration, no real commercial spam)
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
                      {isSubmitting ? 'Confirming Passenger Seat...' : 'Claim Your Passenger Seat'}
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
                <span>Evaluator Vault ({localEntries.length} demo submissions recorded)</span>
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

        {/* RIGHT COLUMN: CINEMATIC COMMUNITY VISUAL & VIBE PANEL */}
        <div className="lg:col-span-5 space-y-6">
          {/* Passenger Lounge Card */}
          <div className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-white/10 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
                <Radio className="w-5 h-5 animate-pulse text-lime-accent" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-saffron-400">
                  CREW RADAR FREQUENCY
                </span>
                <h3 className="font-display font-bold text-lg text-cream-50">
                  Shotgun Seat Privileges
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                {
                  title: 'First Word on Detours',
                  desc: 'Get route teasers and behind-the-scenes road notes before video public releases.',
                },
                {
                  title: 'Community Route Votes',
                  desc: 'Help pick future dhaba stops, highway routes, and exploration challenges.',
                },
                {
                  title: 'The Unfiltered Road Vibe',
                  desc: 'A non-commercial space celebrating genuine friendship, humor, and road travel.',
                },
              ].map((perk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-charcoal-950 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-lime-accent text-xs font-mono">
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
                RLS Guarded
              </span>
              <span>EST. TRIP TIME: NOW</span>
            </div>
          </div>

          {/* Simulated Audio Spectrum / Road Quote Card */}
          <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-cream-400">
              <span className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-saffron-400" />
                AUDIO LOG #ROAD-2026
              </span>
              <span className="text-lime-accent">320 KBPS HIGHWAY MIX</span>
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

            <p className="text-xs text-cream-300 italic font-serif leading-relaxed">
              “The best journeys don’t have an itinerary. You pack the car, bring the right crew, and let the state highways surprise you.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
