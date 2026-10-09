import { Milestone, VlogMoment, VibeFeature } from '../types';

export const VIBE_FEATURES: VibeFeature[] = [
  {
    id: 'road-stories',
    title: 'Road Stories',
    subtitle: 'Unscripted Highways & Midnight Detours',
    description:
      'No rigid scripts or studio lighting. Just packed boots, unfamiliar state highways, misty morning ghats, and the raw thrill of getting delightfully lost before sunrise.',
    iconName: 'Compass',
    badge: '01 / JOURNEY',
    accentColor: 'from-orange-500/20 to-amber-500/10'
  },
  {
    id: 'real-reactions',
    title: 'Real Reactions',
    subtitle: 'Honest Chaos & Zero Filters',
    description:
      'From unexpected flat tyres and fiery roadside dhabas to uncontrollable laughter at missed turns—capturing genuine human reactions in their purest, unpolished format.',
    iconName: 'Flame',
    badge: '02 / UNFILTERED',
    accentColor: 'from-lime-500/20 to-emerald-500/10'
  },
  {
    id: 'sidhu-community',
    title: 'The Sidhu Community',
    subtitle: 'Not Just Viewers. The Crew.',
    description:
      'A brotherhood of travellers, dreamers, and night-owls riding shotgun through the screen. Comment section banter that feels like sitting together around a roadside tea stall.',
    iconName: 'Users',
    badge: '03 / TRIBE',
    accentColor: 'from-amber-500/20 to-orange-500/10'
  }
];

export const FEATURED_MOMENTS: VlogMoment[] = [
  {
    id: 'monsoon-ghats',
    title: 'Foggy Ghats & The Lost Highway',
    category: 'Monsoon Expedition',
    duration: '24:18',
    thumbnailGradient: 'from-slate-900 via-stone-800 to-amber-950/60',
    teaser: 'Traversing the cloud-drenched Western Ghats in pouring rain, searching for a legendary 40-year-old cutting chai stall.',
    notes: [
      'Zero visibility past 1,800m elevation',
      'Windshield wiper malfunction at midnight',
      'Warm ginger chai served on a banana leaf'
    ],
    location: 'Western Ghats Ridge, Mile 142',
    quote: '"When the fog gets this thick, you stop driving by eyes and start driving by gut feeling."'
  },
  {
    id: 'jaisalmer-midnight',
    title: '3:00 AM Engine Stall in the Dunes',
    category: 'Desert Chaos',
    duration: '31:05',
    thumbnailGradient: 'from-stone-900 via-amber-950/80 to-orange-950/40',
    teaser: 'When the modified SUV coughs and stalls in the middle of Thar sand tracks under a brilliant blanket of stars.',
    notes: [
      'Radiator overheating after steep sand ridge climbs',
      'Fixing fuel lines with duct tape & pocket multitool',
      'Starry campfire meal cooked on an inverted shovel'
    ],
    location: 'Thar Desert Border Tracks',
    quote: '"The breakdown isn’t an interruption. The breakdown is where the real story starts."'
  },
  {
    id: 'dhaba-hunt',
    title: 'The Secret Highway Dhaba at Dawn',
    category: 'Culinary Detour',
    duration: '19:42',
    thumbnailGradient: 'from-zinc-900 via-neutral-800 to-lime-950/40',
    teaser: 'Truck drivers whispered about a clay tandoor behind an old banyan tree. We followed tyre tracks for 18 kilometers off the toll road.',
    notes: [
      'Wood-fired parathas with fresh white butter',
      'Hearty banter with long-haul truck captains',
      'Sunrise painted the mustard fields golden'
    ],
    location: 'National Highway 44 Junction',
    quote: '"The best food in this country is never on a Google map. It is behind a dusty truck parking lot."'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'milestone-1',
    year: 'Chapter 01',
    title: 'First Upload & The Shaky Mount',
    tagline: 'Cheap microphone, second-hand hatchback, unlimited ambition.',
    description:
      'A shaky phone mount clamped to a sun visor, awkward monologue attempts at traffic signals, and 12 views from cousins. The start of an unscripted road addiction.',
    location: 'Hometown City Ring Road',
    highlightStat: '1st Upload',
    tags: ['Raw Beginnings', 'Hatchback Vlogs', 'Vintage Audio']
  },
  {
    id: 'milestone-2',
    year: 'Chapter 02',
    title: 'Finding the Road & The Chai Circuit',
    tagline: 'Leaving city traffic behind for winding mountain passes.',
    description:
      'Realizing that the best conversations happen at tiny roadside tea stalls when the engine is cooling down. The signature chill road-trip storytelling rhythm was born.',
    location: 'Southern Hill Corridors',
    highlightStat: '5,000+ KMs',
    tags: ['Cutting Chai', 'Spontaneous Detours', 'Foggy Climbs']
  },
  {
    id: 'milestone-3',
    year: 'Chapter 03',
    title: 'Building The Sidhu Crew',
    tagline: 'When viewers turned into a passionate passenger fraternity.',
    description:
      'Comments began dictating routes. Viewers started spotting the car at highway tolls, handing over home-cooked snacks, and honking with genuine warmth across states.',
    location: 'Cross-State Borders',
    highlightStat: '50K Passenger Family',
    tags: ['Community Meets', 'Toll Booth Waves', 'Passenger Seat Banter']
  },
  {
    id: 'milestone-4',
    year: 'Chapter 04',
    title: 'Bigger Horizons & High Altitude Chaos',
    tagline: 'Testing suspension, courage, and cameras on treacherous passes.',
    description:
      'From sub-zero Himalayan mountain passes to blistering desert trails. High-stakes road trips where equipment froze, tyres punctured, and camaraderie peaked.',
    location: 'Himalayan Ridge & Desert Trails',
    highlightStat: '18,000ft Altitude',
    tags: ['Extreme Terrains', 'Campfire Nights', 'Border Highways']
  },
  {
    id: 'milestone-5',
    year: 'Chapter 05',
    title: 'What Comes Next: Uncharted Detours',
    tagline: 'The road never ends; it just turns into a different state of mind.',
    description:
      'New rigs, cross-country journeys, and international road circuits on the drawing board. One constant remains: honest storytelling and the passenger list ride along.',
    location: 'Every Upcoming State Line',
    highlightStat: 'Forever Exploring',
    tags: ['Next Phase', 'Community Drops', 'Uncharted Roads']
  }
];

