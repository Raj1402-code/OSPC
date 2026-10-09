import { Milestone, VlogMoment, VibeFeature } from '../types';

export interface SquadMember {
  id: string;
  name: string;
  tamilName: string;
  role: string;
  tagline: string;
  bio: string;
  badge: string;
  favoriteFood: string;
}

export const SQUAD_MEMBERS: SquadMember[] = [
  {
    id: 'vj-siddhu',
    name: 'VJ Siddhu',
    tamilName: 'விஜே சித்து',
    role: 'The Captain & Storyteller',
    tagline: 'High energy, infectious laughter, spontaneous road captain',
    bio: 'From Fun Panrom roots to steering Tamil YouTube’s most beloved travel squad. Never misses a roadside tea stall or a chance to pull Harshath’s leg.',
    badge: 'CAPTAIN',
    favoriteFood: 'Madurai Kari Dosa & Jigarthanda'
  },
  {
    id: 'harshath-khan',
    name: 'Harshath Khan',
    tamilName: 'ஹர்ஷத் கான்',
    role: 'The Counter King & Mimicry Star',
    tagline: 'Instant counters, multi-voice mimicry, the ultimate partner-in-crime',
    bio: 'The soul of every laugh. When Siddhu sets up a serious vlog monologue, Harshath drops one counter dialogue that sends the entire car into uncontrollable giggles.',
    badge: 'COUNTER KING',
    favoriteFood: 'Tirunelveli Halwa & Bun Parotta'
  },
  {
    id: 'adirchi-arun',
    name: 'Adirchi Arun',
    tamilName: 'அதிர்ச்சி அருண்',
    role: 'The Chaos Specialist',
    tagline: 'Unfiltered reactions, high octane hype, fearless street energy',
    bio: 'Brings raw street-smart enthusiasm to every village feast, temple festival, and tricky mountain hairpin bend. You hear him before you see him.',
    badge: 'CHAOS MAESTRO',
    favoriteFood: 'Tuticorin Salt-pan Parotta'
  },
  {
    id: 'sheriff-crew',
    name: 'Sheriff & The Camera Boys',
    tamilName: 'ஷெரிப் & டீம்',
    role: 'Behind the Lens (Accidental Main Characters)',
    tagline: 'Holding the gimbal while wheezing from laughter',
    bio: 'Supposed to stay behind the camera, but Siddhu’s unscripted questions constantly pull them into the frame to taste spicy curries and share honest opinions.',
    badge: 'CREW CAM',
    favoriteFood: 'Village Style Country Chicken Gravy'
  }
];

export const VIBE_FEATURES: VibeFeature[] = [
  {
    id: 'fun-panrom-humor',
    title: 'Fun Panrom Counters',
    subtitle: 'Machi Banter & Zero Scripts (பன் பண்றோம்)',
    description:
      'No scripted dialogues or PR filters. Just Siddhu and Harshath exchanging rapid-fire counters, playful insults, and uncontrollable wheezing in the front seat.',
    iconName: 'Flame',
    badge: '01 / HUMOR',
    accentColor: 'from-orange-500/20 to-amber-500/10'
  },
  {
    id: 'therku-seemai-nativity',
    title: 'Therku Seemai Nativity',
    subtitle: 'Deep Tamil Roots & Village Warmth (தெற்கு சீமை)',
    description:
      'From Madurai Meenakshi corridors to Tirunelveli Thamirabarani banks and Tuticorin coasts—celebrating the raw hospitality, rustic dialect, and heritage of Southern Tamil Nadu.',
    iconName: 'Compass',
    badge: '02 / NATIVITY',
    accentColor: 'from-lime-500/20 to-emerald-500/10'
  },
  {
    id: 'the-6m-sidhu-army',
    title: '6M+ Namma Gang',
    subtitle: 'Family at Every Toll Plaza & Village Corner',
    description:
      'Not just viewers watching a screen. Whether it is college students at highway dhabas, grandmothers serving idlis, or the massive 6 Million Virunthu feast—it is pure family love.',
    iconName: 'Users',
    badge: '03 / NAMMA CREW',
    accentColor: 'from-amber-500/20 to-orange-500/10'
  }
];

