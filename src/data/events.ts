import type { ChapterEvent } from '../types';

export const CHAPTER_EVENTS: ChapterEvent[] = [
  {
    id: 'event-1',
    title: 'Dynamic Programming & Memoization Deep Dive',
    category: 'Workshop',
    date: 'Wednesday, Oct 14, 2026',
    time: '4:30 PM – 6:30 PM AST',
    location: 'Faculty of Computer Science, Lab B-204',
    instructor: 'Ahmad Al-Mansoor (ICPC Finalist)',
    description: 'A hands-on algorithmic workshop covering 1D/2D dynamic programming, state compression, and optimization strategies for contest environments.',
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: 'event-2',
    title: 'IU Collegiate Code Sprint 2026: Qualifying Round',
    category: 'Contest',
    date: 'Saturday, Oct 24, 2026',
    time: '2:00 PM – 7:00 PM AST',
    location: 'Central University Computing Center & Online',
    instructor: 'Competitive Programming Advisory Team',
    description: 'The official qualifying round for students seeking to represent Islamic University of Madinah in regional collegiate programming leagues.',
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: 'event-3',
    title: 'Architecting Scalable Microservices with Go & gRPC',
    category: 'Workshop',
    date: 'Tuesday, Nov 03, 2026',
    time: '5:00 PM – 7:00 PM AST',
    location: 'College of Computing Hall, Lecture Room 102',
    instructor: 'Tariq Al-Harbi (Backend Lead)',
    description: 'Explore high-throughput systems, binary wire protocols, asynchronous queues, and automated Docker orchestration in modern backend architecture.',
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: 'event-4',
    title: 'Fine-Tuning Transformer LLMs on Arabic Datasets',
    category: 'Seminar',
    date: 'Thursday, Nov 12, 2026',
    time: '6:00 PM – 8:00 PM AST',
    location: 'Main University Auditorium & Live Stream',
    instructor: 'Dr. Ziyad & AI Research Cohort',
    description: 'An interactive seminar breaking down recent advances in multilingual foundation models, parameter-efficient fine-tuning (LoRA), and Arabic tokenizers.',
    isUpcoming: true,
    registrationOpen: false
  },
  {
    id: 'event-5',
    title: 'Capture The Flag (CTF): Binary Exploitation Sprint',
    category: 'Contest',
    date: 'Friday, Nov 27, 2026',
    time: '3:00 PM – 9:00 PM AST',
    location: 'Cybersecurity Sandbox Lab 03',
    instructor: 'Cybersecurity Interest Group',
    description: 'A 6-hour intense security drill testing reverse engineering, stack-based buffer overflows, web exploit vectors, and cryptographic challenges.',
    isUpcoming: true,
    registrationOpen: false
  },
  {
    id: 'event-6',
    title: 'IU ACM Annual Hackathon: Tech for Madinah',
    category: 'Hackathon',
    date: 'Dec 18 – 20, 2026',
    time: '48 Hours Non-Stop',
    location: 'Innovation & Entrepreneurship Hub',
    instructor: 'Chapter Organizing Committee & Sponsors',
    description: 'A 48-hour collaborative building weekend focused on smart city solutions, educational tech, and accessibility innovations for the holy city of Madinah.',
    isUpcoming: true,
    registrationOpen: false
  }
];
