import { Code2, BrainCircuit, Cpu, Users, Server, Palette, GraduationCap, Award, BookOpenCheck, Network, TerminalSquare, Rocket, Sparkles } from 'lucide-react';
import type { Language } from './context';

export interface LocalizedTeam {
  id: string;
  title: string;
  shortName: string;
  category: string;
  codeSnippet: string;
  icon: typeof Code2;
  description: string;
  skills: string[];
  coordinators: string;
  features: string[];
}

export interface LocalizedCommittee {
  id: string;
  name: string;
  code: string;
  icon: typeof Users;
  description: string;
  responsibilities: string[];
  subTeams?: string[];
}

export interface LocalizedEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  instructor: string;
  description: string;
  isUpcoming: boolean;
  registrationOpen: boolean;
}

export interface LocalizedBenefit {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: typeof Award;
}

export interface LocalizedFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface LocalizedStat {
  value: string;
  label: string;
  description: string;
}

export const TRANSLATIONS = {
  en: {
    // Nav
    nav: {
      about: 'About',
      committees: 'Committees',
      teams: 'Technical Teams',
      events: 'Events & Contests',
      benefits: 'Benefits',
      faq: 'FAQ',
      joinChapter: 'Join Chapter',
      switchThemeLight: 'Switch to Light Mode',
      switchThemeDark: 'Switch to Dark Mode',
      languageLabel: 'العربية',
    },
    // Logo
    logo: {
      chapterTitle: 'IU ACM Chapter',
      universitySubtitle: 'Islamic University of Madinah',
    },
    // Hero
    hero: {
      officialBadge: 'Official Student Chapter',
      universityBadge: 'Islamic University of Madinah',
      headlinePrefix: 'Empowering Students to',
      headlineHighlight: 'Build The Future',
      phrases: [
        'Where Algorithmic Rigor Meets Academic Community.',
        'Competitive Programming, Artificial Intelligence & Robotics.',
        'Five Committees Driving Computing Excellence at IU Madinah.',
        'College of Computing & Information Systems • Welcoming All Colleges.',
      ],
      narrative:
        'Welcome to the official website of the Islamic University of Madinah ACM Student Chapter: A community of passionate Computer Science and Engineering students, driven by curiosity, code, and cutting-edge technology. We welcome students of all backgrounds, interests, and skill levels to join our community and share our love for technology.',
      joinBtn: 'Join The Chapter',
      exploreTeamsBtn: 'Explore Technical Teams',
      committeesBtn: 'Chapter Committees',
      badgeCommittees: '5 Core Committees',
      badgeTeams: '3 Technical Teams (CP, AI, Robotics)',
      badgeOpen: 'Open for All IU Students',
      ideFileName: 'IU_ACM_Chapter.ts',
      tabCode: 'Code',
      tabTerminal: 'Terminal (CLI)',
      tabOutput: 'Output',
      runCodeBtn: 'Run Code',
      copied: 'Copied',
      copy: 'Copy',
      readyToCompile: 'Ready for execution',
      terminalHint: 'Type commands or click quick chips below',
      terminalWelcome: 'Islamic University of Madinah ACM Chapter CLI [v2.4]',
      terminalHelpPrompt: "Type 'help' to view available commands, or click chips:",
      terminalChipHelp: 'help',
      terminalChipRun: 'run',
      terminalChipAbout: 'about',
      terminalChipTeams: 'teams',
      terminalChipCommittees: 'committees',
      terminalChipStats: 'stats',
      terminalChipJoin: 'join',
      terminalChipClear: 'clear',
    },
    // About
    about: {
      badge: 'About Our Chapter',
      titlePart1: 'Cultivating Excellence in',
      titlePart2: 'Computer Science',
      titlePart3: '& Beyond',
      subtitle:
        'Headquartered at the College of Computing and Information Systems, the IU ACM Chapter focuses deeply on computer science while warmly welcoming students from the Faculty of Engineering and across all university colleges.',
      paragraph1:
        'Founded to cultivate world-class computing talent, the Islamic University ACM Chapter creates an active ecosystem where students collaborate across technical borders. While primarily focused on computer science, algorithms, software systems, and AI, we welcome students from the Faculty of Engineering and every other college of the Islamic University of Madinah.',
      paragraph2:
        'Structured into 5 focused committees (including our dedicated Advisory & Mentorship Committee) and 3 technical teams (Competitive Programming, AI, and Robotics), we guide students from their 1st Year Common Year through four specialized college years.',
      bullets: [
        'Headquartered at the College of Computing and Information Systems (CCIS)',
        'Open to students from the Faculty of Engineering and all university colleges',
        'Structured mentorship from Year 1 Common Year through graduation',
        'Contest travel sponsorships and regional competition preparation',
      ],
      quoteTitle: '// CHAPTER_PHILOSOPHY',
      quoteBadge: 'CORE_VALUES',
      quote:
        '"We believe that true mastery of computing begins with deep algorithmic curiosity, relentless practice in problem-solving, and a generous spirit of peer mentorship."',
      quoteAuthor: 'Chapter Board',
      quoteAffiliation: 'College of Computing & Info Systems, IU',
      pillarPrefix: 'Pillar 0',
      pillars: [
        {
          title: 'Technical & Algorithmic Rigor',
          description:
            'Mastering foundational algorithms, data structures, and mathematical computing through competitive programming contests and deep problem-solving.',
        },
        {
          title: 'Collaborative Governance',
          description:
            'Empowered student leadership organized into 5 committees—Executive Board, Development & Infrastructure, Media & Design, Advisory & Mentorship, and Technical Committee.',
        },
        {
          title: 'Advisory & Mentorship',
          description:
            'Guiding cohorts through their 5 academic years, starting with the Year 1 Common Year foundation through specialized college courses and graduation.',
        },
        {
          title: 'Applied Computing & AI',
          description:
            'Bridging computer science theory with deep learning architectures, computer vision, autonomous robotics, and physical computing systems.',
        },
      ],
    },
    // Teams / Tracks
    teams: {
      badge: 'Technical Committee Cohorts',
      titlePrefix: 'Our 3 Specialized',
      titleHighlight: 'Teams',
      subtitle:
        'Operating under the Chapter’s Technical Committee, each team is dedicated to rigorous problem-solving, advanced research, and physical computing.',
      openBadge: 'Open for student membership across all levels',
      selectPrompt: '// Select a Technical Team',
      governanceTitle: 'Technical Committee Governance',
      governanceDesc:
        'All three teams share cross-disciplinary workshops, peer code reviews, and combined hackathons under the Technical Committee umbrella.',
      missionTitle: '// Team Mission & Scope',
      skillsTitle: '// Focus Competencies & Technologies',
      activitiesTitle: '// Team Activities & Projects',
      joinTeamPrefix: 'Join',
    },
    // Committees
    committees: {
      badge: 'Organizational Architecture',
      titlePrefix: 'Our 5 Core',
      titleHighlight: 'Committees',
      subtitle:
        'The Islamic University ACM Student Chapter is structured into five specialized committees driving leadership, technology, brand outreach, mentorship, and technical excellence.',
      noticeBadge: 'Open for all IU students across all colleges • Executive Board is appointed',
      housesTeamsBadge: 'Houses 3 Teams',
      appointedBadge: 'Appointed',
      subTeamsTitle: 'Specialized Teams Under Technical Committee:',
      mandatesTitle: 'Key Mandates & Responsibilities',
      officialBadge: 'Official IU ACM',
      executiveOnly: 'Executive appointment only',
      exploreTeams: 'Explore Teams',
      joinTeam: 'Join Team',
      joinCommittee: 'Join Committee',
    },
    // Marquee
    marquee: {
      badge: 'Chapter Statements & Vision',
      titlePart1: 'Our Creed •',
      titlePart2: 'One Community',
      titlePart3: 'Infinite Vision',
      subtitle:
        'A continuous pulse of computing excellence at the Islamic University of Madinah—connecting the College of Computing and Information Systems, the Faculty of Engineering, and all university cohorts.',
    },
    // Events
    events: {
      badge: 'Calendar & Tournaments',
      titlePrefix: 'Upcoming',
      titleHighlight: 'Events',
      titleSuffix: '& Contests',
      subtitle:
        'Sharpen your problem-solving abilities in collegiate code sprints, deep-dive algorithm workshops, and tech seminars.',
      filterAll: 'All',
      filterWorkshop: 'Workshop',
      filterContest: 'Contest',
      filterSeminar: 'Seminar',
      filterHackathon: 'Hackathon',
      rsvpOpen: 'RSVP Open',
      opensSoon: 'Opens Soon',
      rsvpConfirmed: 'RSVP Confirmed • See You There!',
      reserveSeat: 'Reserve Student Seat',
      earlyAccess: 'Join Chapter for Early Access',
    },
    // Benefits
    benefits: {
      badge: 'Member Value Proposition',
      titlePrefix: 'Why Join',
      titleHighlight: 'IU ACM Chapter',
      titleSuffix: '?',
      subtitle:
        'Gain the competitive engineering edge, build lifelong friendships with peers, and prepare for top-tier graduate studies and industry roles.',
      availableNote: 'Available to all members',
      ctaTitle: 'Take the first step toward collegiate mastery.',
      ctaSubtitle: 'Free registration for all students enrolled at the Islamic University of Madinah.',
      ctaButton: 'Register Now',
    },
    // FAQ
    faq: {
      badge: 'Frequently Asked Questions',
      titlePrefix: 'Got Questions?',
      titleHighlight: 'We’ve Got Answers',
      subtitle: 'Everything you need to know about joining and participating in chapter activities.',
      contactText: 'Still have questions? Reach out directly to our student coordinator at',
    },
    // CTA
    cta: {
      badge: 'Islamic University of Madinah • ACM Chapter Cohort',
      titlePart1: 'Ready to Accelerate Your',
      titleHighlight: 'Engineering',
      titlePart2: 'Journey?',
      subtitle:
        'Step into a community that challenges you to solve harder problems, write cleaner code, and build impactful technology alongside lifelong mentors.',
      applyBtn: 'Apply for Membership',
      githubBtn: 'Explore GitHub Repos',
      guarantee1: '100% Free for Islamic University Students',
      guarantee2: 'No previous contest experience required',
      guarantee3: 'Weekly workshops & lab sprints',
    },
    // Footer
    footer: {
      bio: 'The official ACM Student Chapter at the Islamic University of Madinah. Structured into 5 operational committees and 3 technical teams, cultivating world-class problem solving, AI, and computer science excellence.',
      committeesTitle: '5 Committees',
      teamsTitle: '3 Teams',
      linksTitle: 'Links',
      location: 'College of Computing & Information Systems, IU Madinah, KSA',
      copyright: 'Islamic University ACM Student Chapter. Crafted with',
      craftedBy: 'by Development & Infrastructure Committee.',
      paletteText: 'Brackets #2c5f85 • Typography #c49b57 • Pure Canvas #FFFFFF',
    },
    // Join Modal
    modal: {
      headerTitle: 'IU ACM Membership Application',
      openNote: '// Open to all Islamic University students across all faculties',
      formTitle: 'Student Member Registration',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. Tariq Al-Madani',
      emailLabel: 'University Email *',
      emailPlaceholder: 's123456@iu.edu.sa',
      facultyLabel: 'College / Faculty *',
      facultyHint: 'All IU university students are welcome to join.',
      facultyOptions: [
        { value: 'College of Computing and Information Systems', label: 'College of Computing and Information Systems (CCIS)' },
        { value: 'Faculty of Engineering', label: 'Faculty of Engineering' },
        { value: 'Faculty of Science', label: 'Faculty of Science' },
        { value: 'Other Islamic University Faculty', label: 'Other IU Faculty' },
      ],
      academicYearLabel: 'Academic Standing (5-Year Program) *',
      academicYearHint: 'Year 1 is Common Year, followed by 4 college years.',
      academicYearOptions: [
        { value: '1st Year - Common Year', label: '1st Year - Common Year (Preparatory Foundation)' },
        { value: '2nd Year (College Year 1)', label: '2nd Year (College Year 1)' },
        { value: '3rd Year (College Year 2)', label: '3rd Year (College Year 2)' },
        { value: '4th Year (College Year 3)', label: '4th Year (College Year 3)' },
        { value: '5th Year (Senior / Final Year)', label: '5th Year (Senior / Final Year)' },
        { value: "Graduate / Master's Student", label: "Graduate / Master's Student" },
      ],
      preferenceLabel: 'Preferred Team or Committee *',
      preferenceHint: 'Students can join any technical team or committee. (Executive Board is appointed and closed to direct application).',
      groupTeams: 'Technical Committee Teams (Open to all students)',
      groupCommittees: 'Chapter Committees (Open to all students)',
      profileLabel: 'GitHub / Codeforces / Portfolio Link',
      optional: '(Optional)',
      profilePlaceholder: 'https://github.com/your-username',
      statementLabel: 'What excites you about joining the chapter?',
      statementPlaceholder: 'Tell us about your interests in computer science, programming experience, or projects you want to build...',
      cancelBtn: 'Cancel',
      submitBtn: 'Submit Application',
      submittingBtn: 'Registering...',
      successTitle: 'Application Received!',
      successWelcomePrefix: 'Welcome to the cohort,',
      successLoggedPrefix: 'Your application for',
      successNextStepsTitle: 'Next Steps:',
      successNextSteps: [
        '1. Check your student inbox for orientation details.',
        '2. Connect with your team/committee leads on official chapter channels.',
        '3. Attend the upcoming chapter general assembly at the College of Computing.',
      ],
      doneBtn: 'Done & Return to Chapter Site',
    },
  },
  ar: {
    // Nav
    nav: {
      about: 'عن الشعبة',
      committees: 'اللجان',
      teams: 'الفرق التقنية',
      events: 'الفعاليات والمسابقات',
      benefits: 'المزايا والفرص',
      faq: 'الأسئلة الشائعة',
      joinChapter: 'انضم للشعبة',
      switchThemeLight: 'التبديل إلى الوضع الفاتح',
      switchThemeDark: 'التبديل إلى الوضع الداكن',
      languageLabel: 'English',
    },
    // Logo
    logo: {
      chapterTitle: 'شعبة ACM الطلابية',
      universitySubtitle: 'الجامعة الإسلامية بالمدينة المنورة',
    },
    // Hero
    hero: {
      officialBadge: 'الشعبة الطلابية الرسمية',
      universityBadge: 'الجامعة الإسلامية بالمدينة المنورة',
      headlinePrefix: 'تمكين الطلاب لـ',
      headlineHighlight: 'صناعة المستقبل',
      phrases: [
        'حيث تلتقي الرصانة الخوارزمية بالبيئة الأكاديمية الملهمة.',
        'البرمجة التنافسية، والذكاء الاصطناعي، وهندسة الروبوتات.',
        'خمس لجان تقود التميز الحاسوبي في الجامعة الإسلامية.',
        'كلية الحاسب الآلي ونظم المعلومات • نرحب بطلاب كافة الكليات.',
      ],
      narrative:
       'أهلاً بك في الموقع الرسمي لفرع الطلاب لجمعية آلات الحوسبة (ACM) بالجامعة الإسلامية بالمدينة المنورة: مجتمع يضم طلاب علوم وهندسة الحاسب الآلي المتحمسين، والذين يدفعهـم الفضول، والبرمجة، والتكنولوجيا المتطورة. نرحب بالطلاب من جميع الخلفيات والاهتمامات ومستويات المهارة للانضمام إلى مجتمعنا ومشاركة حبنا للتكنولوجيا.',
      joinBtn: 'انضم إلى الشعبة',
      exploreTeamsBtn: 'استكشف الفرق التقنية',
      committeesBtn: 'لجان الشعبة',
      badgeCommittees: '5 لجان أساسية',
      badgeTeams: '3 فرق تقنية (CP, AI, Robotics)',
      badgeOpen: 'مفتوحة لكافة طلاب الجامعة',
      ideFileName: 'IU_ACM_Chapter.ts',
      tabCode: 'الكود البرمجي',
      tabTerminal: 'الطرفية التفاعلية (CLI)',
      tabOutput: 'مخرجات التشغيل',
      runCodeBtn: 'تشغيل الكود',
      copied: 'تم النسخ',
      copy: 'نسخ',
      readyToCompile: 'جاهز للتشغيل والتنفيذ',
      terminalHint: 'اكتب الأوامر في الطرفية أو اضغط على الأزرار السريعة',
      terminalWelcome: 'الطرفية التفاعلية لشعبة ACM بالجامعة الإسلامية [v2.4]',
      terminalHelpPrompt: "اكتب 'help' أو 'مساعدة' لاستعراض الأوامر، أو انقر على الاختصارات:",
      terminalChipHelp: 'مساعدة',
      terminalChipRun: 'تشغيل',
      terminalChipAbout: 'عن الشعبة',
      terminalChipTeams: 'الفرق',
      terminalChipCommittees: 'اللجان',
      terminalChipStats: 'إحصائيات',
      terminalChipJoin: 'انضمام',
      terminalChipClear: 'مسح',
    },
    // About
    about: {
      badge: 'نبذة عن الشعبة',
      titlePart1: 'نصنع التميز في',
      titlePart2: 'علوم الحاسب والتقنية',
      titlePart3: 'وما وراءها',
      subtitle:
        'تتخذ الشعبة من كلية الحاسب الآلي ونظم المعلومات مقراً لها، حيث تركز على التعمق في علوم الحاسب مع الترحيب بكافة طلاب كلية الهندسة ومختلف كليات الجامعة الإسلامية.',
      paragraph1:
        'تأسست شعبة ACM الطلابية بالجامعة الإسلامية لبناء جيل رائد في الحوسبة والبرمجيات، وصناعة بيئة حيوية يتعاون فيها الطلاب عبر مختلف التخصصات. رغم تركيزنا العميق على الخوارزميات، الأنظمة البرمجية، والذكاء الاصطناعي، فإن أبوابنا مفتوحة لطلاب كلية الهندسة وكافة الكليات الأخرى.',
      paragraph2:
        'من خلال 5 لجان متخصصة (بما فيها لجنة الإرشاد والتوجيه الأكاديمي) و3 فرق تقنية (البرمجة التنافسية، الذكاء الاصطناعي، والروبوتات)، نصحب الطالب في رحلته من السنة الأولى المشتركة (التحضيرية) وحتى التخرج.',
      bullets: [
        'المقر الرئيسي: كلية الحاسب الآلي ونظم المعلومات بالجامعة الإسلامية',
        'مفتوحة لطلاب كلية الهندسة وجميع كليات الجامعة بدون استثناء',
        'إرشاد أكاديمي منهجي يرافق الطالب من السنة الأولى المشتركة حتى التخرج',
        'دعم ورعاية المشاركات في المسابقات البرمجية الإقليمية والمحلية',
      ],
      quoteTitle: '// فلسفة_الشعبة',
      quoteBadge: 'القيم_الجوهرية',
      quote:
        '"نؤمن بأن الإتقان الحقيقي لعلوم الحاسب يبدأ من الشغف الخوارزمي العميق، والممارسة المستمرة في حل المشكلات، وروح العطاء والإرشاد بين الزملاء."',
      quoteAuthor: 'مجلس إدارة الشعبة',
      quoteAffiliation: 'كلية الحاسب الآلي ونظم المعلومات، الجامعة الإسلامية',
      pillarPrefix: 'الركيزة 0',
      pillars: [
        {
          title: 'الرصانة الخوارزمية والتقنية',
          description:
            'إتقان الخوارزميات الأساسية، وهياكل البيانات، والتفكير الرياضي المحوسب من خلال مسابقات البرمجة التنافسية وحل المشكلات المتقدمة.',
        },
        {
          title: 'العمل الجماعي والقيادة',
          description:
            'هيكل طلابي منظم يضم 5 لجان: الهيئة التنفيذية، التطوير والبنية التحتية، الإعلام والتصميم، الإرشاد والتوجيه، واللجنة التقنية.',
        },
        {
          title: 'الإرشاد والتوجيه الأكاديمي',
          description:
            'مرافقة الطلاب طيلة مسيرتهم الممتدة لـ 5 سنوات دراسية، انطلاقاً من السنة الأولى المشتركة وحتى المقررات التخصصية ومشاريع التخرج.',
        },
        {
          title: 'الحوسبة التطبيقية والذكاء الاصطناعي',
          description:
            'الربط بين النظريات الحاسوبية ونماذج التعلم العميق، الرؤية الحاسوبية، والأنظمة المدمجة والروبوتات المستقلة.',
        },
      ],
    },
    // Teams / Tracks
    teams: {
      badge: 'فرق اللجنة التقنية',
      titlePrefix: 'فرقنا التقنية',
      titleHighlight: 'المتخصصة الثلاثة',
      subtitle:
        'تعمل الفرق تحت مظلة اللجنة التقنية بالشعبة، ويركز كل فريق على حل المشكلات المعقدة، والبحث المتقدم، وهندسة الأنظمة الفيزيائية والمدمجة.',
      openBadge: 'مفتوحة لانضمام الطلاب من كافة المستويات الدراسية',
      selectPrompt: '// اختر الفريق التقني',
      governanceTitle: 'حوكمة اللجنة التقنية',
      governanceDesc:
        'تشترك الفرق الثلاثة في ورش عمل بينية، ومراجعات للأكواد البرمجية، وهاكاثونات مشتركة تشرف عليها اللجنة التقنية.',
      missionTitle: '// رسالة الفريق ونطاق العمل',
      skillsTitle: '// المهارات والتقنيات المستهدفة',
      activitiesTitle: '// الأنشطة والمشاريع الأسبوعية',
      joinTeamPrefix: 'انضم إلى',
    },
    // Committees
    committees: {
      badge: 'الهيكل التنظيمي والإداري',
      titlePrefix: 'لجان الشعبة',
      titleHighlight: 'الرئيسية الخمس',
      subtitle:
        'تنتظم شعبة ACM الطلابية في خمس لجان متكاملة تقود العمل الإداري، والتطوير البرمجي، والتصميم والإعلام، والتوجيه الأكاديمي، والأنشطة التقنية.',
      noticeBadge: 'مفتوحة لكافة طلاب الجامعة من جميع الكليات • الهيئة التنفيذية بالتعيين',
      housesTeamsBadge: 'تضم 3 فرق تقنية',
      appointedBadge: 'بالتعيين',
      subTeamsTitle: 'الفرق المتخصصة التابعة للجنة التقنية:',
      mandatesTitle: 'المهام والمسؤوليات الرئيسية',
      officialBadge: 'شعبة رسمية معتمدة',
      executiveOnly: 'التعيين بقرار إداري',
      exploreTeams: 'استكشف الفرق',
      joinTeam: 'انضم للفريق',
      joinCommittee: 'انضم للجنة',
    },
    // Marquee
    marquee: {
      badge: 'رؤية الشعبة وشعاراتها',
      titlePart1: 'ميثاقنا •',
      titlePart2: 'مجتمع طلابي واحد',
      titlePart3: 'رؤية لا نهائية',
      subtitle:
        'نبض مستمر من التميز الحاسوبي في الجامعة الإسلامية بالمدينة المنورة — يجمع بين كلية الحاسب ونظم المعلومات، وكلية الهندسة، وكافة طلاب الجامعة.',
    },
    // Events
    events: {
      badge: 'التقويم والبطولات',
      titlePrefix: 'أبرز',
      titleHighlight: 'الفعاليات',
      titleSuffix: 'والمسابقات القادمة',
      subtitle:
        'طور مهاراتك البرمجية والتحليلية من خلال مسابقات الأكواد الجامعية، ورش العمل الخوارزمية، والندوات التقنية المتخصصة.',
      filterAll: 'الكل',
      filterWorkshop: 'ورشة عمل',
      filterContest: 'مسابقة',
      filterSeminar: 'ندوة تقنية',
      filterHackathon: 'هاكاثون',
      rsvpOpen: 'التسجيل متاح',
      opensSoon: 'يفتح قريباً',
      rsvpConfirmed: 'تم تأكيد مقعدك • بانتظارك!',
      reserveSeat: 'حجز مقعد طالب',
      earlyAccess: 'انضم للشعبة لأولوية التسجيل',
    },
    // Benefits
    benefits: {
      badge: 'القيمة المضافة للعضوية',
      titlePrefix: 'لماذا تنضم إلى',
      titleHighlight: 'شعبة ACM',
      titleSuffix: '؟',
      subtitle:
        'اكتسب ميزة تنافسية استثنائية، وابنِ علاقات متينة مع زملائك، وتجهز للالتحاق بأقوى البرامج المهنية والشركات العالمية.',
      availableNote: 'متاحة لجميع الأعضاء',
      ctaTitle: 'ابدأ خطوتك الأولى نحو الريادة البرمجية والتقنية.',
      ctaSubtitle: 'التسجيل مجاني لجميع الطلاب المقيدين في الجامعة الإسلامية بالمدينة المنورة.',
      ctaButton: 'سجّل عضويتك الآن',
    },
    // FAQ
    faq: {
      badge: 'الأسئلة الشائعة',
      titlePrefix: 'لديك استفسار؟',
      titleHighlight: 'إليك الإجابات الشافية',
      subtitle: 'كل ما تحتاج معرفته حول الانضمام للشعبة والمشاركة في أنشطتها ومشاريعها.',
      contactText: 'هل لا يزال لديك استفسار؟ تواصل مباشرة مع المنسق الطلابي عبر البريد:',
    },
    // CTA
    cta: {
      badge: 'الجامعة الإسلامية بالمدينة المنورة • مجتمع شعبة ACM',
      titlePart1: 'هل أنت جاهز لتسريع رحلتك في',
      titleHighlight: 'علوم الحاسب والهندسة',
      titlePart2: '؟',
      subtitle:
        'انضم إلى مجتمع يحفزك على حل أصعب التحديات، وكتابة أكواد برمجية متقنة، وبناء تقنيات ذات أثر حقيقي بإشراف موجهين وخبراء.',
      applyBtn: 'تقديم طلب العضوية',
      githubBtn: 'استكشف مستودعات GitHub',
      guarantee1: 'مجانية 100% لجميع طلاب الجامعة الإسلامية',
      guarantee2: 'لا يُشترط وجود خبرة سابقة في المسابقات',
      guarantee3: 'ورش عمل وتطبيقات معملية أسبوعية',
    },
    // Footer
    footer: {
      bio: 'الشعبة الطلابية الرسمية لجمعية آلات الحوسبة (ACM) بالجامعة الإسلامية بالمدينة المنورة. تنتظم في 5 لجان إدارية و3 فرق تقنية متخصصة لصناعة التميز في علوم الحاسب والذكاء الاصطناعي.',
      committeesTitle: 'اللجان الخمس',
      teamsTitle: 'الفرق التقنية',
      linksTitle: 'روابط هامة',
      location: 'كلية الحاسب الآلي ونظم المعلومات، الجامعة الإسلامية، المدينة المنورة، المملكة العربية السعودية',
      copyright: 'شعبة ACM بالجامعة الإسلامية بالمدينة المنورة. صُنعت بكل',
      craftedBy: 'بواسطة لجنة التطوير والبنية التحتية.',
      paletteText: 'الأقواس البرمجية #2c5f85 • الخطوط #c49b57 • المساحة النقية #FFFFFF',
    },
    // Join Modal
    modal: {
      headerTitle: 'استمارة الانضمام لشعبة ACM الطلابية',
      openNote: '// التقديم متاح لكافة طلاب الجامعة الإسلامية في جميع الكليات',
      formTitle: 'تسجيل عضوية طالب',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'مثال: طارق المدني',
      emailLabel: 'البريد الجامعي الرسمي *',
      emailPlaceholder: 's123456@iu.edu.sa',
      facultyLabel: 'الكلية المقيد بها *',
      facultyHint: 'نرحب بجميع طلاب كليات الجامعة الإسلامية.',
      facultyOptions: [
        { value: 'College of Computing and Information Systems', label: 'كلية الحاسب الآلي ونظم المعلومات (CCIS)' },
        { value: 'Faculty of Engineering', label: 'كلية الهندسة' },
        { value: 'Faculty of Science', label: 'كلية العلوم' },
        { value: 'Other Islamic University Faculty', label: 'كلية أخرى بالجامعة الإسلامية' },
      ],
      academicYearLabel: 'المستوى الدراسي (نظام الـ 5 سنوات) *',
      academicYearHint: 'السنة الأولى مشتركة (تحضيرية)، تليها 4 سنوات تخصصية بالكلية.',
      academicYearOptions: [
        { value: '1st Year - Common Year', label: 'السنة الأولى - السنة المشتركة (التحضيرية)' },
        { value: '2nd Year (College Year 1)', label: 'السنة الثانية (السنة الأولى بالكلية)' },
        { value: '3rd Year (College Year 2)', label: 'السنة الثالثة (السنة الثانية بالكلية)' },
        { value: '4th Year (College Year 3)', label: 'السنة الرابعة (السنة الثالثة بالكلية)' },
        { value: '5th Year (Senior / Final Year)', label: 'السنة الخامسة (سنة التخرج)' },
        { value: "Graduate / Master's Student", label: 'طالب دراسات عليا / ماجستير' },
      ],
      preferenceLabel: 'الفريق أو اللجنة المفضلة *',
      preferenceHint: 'يمكنك اختيار أي فريق تقني أو لجنة إدارية (الهيئة التنفيذية بالتعيين فقط وليست متاحة للتقديم المباشر).',
      groupTeams: 'فرق اللجنة التقنية (متاحة لجميع الطلاب)',
      groupCommittees: 'لجان الشعبة (متاحة لجميع الطلاب)',
      profileLabel: 'رابط GitHub / Codeforces / معرض الأعمال',
      optional: '(اختياري)',
      profilePlaceholder: 'https://github.com/your-username',
      statementLabel: 'ما الذي يحفزك للانضمام إلى الشعبة؟',
      statementPlaceholder: 'حدثنا عن اهتماماتك في علوم الحاسب، أو خبراتك البرمجية، أو الأفكار والمشاريع التي تتطلع لتطويرها...',
      cancelBtn: 'إلغاء',
      submitBtn: 'إرسال طلب الانضمام',
      submittingBtn: 'جاري تسجيل الطلب...',
      successTitle: 'تم استلام طلبك بنجاح!',
      successWelcomePrefix: 'أهلاً بك في الشعبة يا',
      successLoggedPrefix: 'تم تسجيل طلبك للانضمام إلى',
      successNextStepsTitle: 'الخطوات القادمة:',
      successNextSteps: [
        '1. تفقد بريدك الجامعي لمتابعة تفاصيل اللقاء التعريفي.',
        '2. تواصل مع قادة الفريق أو اللجنة عبر القنوات الرسمية للشعبة.',
        '3. احرص على حضور اللقاء العام القادم في كلية الحاسب الآلي.',
      ],
      doneBtn: 'تم والعودة للموقع',
    },
  },
};