export const FEATURED_MOMENTS: VlogMoment[] = [
  {
    id: 'therku-seemai-expedition',
    title: 'Therku Seemai: The Village Virunthu & Clay Pot Mutton',
    category: 'Therku Seemai Series',
    duration: '28:45',
    thumbnailGradient: 'from-amber-950 via-stone-900 to-black',
    image: '/therku-seemai-feast.jpg',
    teaser: 'Traveling deep into Southern Tamil Nadu villages for wood-fired clay pot country chicken, crispy parotta, and heartfelt village grandma stories.',
    notes: [
      'Authentic Tirunelveli and Madurai village culinary trail',
      'Harshath tries grinding masala on traditional stone aattukal',
      'Surprise village gathering with over 200 local fans greeting Siddhu'
    ],
    location: 'Tirunelveli Rural Circuit, Tamil Nadu',
    quote: '"Namma Ooru sapadu mari ulagathula engayume kedaikadhu machi! (Nothing beats our village feast anywhere in the world!)"'
  },
  {
    id: 'kodaikanal-midnight-breakdown',
    title: 'Kodaikanal Ghats: Midnight Puncture & Ghost Stories',
    category: 'Hill Station Road Trip',
    duration: '32:10',
    thumbnailGradient: 'from-slate-900 via-neutral-900 to-amber-950/70',
    image: '/siddhu-roadtrip.jpg',
    teaser: 'Freezing cold at 2:00 AM on the 18-hairpin bend ghat road, shivering while changing a tyre, accompanied by Harshath’s terrifying ghost voice mimicry.',
    notes: [
      'Thick fog past Batlagundu checkpoint with zero road visibility',
      'Car overheating near Silver Cascade falls',
      'Hot piping masala tea and pepper eggs cooked on a road-edge cart'
    ],
    location: 'Kodaikanal Ghat Road, Tamil Nadu',
    quote: '"Bayam irukku da, aana indha shivering-la Harshath panra comedy-la sirichi sirichi vayiru valikudhu!"'
  },
  {
    id: 'madurai-food-hunt-chaos',
    title: 'Madurai 4:00 AM Midnight Kari Dosa & Jigarthanda Hunt',
    category: 'Food Trail Chaos',
    duration: '22:30',
    thumbnailGradient: 'from-zinc-900 via-stone-900 to-lime-950/40',
    image: '/therku-seemai-feast.jpg',
    teaser: 'Siddhu, Harshath, and Arun hit Madurai streets at dawn hunting for crispy Bun Parotta, spicy mutton chukka, and chilling special Jigarthanda.',
    notes: [
      'Unstoppable banter with parotta master tossing dough mid-air',
      'Arun eats the spiciest mutton gravy challenge and regrets immediately',
      'Early morning street vibes and auto driver brotherly talks'
    ],
    location: 'Simmakkal & Munichalai, Madurai',
    quote: '"Madurai parotta-va pichi pottu salna oothuna... andha smell-laye aal gaali!"'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'milestone-1',
    year: 'Phase 01',
    title: 'Fun Panrom & Street Mic Roots',
    tagline: 'No studio, cheap mic, raw street public prank interviews.',
    description:
      'Siddhu and Harshath on Chennai streets with handheld microphones, discovering their unmatched comic timing and natural rapport with ordinary people on the road.',
    location: 'Chennai Street Hubs & Fun Panrom Days',
    highlightStat: 'The Beginning',
    tags: ['Fun Panrom', 'Street Comedy', 'Harshath & Siddhu Duo']
  },
  {
    id: 'milestone-2',
    year: 'Phase 02',
    title: 'Starting VJ Siddhu Vlogs',
    tagline: 'Taking the camera out of the city and onto the highway.',
    description:
      'Launching the personal vlog channel. First road trips, tempo traveler journeys, budget lodge stays, and capturing the genuine warmth of everyday Tamil life.',
    location: 'Tamil Nadu State Highways & Hill Towns',
    highlightStat: '1 Million Family',
    tags: ['Budget Road Trips', 'First Vlogs', 'Machi Gang']
  },
  {
    id: 'milestone-3',
    year: 'Phase 03',
    title: 'The "Therku Seemai" Phenomenon',
    tagline: 'Connecting with the deep roots, culture, and cuisine of South Tamil Nadu.',
    description:
      'The landmark Therku Seemai series kicked off. Exploring rural villages, temple car festivals, heritage foods, and honoring unsung village culinary legends with heartfelt love.',
    location: 'Madurai, Tirunelveli, Tuticorin, Tenkasi',
    highlightStat: 'Therku Seemai Series',
    tags: ['Therku Seemai', 'Village Nativity', 'Parotta Trail']
  },
  {
    id: 'milestone-4',
    year: 'Phase 04',
    title: 'The 6 Million Virunthu Celebration',
    tagline: 'Feeding thousands of subscribers on traditional banana leaves.',
    description:
      'Crossing 6 Million subscribers wasn’t marked by a luxury studio party—it was celebrated with a massive, open-ground community feast where Siddhu and the team personally served fans.',
    location: 'Open Ground Virunthu Ground, Tamil Nadu',
    highlightStat: '6M+ Subscriber Milestone',
    tags: ['6M Virunthu', 'Banana Leaf Feast', 'Namma Makkal']
  },
  {
    id: 'milestone-5',
    year: 'Phase 05',
    title: 'Silver Screen Crossover & The Road Ahead',
    tagline: 'Making waves in Tamil cinema while keeping the vlog camera rolling.',
    description:
      'Siddhu and Harshath transitioning into acting roles in Kollywood feature films, proving that grassroots internet talent can conquer the silver screen without losing their grounded authenticity.',
    location: 'Kollywood Studios to Open Highways',
    highlightStat: 'Big Screen & Beyond',
    tags: ['Cinema Crossover', 'Uncharted Detours', 'Forever Namma Gang']
  }
];

