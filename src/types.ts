export type VlogType = 
  | 'Road trip'
  | 'Food and culture'
  | 'Comedy and chaos'
  | 'Behind the scenes';

export interface Milestone {
  id: string;
  year: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  highlightStat: string;
  tags: string[];
}

export interface VlogMoment {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnailGradient: string;
  teaser: string;
  notes: string[];
  location: string;
  quote: string;
}

export interface VibeFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Compass' | 'Flame' | 'Users';
  badge: string;
  accentColor: string;
}

export interface WaitlistFormData {
  fullName: string;
  email: string;
  favoriteVlogType: VlogType;
  message?: string;
  consent: boolean;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}