export const LOCALIZED_STATS: Record<Language, LocalizedStat[]> = {
  en: [
    {
      value: '5',
      label: 'Committees',
      description: 'Executive, Dev & Infra, Media & Design, Advisory & Mentorship, Technical',
    },
    {
      value: '3',
      label: 'Technical Teams',
      description: 'Competitive Programming, Artificial Intelligence, and Robotics',
    },
    {
      value: '500+',
      label: 'Student Members',
      description: 'Active members across CCIS, Engineering, and all IU faculties',
    },
    {
      value: '25+',
      label: 'Workshops & Contests',
      description: 'Hands-on training, collegiate contests, and research talks each academic year',
    },
  ],
  ar: [
    {
      value: '5',
      label: 'لجان تنظيمية',
      description: 'الهيئة التنفيذية، التطوير والبنية، الإعلام، الإرشاد والتوجيه، واللجنة التقنية',
    },
    {
      value: '3',
      label: 'فرق تقنية',
      description: 'البرمجة التنافسية، الذكاء الاصطناعي، وهندسة الروبوتات والأنظمة المدمجة',
    },
    {
      value: '+500',
      label: 'عضو طلابي',
      description: 'أعضاء فاعلون من كلية الحاسب، كلية الهندسة، وكافة كليات الجامعة الإسلامية',
    },
    {
      value: '+25',
      label: 'ورشة ومسابقة سنوياً',
      description: 'تدريب عملي مكثف، بطولات برمجة جامعية، وندوات تخصصية على مدار العام',
    },
  ],
};

