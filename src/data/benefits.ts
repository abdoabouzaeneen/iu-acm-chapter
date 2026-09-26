import { Award, BookOpenCheck, Network, TerminalSquare, Rocket, Sparkles } from 'lucide-react';
import type { BenefitItem } from '../types';

export const CHAPTER_BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Global ACM Association Affiliation',
    description: 'Connect directly to the world’s largest educational and scientific computing society, including digital publications, conferences, and technical interest groups.',
    tag: 'ACM Global',
    icon: Award
  },
  {
    id: 'benefit-2',
    title: 'ICPC & Collegiate Contest Pathways',
    description: 'Get sponsored entry and high-intensity coaching for Saudi CPC, Arab Collegiate Contests, and international algorithmic challenges.',
    tag: 'Contest Prep',
    icon: TerminalSquare
  },
  {
    id: 'benefit-3',
    title: 'Production Software Portfolio',
    description: 'Collaborate on tangible open-source systems and chapter platforms used by real students, giving your CV standout technical credibility.',
    tag: 'Hands-on Code',
    icon: Rocket
  },
  {
    id: 'benefit-4',
    title: 'Senior Peer & Alumni Mentorship',
    description: 'Direct 1-on-1 guidance from seniors and alumni working at top tech firms, offering code reviews, mock technical screens, and career navigation.',
    tag: 'Mentorship',
    icon: Network
  },
  {
    id: 'benefit-5',
    title: 'Structured Research Reading Groups',
    description: 'Dissect groundbreaking papers in neural networks, distributed consensus, and cryptography alongside fellow motivated student researchers.',
    tag: 'Research',
    icon: BookOpenCheck
  },
  {
    id: 'benefit-6',
    title: 'Leadership & Committee Roles',
    description: 'Grow beyond coding by leading technical committees, organizing 200+ attendee hackathons, and developing executive leadership skills.',
    tag: 'Leadership',
    icon: Sparkles
  }
];
