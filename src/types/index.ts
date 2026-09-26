import type { LucideIcon } from 'lucide-react';

export interface TechnicalTeam {
  id: string;
  title: string;
  shortName: string;
  codeSnippet: string;
  category: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  coordinators: string;
  features: string[];
}

export interface Committee {
  id: string;
  name: string;
  code: string;
  icon: LucideIcon;
  description: string;
  responsibilities: string[];
  subTeams?: string[];
}

export interface ChapterEvent {
  id: string;
  title: string;
  category: 'Workshop' | 'Contest' | 'Seminar' | 'Hackathon';
  date: string;
  time: string;
  location: string;
  instructor: string;
  description: string;
  isUpcoming: boolean;
  registrationOpen: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Committees' | 'Teams' | 'Membership';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
}

export interface ChapterStat {
  value: string;
  label: string;
  description: string;
}