export const LOCALIZED_TEAMS: Record<Language, LocalizedTeam[]> = {
  en: [
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
        'ICPC & Saudi CPC Contest Strategy',
      ],
      coordinators: 'Technical Committee & ICPC Finalists',
      features: [
        'Weekly timed problem sets on Codeforces & VJudge platforms',
        'Post-contest algorithmic upsolving and solution analysis sessions',
        'Rigorous preparation sprints for the Saudi Collegiate Programming Contest (SCPC)',
        'Peer-led algorithmic clinics covering mathematics and computational geometry',
      ],
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
        'Data Pipelines & Hugging Face',
      ],
      coordinators: 'Technical Committee & AI Student Researchers',
      features: [
        'Hands-on machine learning implementation sprints and Kaggle challenges',
        'Applied projects focused on Arabic NLP and multilingual LLMs',
        'Seminal research paper reading circles and architecture reproductions',
        'Model fine-tuning and deployment pipelines using modern tools',
      ],
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
        'Circuit Design & Hardware Interfacing',
      ],
      coordinators: 'Technical Committee & Embedded Leads',
      features: [
        'Hands-on lab builds integrating microcontrollers and physical sensors',
        'Autonomous robotics navigation and real-time telemetry projects',
        'Embedded hardware prototyping from schematics to working firmware',
        'Interfacing physical sensors with higher-level software algorithms',
      ],
    },
  ],
  ar: [
    {
      id: 'cp',
      title: 'فريق البرمجة التنافسية',
      shortName: 'فريق البرمجة التنافسية',
      category: 'اللجنة التقنية // الخوارزميات وحل المشكلات',
      codeSnippet: '<CompetitiveProgramming team="cp_core" />',
      icon: Code2,
      description: 'إتقان الخوارزميات المتقدمة وهياكل البيانات والتفكير المنطقي للتألق في البطولات البرمجية الجامعية ومنصات التنافس العالمية.',
      skills: [
        'لغة C++ 20 ومكتبة STL',
        'هياكل البيانات المتقدمة (Advanced Data Structures)',
        'البرمجة الديناميكية وتطوير الحالات (DP)',
        'خوارزميات المخططات والأشجار (Graph & Trees)',
        'استراتيجيات مسابقات ICPC وبطولة الجامعات السعودية SCPC',
      ],
      coordinators: 'اللجنة التقنية وأبطال مسابقات ICPC',
      features: [
        'مجموعات تدريبية أسبوعية محددة بالوقت عبر منصات Codeforces وVJudge',
        'جلسات تحليل وحل المسائل (Upsolving) بعد كل جولة تنافسية',
        'معسكرات إعداد مكثفة لبطولة الجامعات السعودية للبرمجة (SCPC)',
        'عيادات خوارزمية يشرف عليها كبار الطلاب في الرياضيات والهندسة الحاسوبية',
      ],
    },
    {
      id: 'ai',
      title: 'فريق الذكاء الاصطناعي',
      shortName: 'فريق الذكاء الاصطناعي',
      category: 'اللجنة التقنية // الذكاء الآلي وعلوم البيانات',
      codeSnippet: '<ArtificialIntelligence model="transformer_arch" />',
      icon: BrainCircuit,
      description: 'استكشاف نظريات التعلم الآلي، وبنى التعلم العميق ونماذج المحولات الحديثة، وبناء مشاريع تطبيقية في معالجة اللغات والرؤية الحاسوبية.',
      skills: [
        'Python وإطار العمل PyTorch',
        'بنى المحولات الحديثة (Transformers & LLMs)',
        'معالجة اللغة العربية الطبيعية (Arabic NLP)',
        'الرؤية الحاسوبية والشبكات العصبية الالتفافية (Computer Vision)',
        'هندسة خطوط البيانات ومكتبات Hugging Face',
      ],
      coordinators: 'اللجنة التقنية ونخبة باحثي الذكاء الاصطناعي من الطلاب',
      features: [
        'تحديات عملية في تطبيق خوارزميات التعلم الآلي وتنافس على Kaggle',
        'مشاريع تطبيقية في معالجة النصوص العربية وتطوير النماذج التوليدية',
        'حلقات قراءة دورية لأحدث الأوراق البحثية المنشورة وتطبيق نتائجها برمجياً',
        'ضبط دقيق للنماذج ونشرها في بيئات سحابية وتطبيقية حديثة',
      ],
    },
    {
      id: 'robotics',
      title: 'فريق الروبوتات والأنظمة المدمجة',
      shortName: 'فريق الروبوتات',
      category: 'اللجنة التقنية // الأنظمة المدمجة والعتاد الذكي',
      codeSnippet: '<Robotics team="embedded_systems" />',
      icon: Cpu,
      description: 'ربط المنطق البرمجي بالأنظمة الفيزيائية من خلال المتحكمات الدقيقة، ومصفوفات الحساسات، وتصميم الدوائر الإلكترونية الذكية.',
      skills: [
        'لغة C والبرمجة المدمجة (Embedded C)',
        'المتحكمات الدقيقة (ESP32, STM32, Arduino)',
        'مصفوفات الحساسات ومعالجة الإشارات',
        'نظام تشغيل الروبوتات (ROS 2)',
        'تصميم الدوائر الإلكترونية والربط العتادي',
      ],
      coordinators: 'اللجنة التقنية وقادة الأنظمة المدمجة',
      features: [
        'تجارب معملية تطبيقية لربط المتحكمات بالحساسات والمحركات',
        'مشاريع الروبوتات المستقلة والملاحة الذكية والبث الحي للبيانات',
        'بناء النماذج الأولية للأجهزة الإلكترونية وكتابة برمجيات التحكم (Firmware)',
        'تكامل الحساسات الفيزيائية مع الخوارزميات البرمجية المتقدمة',
      ],
    },
  ],
};