export const AUDIENCE_THEMES = [
  {
    title: 'Unscripted Counter Comedy',
    description: 'Instant banter between Siddhu, Harshath Khan, and Adirchi Arun that feels like hanging out with your college hostel best friends.',
    icon: 'Sparkles',
    highlight: 'Fun Panrom DNA'
  },
  {
    title: 'Therku Seemai Nativity',
    description: 'Deep love for South Tamil Nadu traditions, dialect, temple towns, roadside parotta stalls, and down-to-earth village people.',
    icon: 'Compass',
    highlight: 'Pure Nativity'
  },
  {
    title: 'Relatable Common Man Travel',
    description: 'No luxury yacht lifestyle. Broken wipers, sharing one room in Kodaikanal, roadside tea cups, and finding bliss in simple moments.',
    icon: 'ShieldCheck',
    highlight: 'Zero Show-off'
  },
  {
    title: 'Brotherhood & Community',
    description: 'Treating fans not like numbers, but like real brothers and sisters ("Namma Makkal") at every petrol bunk, toll booth, and virunthu.',
    icon: 'HeartHandshake',
    highlight: 'Family Bonding'
  }
];

export const CELEBRATORY_STATS = [
  { label: 'YouTube Subscriber Family', value: 6400000, suffix: '+', note: 'Namma Sidhu Crew' },
  { label: 'Therku Seemai & Road Episodes', value: 350, suffix: '+', note: 'Unfiltered Tamil Vlogs' },
  { label: 'Banana Leaf Virunthu Servings', value: 15000, suffix: '+', note: 'Feast for Community' },
  { label: 'Pure Fun Panrom Energy', value: 100, suffix: '%', note: 'Zero Script Guarantee' },
];
