import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, MessageSquare, Heart, ShieldAlert, Sparkles } from 'lucide-react';

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
              <img
                src="/channel-1.jpeg"
                alt="VJ Siddhu Vlogs Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-saffron-500 shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-cream-50 group-hover:text-saffron-400 transition-colors">
                  VJ SIDDHU <span className="text-saffron-500">/</span> VLOGS
                </span>
                <span className="text-xs font-mono text-lime-accent">
                  தெற்கு சீமை & பன் பண்றோம்
                </span>
              </div>
            </Link>

            <p className="text-cream-300/80 text-sm max-w-sm leading-relaxed">
              Celebrating the unfiltered comedy, road-trip banter, and Therku Seemai village nativity of VJ Siddhu, Harshath Khan, and the whole squad.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-lime-accent">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
              <span>STATUS: SQUAD ON THE ROAD • FUN PANROM</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream-100">
              Explore The Hub
            </h4>
            <ul className="space-y-2 text-sm text-cream-300/70 font-medium">
              <li>
                <Link to="/" className="hover:text-saffron-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-saffron-400 transition-colors">
                  Squad Journey Timeline
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-saffron-400 transition-colors">
                  Join Namma Crew List
                </Link>
              </li>
              <li>
                <a
                  href="#squad"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Meet The Gang (Harshath, Arun, Siddhu)
                </a>
              </li>
              <li>
                <a
                  href="#moments"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Therku Seemai & Highlights
                </a>
              </li>
            </ul>
          </div>

          {/* Channel Channels & Fan Tribute Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-cream-100">
              Official Siddhu Vlogs Channels
            </h4>
            <p className="text-xs text-cream-400 leading-relaxed">
              Official links to watch real episodes on YouTube and follow behind-the-scenes stories on Instagram.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { name: 'YouTube (@VjSiddhuVlog)', icon: Youtube, href: 'https://www.youtube.com/@VjSiddhuVlog' },
                { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/vj_siddhu' },
                { name: 'Community', icon: MessageSquare, href: '#squad' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-charcoal-900 border border-white/10 hover:border-saffron-500/40 hover:bg-charcoal-800 text-cream-200 hover:text-saffron-400 transition-all text-xs font-medium"
                >
                  <item.icon className="w-4 h-4 text-saffron-400" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-charcoal-900 border border-white/10 text-cream-300 font-mono">
                <Heart className="w-3 h-3 text-saffron-500" />
                Created with love by a fan for college project
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
                Academic Project & Unofficial Fan Disclaimer:
              </span>
              This website is an unofficial, non-commercial fan tribute developed strictly for a college academic assignment. It is created by an admirer of VJ Siddhu Vlogs and is not officially affiliated with, endorsed by, or managed by VJ Siddhu, Harshath Khan, or DIVO.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400 font-mono pt-2 gap-2">
            <div>
              © 2026 VJ SIDDHU VLOGS FAN HUB • College Web Development Project
            </div>
            <div className="flex items-center gap-4">
              <span>Therku Seemai</span>
              <span>•</span>
              <span>Fun Panrom</span>
              <span>•</span>
              <span>6M+ Namma Gang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