export const LOCALIZED_COMMITTEES: Record<Language, LocalizedCommittee[]> = {
  en: [
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
        'Chapter governance, institutional partnerships, and leadership oversight',
      ],
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
        'Automating chapter administration tools, Discord bots, and databases',
      ],
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
        'Capturing photography, video documentation, and workshop recap reels',
      ],
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
        'Connecting student members with alumni in top tech companies and academia',
      ],
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
        'Robotics Team',
      ],
      responsibilities: [
        'Coordinating syllabus, contests, and bootcamps for the 3 specialized teams',
        'Mentoring students in algorithmic thinking and collegiate competition problem-solving',
        'Facilitating applied research reproduction and machine learning projects',
        'Organizing hands-on embedded systems and robotics laboratory sessions',
      ],
    },
  ],
  ar: [
    {
      id: 'executive',
      name: 'الهيئة التنفيذية',
      code: 'IU_ACM::ExecutiveBoard',
      icon: Users,
      description: 'الفريق القيادي المعين المسؤول عن التوجيه الاستراتيجي، والمراسلات الرسمية مع كلية الحاسب الآلي ونظم المعلومات وإدارة الجامعة، والإشراف الإداري العام.',
      responsibilities: [
        'وضع الخطة الاستراتيجية للشعبة، وتخصيص الميزانيات، والتخطيط الفصلي',
        'المراسلات الرسمية مع إدارة الجامعة وعمادة كلية الحاسب الآلي ونظم المعلومات',
        'الامتثال لمعايير منظمة ACM الدولية وإعداد التقارير السنوية المعتمدة',
        'حوكمة الشعبة، وتطوير الشراكات المؤسسية، والإشراف على كافة اللجان',
      ],
    },
    {
      id: 'development',
      name: 'لجنة التطوير والبنية التحتية',
      code: 'IU_ACM::DevOpsInfra',
      icon: Server,
      description: 'مسؤولة عن بناء وتطوير وإدارة المنصات التقنية للشعبة، والمواقع الإلكترونية، وأدوات المطورين المؤتمتة، والأنظمة السحابية.',
      responsibilities: [
        'تطوير وصيانة المنصة الرسمية ومواقع الفعاليات وخدمات الشعبة السحابية',
        'إدارة مستودعات GitHub الخاصة بالشعبة، وتفعيل مسارات النشر الآلي CI/CD',
        'تشغيل أنظمة التقييم والتحكيم البرمجي المحلي، وبيئات الاختبار الافتراضية',
        'أتمتة العمليات الإدارية للشعبة وتطوير بوتات Discord وقواعد البيانات',
      ],
    },
    {
      id: 'media',
      name: 'لجنة الإعلام والتصميم',
      code: 'IU_ACM::MediaDesign',
      icon: Palette,
      description: 'مسؤولة عن بناء الهوية البصرية للشعبة وترسيخها، وإدارة قنوات التواصل الرقمية، وتوثيق كافة الفعاليات والأنشطة والورش التدريبية.',
      responsibilities: [
        'تصميم وتطوير الهوية البصرية للشعبة ونظام التصميم الرقمي (Design System)',
        'إنتاج المواد الإعلانية، وبوسترات الفعاليات، والنشرات الإخبارية الرقمية',
        'إدارة الحسابات الرسمية على منصات التواصل الاجتماعي والتفاعل مع المجتمع',
        'التوثيق الفوتوغرافي والمرئي وصناعة المقاطع التلخيصية للورش والمؤتمرات',
      ],
    },
    {
      id: 'advisory',
      name: 'لجنة الإرشاد والتوجيه الأكاديمي',
      code: 'IU_ACM::AdvisoryMentorship',
      icon: GraduationCap,
      description: 'مكرسة لمرافقة وتمكين الطلاب في مسيرتهم الجامعية — بدءاً من السنة الأولى المشتركة وحتى التخرج — عبر خطط أكاديمية وإرشاد الأقران.',
      responsibilities: [
        'ربط طلاب السنة الأولى المشتركة بمرشدين من كبار الطلاب المتميزين أكاديمياً',
        'تقديم جلسات الإرشاد واقتراح المسارات الدراسية وأساليب البحث العلمي',
        'تنظيم ورش عمل السيرة الذاتية ومحاكاة المقابلات التقنية لفرص التدريب الصيفي',
        'تسهيل تواصل الأعضاء مع خريجي الشعبة العاملين في كبرى الشركات التقنية',
      ],
    },
    {
      id: 'technical',
      name: 'اللجنة التقنية',
      code: 'IU_ACM::TechnicalCommittee',
      icon: Code2,
      description: 'تشرف على المسارات التقنية الأساسية لعلوم الحاسب بالشعبة، وتنسق المناهج التدريبية والمعسكرات ومشاركات المسابقات عبر الفرق الثلاث.',
      subTeams: [
        'فريق البرمجة التنافسية',
        'فريق الذكاء الاصطناعي',
        'فريق الروبوتات والأنظمة المدمجة',
      ],
      responsibilities: [
        'تنسيق الخطط التدريبية والمعسكرات البرمجية والمسابقات للفرق الثلاث المتخصصة',
        'تدريب الطلاب على التفكير الخوارزمي المتقدم وأساليب حل مسائل البطولات',
        'تيسير تطبيق ونمذجة الأبحاث العلمية في مجالات تعلم الآلة والذكاء الاصطناعي',
        'تنظيم الجلسات المعملية التطبيقية في الأنظمة المدمجة والروبوتات المستقلة',
      ],
    },
  ],
};

