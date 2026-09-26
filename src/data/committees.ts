import { Users, Server, Palette, Code2, GraduationCap } from 'lucide-react';
import type { Committee } from '../types';

export const CHAPTER_COMMITTEES: Committee[] = [
  {
    id: 'executive',
    name: 'Executive Board',
    code: 'IU_ACM::ExecutiveBoard',
    icon: Users,
    description: 'The core appointed leadership team responsible for strategic vision, official university correspondence with the College of Computing and Information Systems, and overall chapter administration.',
    responsibilities: [
      'Strategic roadmap, budget allocation, and semester planning',
      'Official correspondence with university administration and CCIS Dean',
      'ACM international chapter compliance and annual reporting',
      'Chapter governance, institutional partnerships, and leadership oversight'
    ]
  },
  {
    id: 'development',
    name: 'Development & Infrastructure',
    code: 'IU_ACM::DevOpsInfra',
    icon: Server,
    description: "Responsible for developing, operating, and maintaining the chapter's technical infrastructure, web platforms, and automated developer tooling.",
    responsibilities: [
      'Building and maintaining the official IU ACM chapter web platform and services',
      'Managing internal development workflows, GitHub organization, and CI/CD pipelines',
      'Operating local contest judging mirrors, sandbox servers, and API systems',
      'Automating chapter administration tools, Discord bots, and databases'
    ]
  },
  {
    id: 'media',
    name: 'Media & Design',
    code: 'IU_ACM::MediaDesign',
    icon: Palette,
    description: "Tasked with developing the chapter's visual brand identity, managing digital communication channels, and documenting events and workshops.",
    responsibilities: [
      'Designing and evolving the chapter visual identity and design system',
      'Producing promotional artwork, event posters, and digital announcements',
      'Managing chapter social media presence and public relations across channels',
      'Capturing photography, video documentation, and workshop recap reels'
    ]
  },
  {
    id: 'advisory',
    name: 'Advisory & Mentorship',
    code: 'IU_ACM::AdvisoryMentorship',
    icon: GraduationCap,
    description: 'Dedicated to empowering students throughout their academic journey—from the Year 1 Common Year through graduation—with academic roadmaps, peer mentoring, and career direction.',
    responsibilities: [
      'Pairing senior mentors with 1st Year Common Year and college students',
      'Conducting academic orientation sessions, study plans, and research pathways',
      'Organizing career panels, resume workshops, and tech internship prep clinics',
      'Connecting student members with alumni in top tech companies and academia'
    ]
  },
  {
    id: 'technical',
    name: 'Technical Committee',
    code: 'IU_ACM::TechnicalCommittee',
    icon: Code2,
    description: 'Directs the core computer science and computing disciplines of the chapter, coordinating curriculum, workshops, and contest participation across our three dedicated teams.',
    subTeams: [
      'Competitive Programming Team',
      'Artificial Intelligence Team',
      'Robotics Team'
    ],
    responsibilities: [
      'Coordinating syllabus, contests, and bootcamps for the 3 specialized teams',
      'Mentoring students in algorithmic thinking and collegiate competition problem-solving',
      'Facilitating applied research reproduction and machine learning projects',
      'Organizing hands-on embedded systems and robotics laboratory sessions'
    ]
  }
];
