import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Youtube, Instagram, Twitter, MessageSquare, Heart, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-charcoal-950 border-t border-white/10 text-cream-200 overflow-hidden pt-16 pb-12">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-saffron-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-cream-50 group-hover:text-saffron-400 transition-colors">
                VJ SIDHU <span className="text-saffron-500">/</span> VLOGS
              </span>
            </Link>

            <p className="text-cream-300/80 text-sm max-w-sm leading-relaxed">
              For the missed turns, the roadside chai, and the stories nobody planned. An unofficial tribute celebrating unscripted travel, comedy, and community spirit.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-lime-accent">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
              <span>STATUS: ENGINE RUNNING / DESTINATION UNKNOWN</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream-100">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream-300/70 font-medium">
              <li>
                <Link to="/" className="hover:text-saffron-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-saffron-400 transition-colors">
                  The Journey Timeline
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-saffron-400 transition-colors">
                  Join the Passenger List
                </Link>
              </li>
              <li>
                <a
                  href="#vibe"
                  className="hover:text-saffron-400 transition-colors"
                >
                  The Creator Vibe
                </a>
              </li>
              <li>
                <a
                  href="#moments"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Featured Moments
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream-100">
              Crew Channels
            </h4>
            <p className="text-xs text-cream-400 leading-relaxed">
              Fictional / safe creator links for demo purposes. Replace with verified community handles in production.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
                { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
                { name: 'X / Twitter', icon: Twitter, href: 'https://twitter.com' },
                { name: 'Discord', icon: MessageSquare, href: 'https://discord.com' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name} placeholder`}
                  className="p-2.5 rounded-xl bg-charcoal-900 border border-white/10 hover:border-saffron-500/40 hover:bg-charcoal-800 text-cream-200 hover:text-saffron-400 transition-all hover:scale-105"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-charcoal-900 border border-white/10 text-cream-300 font-mono">
                <Heart className="w-3 h-3 text-saffron-500" />
                Fan-curated with passion
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Academic Fan Project Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-cream-400">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-cream-200 block mb-0.5">
                Academic Assignment & Unofficial Fan Project Disclaimer:
              </span>
              This website is a non-commercial, fan-made college web development project celebrating the storytelling spirit of VJ Sidhu Vlogs. It is not an official site and is not affiliated with, sponsored by, or endorsed by VJ Sidhu or his representatives. All visuals and content are original, royalty-safe, or demonstrative placeholders.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400 font-mono pt-2 gap-2">
            <div>
              © 2026 VJ SIDHU VLOGS FAN HUB • College Web Development Project
            </div>
            <div className="flex items-center gap-4">
              <span>React 19 + Vite</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Supabase Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