export const LOCALIZED_EVENTS: Record<Language, LocalizedEvent[]> = {
  en: [
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
      registrationOpen: true,
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
      registrationOpen: true,
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
      registrationOpen: true,
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
      registrationOpen: false,
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
      registrationOpen: false,
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
      registrationOpen: false,
    },
  ],
  ar: [
    {
      id: 'event-1',
      title: 'التعمق في البرمجة الديناميكية والحفظ المؤقت (Memoization)',
      category: 'ورشة عمل',
      date: 'الأربعاء، 14 أكتوبر 2026',
      time: '4:30 م – 6:30 م بتوقيت مكة',
      location: 'كلية الحاسب الآلي ونظم المعلومات، معمل B-204',
      instructor: 'أحمد المنصور (بطل مسابقات ICPC)',
      description: 'ورشة عمل خوارزمية تطبيقية تغطي البرمجة الديناميكية أحادية وثنائية الأبعاد، وضغط الحالات، واستراتيجيات التحسين لبيئات المسابقات البرمجية.',
      isUpcoming: true,
      registrationOpen: true,
    },
    {
      id: 'event-2',
      title: 'ماراثون الأكواد البرمجية للجامعة الإسلامية 2026: الجولة التأهيلية',
      category: 'مسابقة',
      date: 'السبت، 24 أكتوبر 2026',
      time: '2:00 م – 7:00 م بتوقيت مكة',
      location: 'مركز الحوسبة المركزي بالجامعة + أونلاين',
      instructor: 'فريق استشاريي البرمجة التنافسية',
      description: 'التصفيات التأهيلية الرسمية لاختيار وتشكيل الفرق الممثلة للجامعة الإسلامية بالمدينة المنورة في مسابقات البرمجة الإقليمية والمحلية.',
      isUpcoming: true,
      registrationOpen: true,
    },
    {
      id: 'event-3',
      title: 'هندسة الخدمات المصغرة القابلة للتوسع باستخدام Go وgRPC',
      category: 'ورشة عمل',
      date: 'الثلاثاء، 03 نوفمبر 2026',
      time: '5:00 م – 7:00 م بتوقيت مكة',
      location: 'مبنى كلية الحاسب الآلي، قاعة المحاضرات 102',
      instructor: 'طارق الحربي (قائد البنى التحتية)',
      description: 'استكشاف بناء الأنظمة عالية الإنتاجية، والبروتوكولات الثنائية السريعة، وطوابير الرسائل غير المتزامنة، وإدارة حاويات Docker الحديثة.',
      isUpcoming: true,
      registrationOpen: true,
    },
    {
      id: 'event-4',
      title: 'الضبط الدقيق لنماذج المحولات اللغوية (LLMs) على البيانات العربية',
      category: 'ندوة تقنية',
      date: 'الخميس، 12 نوفمبر 2026',
      time: '6:00 م – 8:00 م بتوقيت مكة',
      location: 'قاعة المؤتمرات الرئيسية بالجامعة + بث مباشر',
      instructor: 'د. زياد ومجموعة أبحاث الذكاء الاصطناعي',
      description: 'ندوة تفاعلية تستعرض أحدث التطورات في النماذج التأسيسية متعددة اللغات، وتقنيات الضبط الدقيق الفعالة (LoRA)، ومعالجة المفردات العربية.',
      isUpcoming: true,
      registrationOpen: false,
    },
    {
      id: 'event-5',
      title: 'تحدي التقاط العلم (CTF): استغلال الثغرات الثنائية والأمنية',
      category: 'مسابقة',
      date: 'الجمعة، 27 نوفمبر 2026',
      time: '3:00 م – 9:00 م بتوقيت مكة',
      location: 'معمل الأمن السيبراني 03',
      instructor: 'نادي الأمن السيبراني الطلابي',
      description: 'تحدٍ سيبراني مكثف يستمر 6 ساعات لاختبار الهندسة العكسية، وتجاوز سعة الذاكرة المؤقتة (Buffer Overflows)، وتحديات التشفير المعقدة.',
      isUpcoming: true,
      registrationOpen: false,
    },
    {
      id: 'event-6',
      title: 'هاكاثون شعبة ACM السنوي: تقنيات لخدمة المدينة المنورة',
      category: 'هاكاثون',
      date: '18 – 20 ديسمبر 2026',
      time: '48 ساعة متواصلة من الابتكار',
      location: 'مركز الابتكار وريادة الأعمال بالجامعة',
      instructor: 'اللجنة المنظمة للشعبة والجهات الراعية',
      description: 'هاكاثون ابتكاري يمتد 48 ساعة لبناء حلول تقنية تخدم المدينة المنورة، وتركز على المدن الذكية، والتقنيات التعليمية، وتسهيل الوصول الشامل.',
      isUpcoming: true,
      registrationOpen: false,
    },
  ],
};