export const AUDIENCE_THEMES = [
  {
    title: 'Raw Travel & Open Highways',
    description: 'No sterile tourist guides. Real routes, road conditions, toll booth realities, and the scent of rain on dry tarmac.',
    icon: 'Compass',
    highlight: 'Pure Journey'
  },
  {
    title: 'Spontaneous Humour',
    description: 'Unplanned jokes, witty passenger-seat banter, and finding uncontrollable laughs even when stranded with a flat tyre.',
    icon: 'Sparkles',
    highlight: 'Zero Pretence'
  },
  {
    title: 'Uncompromised Authenticity',
    description: 'If the food was bad, you hear it. If the road was terrible, you feel every bump. Transparent, grounded creator ethos.',
    icon: 'ShieldCheck',
    highlight: '100% Real'
  },
  {
    title: 'The Passenger Feeling',
    description: 'You are never just a viewer looking through a glass; you feel like you are sitting shotgun with the window rolled half down.',
    icon: 'HeartHandshake',
    highlight: 'Shared Ride'
  }
];

export const CELEBRATORY_STATS = [
  { label: 'Highways & Byways Traversed', value: 48500, suffix: '+ km', note: 'Fan-inspired estimate' },
  { label: 'Unscripted Stories Shared', value: 240, suffix: '+', note: 'Celebrated vlog moments' },
  { label: 'Roadside Chai Stops', value: 1420, suffix: '+ cups', note: 'Fuel for the detours' },
  { label: 'Crew Energy Rating', value: 100, suffix: '%', note: 'Passenger brotherhood' },
];
