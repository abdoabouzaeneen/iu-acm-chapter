import { Code2, BrainCircuit, Cpu } from 'lucide-react';
import type { TechnicalTeam } from '../types';

export const TECHNICAL_TEAMS: TechnicalTeam[] = [
  {
    id: 'cp',
    title: 'Competitive Programming Team',
    shortName: 'CP Team',
    category: 'Technical Committee // Algorithms & Problem Solving',
    codeSnippet: '<CompetitiveProgramming team="cp_core" />',
    icon: Code2,
    description: 'Mastering algorithms, data structures, and rigorous problem-solving to excel in collegiate contests and competitive coding platforms.',
    skills: [
      'C++ 20 / STL',
      'Advanced Data Structures',
      'Dynamic Programming & State Optimization',
      'Graph Algorithms & Trees',
      'ICPC & Saudi CPC Contest Strategy'
    ],
    coordinators: 'Technical Committee & ICPC Finalists',
    features: [
      'Weekly timed problem sets on Codeforces & VJudge platforms',
      'Post-contest algorithmic upsolving and solution analysis sessions',
      'Rigorous preparation sprints for the Saudi Collegiate Programming Contest (SCPC)',
      'Peer-led algorithmic clinics covering mathematics and computational geometry'
    ]
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence Team',
    shortName: 'AI Team',
    category: 'Technical Committee // Machine Intelligence & Data',
    codeSnippet: '<ArtificialIntelligence model="transformer_arch" />',
    icon: BrainCircuit,
    description: 'Exploring machine learning theory, modern deep learning architectures, and collaborative data science projects.',
    skills: [
      'Python & PyTorch',
      'Modern Transformer Architectures',
      'Arabic Natural Language Processing (NLP)',
      'Computer Vision & Convolutional Nets',
      'Data Pipelines & Hugging Face'
    ],
    coordinators: 'Technical Committee & AI Student Researchers',
    features: [
      'Hands-on machine learning implementation sprints and Kaggle challenges',
      'Applied projects focused on Arabic NLP and multilingual LLMs',
      'Seminal research paper reading circles and architecture reproductions',
      'Model fine-tuning and deployment pipelines using modern tools'
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics Team',
    shortName: 'Robotics Team',
    category: 'Technical Committee // Embedded Systems & Hardware',
    codeSnippet: '<Robotics team="embedded_systems" />',
    icon: Cpu,
    description: 'Bridging software logic with physical systems through microcontrollers, sensor arrays, and embedded hardware development.',
    skills: [
      'C / Embedded C',
      'Microcontrollers (ESP32, STM32, Arduino)',
      'Sensor Arrays & Signal Processing',
      'Robot Operating System (ROS 2)',
      'Circuit Design & Hardware Interfacing'
    ],
    coordinators: 'Technical Committee & Embedded Leads',
    features: [
      'Hands-on lab builds integrating microcontrollers and physical sensors',
      'Autonomous robotics navigation and real-time telemetry projects',
      'Embedded hardware prototyping from schematics to working firmware',
      'Interfacing physical sensors with higher-level software algorithms'
    ]
  }
];

// For backward compatibility and semantic clarity across components
export const TECHNICAL_TRACKS = TECHNICAL_TEAMS;