export const LOCALIZED_BENEFITS: Record<Language, LocalizedBenefit[]> = {
  en: [
    {
      id: 'benefit-1',
      title: 'Global ACM Association Affiliation',
      description: 'Connect directly to the world’s largest educational and scientific computing society, including digital publications, conferences, and technical interest groups.',
      tag: 'ACM Global',
      icon: Award,
    },
    {
      id: 'benefit-2',
      title: 'ICPC & Collegiate Contest Pathways',
      description: 'Get sponsored entry and high-intensity coaching for Saudi CPC, Arab Collegiate Contests, and international algorithmic challenges.',
      tag: 'Contest Prep',
      icon: TerminalSquare,
    },
    {
      id: 'benefit-3',
      title: 'Production Software Portfolio',
      description: 'Collaborate on tangible open-source systems and chapter platforms used by real students, giving your CV standout technical credibility.',
      tag: 'Hands-on Code',
      icon: Rocket,
    },
    {
      id: 'benefit-4',
      title: 'Senior Peer & Alumni Mentorship',
      description: 'Direct 1-on-1 guidance from seniors and alumni working at top tech firms, offering code reviews, mock technical screens, and career navigation.',
      tag: 'Mentorship',
      icon: Network,
    },
    {
      id: 'benefit-5',
      title: 'Structured Research Reading Groups',
      description: 'Dissect groundbreaking papers in neural networks, distributed consensus, and cryptography alongside fellow motivated student researchers.',
      tag: 'Research',
      icon: BookOpenCheck,
    },
    {
      id: 'benefit-6',
      title: 'Leadership & Committee Roles',
      description: 'Grow beyond coding by leading technical committees, organizing 200+ attendee hackathons, and developing executive leadership skills.',
      tag: 'Leadership',
      icon: Sparkles,
    },
  ],
  ar: [
    {
      id: 'benefit-1',
      title: 'عضوية معتمدة في منظمة ACM العالمية',
      description: 'الاتصال المباشر بأكبر جمعية علمية وتعليمية للحوسبة في العالم، والوصول إلى أحدث الأوراق والمؤتمرات ومجموعات الاهتمام التخصصية (SIGs).',
      tag: 'ACM العالمية',
      icon: Award,
    },
    {
      id: 'benefit-2',
      title: 'مسار تأهيل رسمي لبطولات ICPC والمسابقات الجامعية',
      description: 'تدريب مكثف ورعاية للمشاركة في بطولة الجامعات السعودية للبرمجة (SCPC)، والبطولات العربية والإقليمية لحل المسائل الخوارزمية.',
      tag: 'المسابقات البرمجية',
      icon: TerminalSquare,
    },
    {
      id: 'benefit-3',
      title: 'بناء مشاريع برمجية حقيقية لسيرتك الذاتية',
      description: 'العمل المشترك على تطوير أنظمة ومواقع حية مفتوحة المصدر يستخدمها طلاب الجامعة فعلياً، مما يمنح ملفك الشخصي ثقلاً برمجياً مميزاً.',
      tag: 'تطوير حقيقي',
      icon: Rocket,
    },
    {
      id: 'benefit-4',
      title: 'إرشاد مباشر من كبار الطلاب والخريجين',
      description: 'توجيه فردي مباشر من خريجي الشعبة والطلاب المتميزين في كبرى الشركات، يشمل مراجعة الأكواد ومحاكاة المقابلات الوظيفية التقنية.',
      tag: 'الإرشاد والتوجيه',
      icon: Network,
    },
    {
      id: 'benefit-5',
      title: 'حلقات بحثية متقدمة في الذكاء الاصطناعي',
      description: 'مناقشة وتحليل أحدث الأوراق العلمية في مجالات الشبكات العصبية، والأنظمة الموزعة، والتشفير بالتعاون مع باحثي الجامعة.',
      tag: 'البحث العلمي',
      icon: BookOpenCheck,
    },
    {
      id: 'benefit-6',
      title: 'خبرات قيادية وإدارية في اللجان',
      description: 'تطوير المهارات القيادية عبر إدارة اللجان التقنية والتنظيمية، وإدارة فعاليات ضخمة تضم مئات الحضور، واكتساب مهارات القيادة المؤسسية.',
      tag: 'القيادة والإدارة',
      icon: Sparkles,
    },
  ],
};

export const LOCALIZED_FAQS: Record<Language, LocalizedFaq[]> = {
  en: [
    {
      id: 'faq-1',
      category: 'General',
      question: 'What is the IU ACM Student Chapter?',
      answer: 'The Islamic University of Madinah ACM Student Chapter is an officially recognized collegiate branch of the Association for Computing Machinery (ACM), based at the College of Computing and Information Systems. While our focus is deeply centered on computer science, algorithms, and AI, we are an inclusive community welcoming students from the Faculty of Engineering and all university colleges.',
    },
    {
      id: 'faq-2',
      category: 'Committees',
      question: 'How is the chapter structured?',
      answer: 'The chapter operates through 5 official committees: Executive Board, Development & Infrastructure, Media & Design, Advisory & Mentorship, and the Technical Committee. The Technical Committee encompasses our 3 specialized technical teams: Competitive Programming, Artificial Intelligence, and Robotics.',
    },
    {
      id: 'faq-3',
      category: 'Membership',
      question: 'Who is eligible to join the chapter?',
      answer: 'All enrolled students at the Islamic University of Madinah! Our chapter is anchored in the College of Computing and Information Systems, but we warmly accept students from the Faculty of Engineering and across all university faculties. Every IU student is welcome to join.',
    },
    {
      id: 'faq-4',
      category: 'Teams',
      question: 'Do I need advanced programming experience to join a team?',
      answer: 'Not at all! Our three technical teams (CP, AI, and Robotics) provide beginner to advanced tracks alongside senior peer mentorship. What matters most is curiosity and dedication to learning.',
    },
    {
      id: 'faq-5',
      category: 'Committees',
      question: 'Can I join the committees or technical teams?',
      answer: 'Yes! Students can apply to join all technical teams (Competitive Programming, AI, Robotics) and committees (Development & Infrastructure, Media & Design, Advisory & Mentorship). The Executive Board is the only committee closed to direct application as it is an appointed governing body.',
    },
    {
      id: 'faq-6',
      category: 'Membership',
      question: 'How does membership work with our 5-year academic standing?',
      answer: 'IU degree tracks span five years: the first year is the Common Year where science, engineering, computing, and information systems students study together, followed by 4 specialized years at their college. Common Year students are strongly encouraged to join early to gain mentorship and computing fundamentals.',
    },
    {
      id: 'faq-7',
      category: 'General',
      question: 'Is there any membership fee to join?',
      answer: 'No. Chapter workshops, seminars, campus coding contests, and mentorship sessions are completely free for all Islamic University students.',
    },
  ],
  ar: [
    {
      id: 'faq-1',
      category: 'عام',
      question: 'ما هي شعبة ACM الطلابية بالجامعة الإسلامية؟',
      answer: 'شعبة طلابية جامعية رسمية معتمدة من جمعية آلات الحوسبة الدولية (ACM)، ومقرها كلية الحاسب الآلي ونظم المعلومات بالجامعة الإسلامية بالمدينة المنورة. تركز على التميز في علوم الحاسب، والخوارزميات، والذكاء الاصطناعي، وتفتح أبوابها لجميع طلاب كلية الهندسة وكافة كليات الجامعة.',
    },
    {
      id: 'faq-2',
      category: 'الهيكل التنظيمي',
      question: 'كيف يتشكل الهيكل التنظيمي للشعبة؟',
      answer: 'تتكون الشعبة من 5 لجان رسمية: الهيئة التنفيذية، لجنة التطوير والبنية التحتية، لجنة الإعلام والتصميم، لجنة الإرشاد والتوجيه، واللجنة التقنية. وتشرف اللجنة التقنية على 3 فرق متخصصة: فريق البرمجة التنافسية، فريق الذكاء الاصطناعي، وفريق الروبوتات والأنظمة المدمجة.',
    },
    {
      id: 'faq-3',
      category: 'شروط العضوية',
      question: 'من يحق له الانضمام والتسجيل في الشعبة؟',
      answer: 'جميع الطلاب المقيدين في الجامعة الإسلامية بالمدينة المنورة! ورغم أن المقر الرئيسي في كلية الحاسب الآلي ونظم المعلومات، إلا أننا نرحب بطلاب كلية الهندسة وكلية العلوم وجميع الكليات دون استثناء.',
    },
    {
      id: 'faq-4',
      category: 'الفرق التقنية',
      question: 'هل يشترط وجود خبرة سابقة متقدمة في البرمجة للانضمام؟',
      answer: 'لا يشترط ذلك إطلاقاً! توفر فرقنا الثلاثة مسارات تبدأ من الأساسيات وتتدرج حتى الاحتراف، بمرافقة وإشراف كبار الطلاب المتميزين. أهم متطلب هو الشغف والالتزام بالتعلم والممارسة.',
    },
    {
      id: 'faq-5',
      category: 'اللجان والفرق',
      question: 'هل يمكنني التقدم لعضوية اللجان أو الفرق التقنية؟',
      answer: 'نعم! يمكن لجميع الطلاب التقديم على كافة الفرق التقنية (البرمجة التنافسية، الذكاء الاصطناعي، الروبوتات) وكذلك اللجان (التطوير، الإعلام، الإرشاد، التقنية). الهيئة التنفيذية هي الوحيدة التي يتم تشكيلها بالتعيين الإداري.',
    },
    {
      id: 'faq-6',
      category: 'المسار الأكاديمي',
      question: 'كيف تتكامل العضوية مع نظام الدراسة الممتد لـ 5 سنوات بالجامعة؟',
      answer: 'تمتد الخطة الدراسية بالجامعة لخمس سنوات: السنة الأولى هي السنة المشتركة (التحضيرية) حيث يلتقي طلاب الحوسبة والهندسة والعلوم، تليها 4 سنوات تخصصية بالكلية. ونشجع طلاب السنة المشتركة بشدة على الانضمام مبكراً للحصول على الإرشاد الأكاديمي والتأسيس البرمجي القوي.',
    },
    {
      id: 'faq-7',
      category: 'الرسوم',
      question: 'هل توجد أي رسوم مالية للانضمام للشعبة؟',
      answer: 'لا، جميع ورش العمل، والمسابقات البرمجية، والجلسات الإرشادية، والأنشطة تقدم مجاناً بنسبة 100% لكافة طلاب الجامعة الإسلامية بالمدينة المنورة.',
    },
  ],
};

export const LOCALIZED_MARQUEE: Record<Language, string[]> = {
  en: [
    'INVENTING THE COMPUTING FUTURE',
    'COLLEGE OF COMPUTING & INFORMATION SYSTEMS',
    'ALGORITHMIC RIGOR & ICPC EXCELLENCE',
    'ARTIFICIAL INTELLIGENCE RESEARCH',
    'AUTONOMOUS ROBOTICS & EMBEDDED SYSTEMS',
    'ADVISORY & PEER-TO-PEER MENTORSHIP',
    'FROM 1ST YEAR COMMON YEAR TO SENIOR YEAR 5',
    'CODE • COLLABORATE • COMPETE',
    'ISLAMIC UNIVERSITY OF MADINAH',
    'OPEN TO ALL ISLAMIC UNIVERSITY STUDENTS',
    'WELCOMING FACULTY OF ENGINEERING & ALL COLLEGES',
    '5 CORE COMMITTEES • 3 SPECIALIZED TEAMS',
    'DEEP LEARNING & COMPUTER VISION',
    'COMPETITIVE PROGRAMMING BOOTCAMPS',
    'DEVELOPMENT & CLOUD SYSTEMS',
    'MADINAH COLLEGIATE TECH TALENT',
    'GLOBAL ACM CHAPTER EXCELLENCE',
  ],
  ar: [
    'نبتكر مستقبل الحوسبة والتقنية',
    'كلية الحاسب الآلي ونظم المعلومات',
    'الرصانة الخوارزمية والتألق في بطولات ICPC',
    'أبحاث وتطبيقات الذكاء الاصطناعي',
    'الروبوتات المستقلة والأنظمة المدمجة',
    'الإرشاد والتوجيه الأكاديمي بين الأقران',
    'من السنة الأولى المشتركة وحتى سنة التخرج الخامسة',
    'نبرمج • نتعاون • نتنافس',
    'الجامعة الإسلامية بالمدينة المنورة',
    'مفتوحة لجميع طلاب الجامعة الإسلامية',
    'نرحب بطلاب كلية الهندسة وكافة الكليات',
    '5 لجان تنظيمية • 3 فرق تقنية متخصصة',
    'التعلم العميق والرؤية الحاسوبية',
    'معسكرات البرمجة التنافسية وحل المشكلات',
    'التطوير البرمجي والأنظمة السحابية',
    'طاقات تقنية واعدة في طيبة الطيبة',
    'الريادة والتميز تحت مظلة ACM الدولية',
  ],
};

export const LOCALIZED_NAV_LINKS: Record<Language, { label: string; href: string }[]> = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Committees', href: '#committees' },
    { label: 'Technical Teams', href: '#teams' },
    { label: 'Events & Contests', href: '#events' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'FAQ', href: '#faq' },
  ],
  ar: [
    { label: 'عن الشعبة', href: '#about' },
    { label: 'اللجان', href: '#committees' },
    { label: 'الفرق التقنية', href: '#teams' },
    { label: 'الفعاليات والمسابقات', href: '#events' },
    { label: 'المزايا', href: '#benefits' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ],
};
