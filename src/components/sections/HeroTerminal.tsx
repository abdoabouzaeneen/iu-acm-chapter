import { useState, useRef, useEffect, useId } from 'react';
import { 
  Copy, 
  Check, 
  Play, 
  Terminal as TerminalIcon, 
  Code2, 
  FileCode, 
  RotateCcw, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  FolderGit2
} from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS } from '../../i18n/translations';

interface HeroTerminalProps {
  onOpenJoinModal: () => void;
  onToggleTheme?: () => void;
}

interface CommandOutput {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
}

const SNIPPETS = {
  ts: {
    filename: 'IU_ACM_Chapter.ts',
    language: 'TypeScript',
    code: `// Islamic University of Madinah ACM Student Chapter
import { Student, Innovator } from '@iu-acm/core';

export class IUACMChapter implements CollegiateChapter {
  readonly university = 'Islamic University of Madinah';
  readonly faculty = 'College of Computing and Information Systems';
  readonly committees = [
    'Executive Board',
    'Development & Infrastructure',
    'Media & Design',
    'Advisory & Mentorship',
    'Technical Committee'
  ];
  readonly technicalTeams = [
    'Competitive Programming',
    'Artificial Intelligence',
    'Robotics'
  ];

  public async empower(student: Student): Promise<Innovator> {
    const team = await student.joinTeam('CompetitiveProgramming');
    await team.solveChallenges({ 
      collegiateContests: true, 
      weeklySprints: true 
    });
    return student.elevateToInnovator();
  }
}

// Active chapter registry
const chapter = new IUACMChapter();
console.log('IU ACM :: Online & Welcoming All Students');`,
  },
  cpp: {
    filename: 'cp_solve.cpp',
    language: 'C++ 20',
    code: `// IU ACM Competitive Programming Sprint
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n = 5; // 5 Core Committees
    vector<string> teams = {"CP", "AI", "Robotics"};
    cout << "Ready for ICPC & Saudi CPC 2026!" << "\\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    solve();
    return 0;
}`,
  },
  py: {
    filename: 'ai_pipeline.py',
    language: 'Python',
    code: `# IU ACM Artificial Intelligence Team
import torch
import torch.nn as nn

class ArabicNLPModel(nn.Module):
    def __init__(self, vocab_size=32000, d_model=512):
        super().__init__()
        self.encoder = nn.TransformerEncoderLayer(
            d_model=d_model, nhead=8
        )
        print("IU ACM AI Team: Multilingual LLM Initialized.")

model = ArabicNLPModel()`,
  },
};

export function HeroTerminal({ onOpenJoinModal, onToggleTheme }: HeroTerminalProps) {
  const { lang, toggleLang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const inputId = useId();

  const [activeTab, setActiveTab] = useState<'code' | 'terminal' | 'output'>('code');
  const [selectedSnippet, setSelectedSnippet] = useState<'ts' | 'cpp' | 'py'>('ts');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Terminal state
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>(() => [
    {
      id: 'welcome-init',
      command: 'iu-acm --init',
      output: (
        <div className="space-y-1.5 text-xs">
          <div className="text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={13} />
            <span>IU ACM Chapter Shell v2.4 initialized successfully</span>
          </div>
          <p className="text-slate-400">
            Welcome! Type 'help' or 'مساعدة' to view available commands, or click the quick chips below:
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (activeTab === 'terminal' || activeTab === 'output') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab, isRunning]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SNIPPETS[selectedSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to history list for ArrowUp/Down
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();
    const time = new Date().toLocaleTimeString();

    let resultNode: React.ReactNode = null;

    if (lower === 'clear' || lower === 'cls' || lower === 'مسح') {
      setHistory([]);
      setCommandInput('');
      return;
    } else if (lower === 'help' || lower === 'مساعدة' || lower === '?') {
      resultNode = (
        <div className="space-y-2 text-xs py-1">
          <div className="text-[#e5c07b] font-bold">
            {lang === 'ar' ? 'الأوامر المتاحة في الطرفية:' : 'Available CLI Commands:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px]">
            <div><span className="text-[#61afef] font-bold">help / مساعدة</span> - {lang === 'ar' ? 'عرض قائمة المساعدة' : 'List commands'}</div>
            <div><span className="text-[#61afef] font-bold">run / تشغيل</span> - {lang === 'ar' ? 'تنفيذ وبناء الكود البرمجي' : 'Execute code snippet'}</div>
            <div><span className="text-[#61afef] font-bold">about / عن</span> - {lang === 'ar' ? 'نبذة عن الشعبة ورسالتها' : 'Chapter mission & info'}</div>
            <div><span className="text-[#61afef] font-bold">teams / الفرق</span> - {lang === 'ar' ? 'الفرق التقنية الثلاثة' : 'List 3 technical teams'}</div>
            <div><span className="text-[#61afef] font-bold">committees / اللجان</span> - {lang === 'ar' ? 'اللجان الإدارية الخمس' : 'List 5 chapter committees'}</div>
            <div><span className="text-[#61afef] font-bold">stats / إحصائيات</span> - {lang === 'ar' ? 'إحصائيات وأرقام الشعبة' : 'Display chapter metrics'}</div>
            <div><span className="text-[#61afef] font-bold">events / فعاليات</span> - {lang === 'ar' ? 'الفعاليات والمسابقات' : 'Upcoming contests'}</div>
            <div><span className="text-[#61afef] font-bold">join / انضمام</span> - {lang === 'ar' ? 'فتح استمارة التسجيل فوراً' : 'Launch membership modal'}</div>
            <div><span className="text-[#61afef] font-bold">theme / مظهر</span> - {lang === 'ar' ? 'تبديل الوضع الفاتح/الداكن' : 'Toggle dark/light mode'}</div>
            <div><span className="text-[#61afef] font-bold">lang / لغة</span> - {lang === 'ar' ? 'تبديل اللغة (EN / AR)' : 'Switch language (EN/AR)'}</div>
            <div><span className="text-[#61afef] font-bold">whoami</span> - {lang === 'ar' ? 'هوية المستخدم' : 'Identify current session'}</div>
            <div><span className="text-[#61afef] font-bold">clear / مسح</span> - {lang === 'ar' ? 'مسح شاشة الطرفية' : 'Clear terminal log'}</div>
          </div>
        </div>
      );
    } else if (lower === 'run' || lower === 'تشغيل' || lower === 'npm start') {
      triggerRun();
      return;
    } else if (lower === 'about' || lower === 'عن' || lower === 'عن الشعبة') {
      resultNode = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="text-[#61afef] font-bold">
            {lang === 'ar' ? 'شعبة ACM بالجامعة الإسلامية بالمدينة المنورة:' : 'IU ACM Student Chapter Overview:'}
          </div>
          <p>
            {lang === 'ar'
              ? 'الشعبة الطلابية الرسمية التابعة لجمعية آلات الحوسبة الدولية (ACM) بمقر كلية الحاسب الآلي ونظم المعلومات. نرحب بكافة طلاب الجامعة وطلاب كلية الهندسة لصناعة التميز في الحوسبة والذكاء الاصطناعي.'
              : 'Official collegiate branch of the Association for Computing Machinery (ACM), based at the College of Computing and Information Systems. Welcoming all IU students and engineering peers to achieve computing mastery.'}
          </p>
        </div>
      );
    } else if (lower === 'teams' || lower === 'الفرق' || lower === 'tracks') {
      resultNode = (
        <div className="space-y-1.5 text-xs">
          <div className="text-[#e5c07b] font-bold">
            {lang === 'ar' ? 'الفرق التقنية الثلاثة (اللجنة التقنية):' : '3 Specialized Technical Teams:'}
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li><strong className="text-[#61afef]">1. Competitive Programming:</strong> C++, ICPC, SCPC, Dynamic Programming</li>
            <li><strong className="text-[#61afef]">2. Artificial Intelligence:</strong> PyTorch, LLMs, Arabic NLP, Computer Vision</li>
            <li><strong className="text-[#61afef]">3. Robotics & Embedded:</strong> ROS 2, ESP32, STM32, Sensor telemetry</li>
          </ul>
        </div>
      );
    } else if (lower === 'committees' || lower === 'اللجان') {
      resultNode = (
        <div className="space-y-1.5 text-xs">
          <div className="text-[#e5c07b] font-bold">
            {lang === 'ar' ? 'اللجان التنظيمية الخمس:' : '5 Core Chapter Committees:'}
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-300">
            <li><span className="text-white font-medium">Executive Board</span> (Appointed Governance)</li>
            <li><span className="text-white font-medium">Development & Infrastructure</span> (Platforms, CI/CD, Bots)</li>
            <li><span className="text-white font-medium">Media & Design</span> (Branding, Content, Documentation)</li>
            <li><span className="text-white font-medium">Advisory & Mentorship</span> (Academic Support, Year 1 to 5)</li>
            <li><span className="text-white font-medium">Technical Committee</span> (CP, AI, and Robotics Teams)</li>
          </ol>
        </div>
      );
    } else if (lower === 'stats' || lower === 'إحصائيات') {
      resultNode = (
        <div className="grid grid-cols-2 gap-2 text-xs py-1">
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <div className="text-base font-bold text-[#61afef]">500+</div>
            <div className="text-slate-400">{lang === 'ar' ? 'عضو طلابي نشط' : 'Active Members'}</div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <div className="text-base font-bold text-[#e5c07b]">25+</div>
            <div className="text-slate-400">{lang === 'ar' ? 'ورشة ومسابقة سنوياً' : 'Events / Year'}</div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <div className="text-base font-bold text-emerald-400">5</div>
            <div className="text-slate-400">{lang === 'ar' ? 'لجان تنظيمية' : 'Committees'}</div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <div className="text-base font-bold text-purple-400">3</div>
            <div className="text-slate-400">{lang === 'ar' ? 'فرق تقنية متخصصة' : 'Technical Teams'}</div>
          </div>
        </div>
      );
    } else if (lower === 'events' || lower === 'فعاليات' || lower === 'مسابقات') {
      resultNode = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="text-[#e5c07b] font-bold">
            {lang === 'ar' ? 'أبرز الفعاليات القادمة:' : 'Upcoming Chapter Highlights:'}
          </div>
          <div>• <strong>Oct 14:</strong> Dynamic Programming & Memoization Deep Dive (Lab B-204)</div>
          <div>• <strong>Oct 24:</strong> IU Collegiate Code Sprint 2026: Qualifying Round</div>
          <div>• <strong>Nov 03:</strong> Scalable Microservices with Go & gRPC</div>
          <div>• <strong>Dec 18:</strong> IU ACM Annual 48h Hackathon: Tech for Madinah</div>
        </div>
      );
    } else if (lower === 'join' || lower === 'انضمام' || lower === 'تسجيل') {
      resultNode = (
        <div className="space-y-1 text-xs text-emerald-400">
          <div>🚀 {lang === 'ar' ? 'جاري فتح استمارة التسجيل في الشعبة...' : 'Launching IU ACM Membership Application...'}</div>
          <div className="text-slate-400">{lang === 'ar' ? 'إذا لم يفتح النموذج تلقائياً، يمكنك النقر على زر انضم للشعبة.' : 'Modal opened! Fill out your details to join the cohort.'}</div>
        </div>
      );
      onOpenJoinModal();
    } else if (lower === 'theme' || lower === 'مظهر') {
      if (onToggleTheme) {
        onToggleTheme();
        resultNode = (
          <div className="text-xs text-emerald-400">
            🎨 {lang === 'ar' ? 'تم تبديل مظهر الموقع!' : 'Theme toggled successfully!'}
          </div>
        );
      }
    } else if (lower === 'lang' || lower === 'لغة' || lower === 'ar' || lower === 'en') {
      toggleLang();
      resultNode = (
        <div className="text-xs text-[#e5c07b]">
          🌐 {lang === 'ar' ? 'Language switched to English!' : 'تم تبديل لغة الموقع إلى العربية!'}
        </div>
      );
    } else if (lower === 'whoami') {
      resultNode = (
        <div className="text-xs text-slate-300">
          visitor@iu-acm • <span className="text-[#61afef] font-semibold">{lang === 'ar' ? 'مبتكر المستقبل بالجامعة الإسلامية بالمدينة المنورة' : 'Future Innovator at Islamic University of Madinah'}</span>
        </div>
      );
    } else if (lower === 'sudo') {
      resultNode = (
        <div className="text-xs text-[#e5c07b] font-bold">
          👑 {lang === 'ar' ? 'مُنحت كافة الصلاحيات! مرحباً بك يا قائد الشعبة القادم.' : 'Permission granted: Welcome, Chapter Leader & Innovator!'}
        </div>
      );
    } else if (lower.startsWith('cat ') || lower.startsWith('view ')) {
      const target = lower.split(' ')[1];
      resultNode = (
        <div className="text-xs text-slate-300 font-mono">
          <div className="text-slate-500">// Viewing: {target}</div>
          <pre className="p-2 bg-black/40 rounded mt-1 overflow-x-auto text-[11px]">
            {SNIPPETS[selectedSnippet].code}
          </pre>
        </div>
      );
    } else {
      resultNode = (
        <div className="text-xs text-rose-400 font-mono">
          command not found: {trimmed}. {lang === 'ar' ? "اكتب 'help' لعرض الأوامر." : "Type 'help' for command list."}
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: resultNode,
        timestamp: time,
      },
    ]);

    setCommandInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(commandInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCommandInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommandInput('');
      } else {
        setHistoryIndex(nextIndex);
        setCommandInput(commandHistory[nextIndex]);
      }
    }
  };

  const triggerRun = () => {
    setIsRunning(true);
    setActiveTab('output');

    setTimeout(() => {
      setIsRunning(false);
      const time = new Date().toLocaleTimeString();
      const currentSnippet = SNIPPETS[selectedSnippet];

      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: `run ${currentSnippet.filename}`,
          output: (
            <div className="space-y-1.5 text-xs text-slate-300 font-mono">
              <div className="text-[#61afef] flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#e5c07b]" />
                <span>[BUILD] Compiling {currentSnippet.language} target...</span>
              </div>
              <div className="text-slate-400">[LINK] Bundling @iu-acm/foundations &amp; sub-modules...</div>
              <div className="text-emerald-400 font-bold">[OK] Zero errors, 5 committees &amp; 3 technical teams connected!</div>
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-300 font-mono text-[11px]">
                IU ACM :: Online &amp; Welcoming All Islamic University Students 🚀
              </div>
              <div className="text-slate-400 text-[10px]">Finished in 382ms &bull; Memory: 14.8MB</div>
            </div>
          ),
          timestamp: time,
        },
      ]);
    }, 750);
  };

  const quickChips = [
    { label: lang === 'ar' ? 'مساعدة' : 'help', cmd: 'help' },
    { label: lang === 'ar' ? 'تشغيل' : 'run', cmd: 'run' },
    { label: lang === 'ar' ? 'الفرق' : 'teams', cmd: 'teams' },
    { label: lang === 'ar' ? 'اللجان' : 'committees', cmd: 'committees' },
    { label: lang === 'ar' ? 'إحصائيات' : 'stats', cmd: 'stats' },
    { label: lang === 'ar' ? 'فعاليات' : 'events', cmd: 'events' },
    { label: lang === 'ar' ? 'انضمام' : 'join', cmd: 'join' },
    { label: lang === 'ar' ? 'مسح' : 'clear', cmd: 'clear' },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0B1320] border-2 border-[#2c5f85]/40 shadow-2xl overflow-hidden font-mono text-xs text-slate-200 flex flex-col h-[490px] transition-all">
      
      {/* 1. Window Header Bar */}
      <div className="bg-[#070D18] px-3.5 py-2.5 flex items-center justify-between border-b border-[#2c5f85]/30 select-none">
        
        {/* Left: Window Dots & Title / Tabs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => executeCommand('clear')}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" 
              title="Clear Terminal"
              aria-label="Clear Terminal"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <button
              onClick={triggerRun}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors cursor-pointer"
              title="Run Code"
              aria-label="Run Code"
            />
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#2c5f85] text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 size={13} />
              <span>{t.hero.tabCode}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('terminal');
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-[#2c5f85] text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TerminalIcon size={13} />
              <span>{t.hero.tabTerminal}</span>
            </button>

            <button
              onClick={() => setActiveTab('output')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer relative ${
                activeTab === 'output'
                  ? 'bg-[#2c5f85] text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu size={13} />
              <span>{t.hero.tabOutput}</span>
              {isRunning && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              )}
            </button>
          </div>
        </div>

        {/* Right: Quick Run & Copy Controls */}
        <div className="flex items-center gap-2">
          {/* Snippet selector when on Code Tab */}
          {activeTab === 'code' && (
            <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded px-1.5 py-0.5 border border-white/10 text-[10px]">
              {(['ts', 'cpp', 'py'] as const).map((snip) => (
                <button
                  key={snip}
                  onClick={() => setSelectedSnippet(snip)}
                  className={`px-1.5 py-0.5 rounded uppercase font-bold transition-colors cursor-pointer ${
                    selectedSnippet === snip
                      ? 'bg-[#c49b57] text-[#070D18]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {snip}
                </button>
              ))}
            </div>
          )}

          {/* Run Code Button */}
          <button
            onClick={triggerRun}
            disabled={isRunning}
            className="flex items-center gap-1 px-2.5 py-1 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded text-[11px] font-bold transition-all shadow-xs cursor-pointer disabled:opacity-50"
            title={t.hero.runCodeBtn}
          >
            {isRunning ? (
              <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Play size={12} className="fill-white" />
            )}
            <span className="hidden sm:inline">{isRunning ? 'Running...' : t.hero.runCodeBtn}</span>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-[11px] text-slate-300 transition-colors cursor-pointer"
            title={copied ? t.hero.copied : t.hero.copy}
            aria-label="Copy Code"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* 2. Body Area (Tab Dependent) */}
      <div className="flex-1 overflow-hidden relative flex flex-col">
        
        {/* Tab A: Code View */}
        {activeTab === 'code' && (
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto leading-relaxed scrollbar-thin text-[12px] sm:text-[13px]">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#61afef]">
                <FileCode size={13} />
                <span>{SNIPPETS[selectedSnippet].filename}</span>
              </span>
              <span className="text-[#e5c07b] text-[10px] uppercase font-bold">
                {SNIPPETS[selectedSnippet].language}
              </span>
            </div>

            <pre className="font-mono text-slate-300 whitespace-pre">
              <code>
                {selectedSnippet === 'ts' && (
                  <>
                    <span className="text-slate-500 italic">// Islamic University of Madinah ACM Chapter</span>{'\n'}
                    <span className="text-[#4C8EBE]">import</span> {'{'} <span className="text-[#D9B159]">Student</span>, <span className="text-[#D9B159]">Innovator</span> {'}'} <span className="text-[#4C8EBE]">from</span> <span className="text-[#98C379]">'@iu-acm/core'</span>;{'\n\n'}
                    <span className="text-[#C678DD]">export class</span> <span className="text-[#D9B159]">IUACMChapter</span> <span className="text-[#C678DD]">implements</span> <span className="text-[#D9B159]">StudentChapter</span> {'{'}{'\n'}
                    {'  '}<span className="text-slate-400">readonly</span> university = <span className="text-[#98C379]">'IU Madinah'</span>;{'\n'}
                    {'  '}<span className="text-slate-400">readonly</span> faculty = <span className="text-[#98C379]">'CCIS (Computing &amp; Info Systems)'</span>;{'\n'}
                    {'  '}<span className="text-slate-400">readonly</span> committees = [<span className="text-[#98C379]">'Executive'</span>, <span className="text-[#98C379]">'Dev &amp; Infra'</span>, <span className="text-[#98C379]">'Media'</span>, <span className="text-[#98C379]">'Advisory'</span>, <span className="text-[#98C379]">'Technical'</span>];{'\n'}
                    {'  '}<span className="text-slate-400">readonly</span> technicalTeams = [<span className="text-[#98C379]">'CP'</span>, <span className="text-[#98C379]">'AI'</span>, <span className="text-[#98C379]">'Robotics'</span>];{'\n\n'}
                    {'  '}<span className="text-[#61AFEF]">public async</span> <span className="text-[#61AFEF]">empower</span>(student: <span className="text-[#D9B159]">Student</span>) {'{'}{'\n'}
                    {'    '}<span className="text-[#C678DD]">await</span> student.joinTeam(<span className="text-[#98C379]">'CompetitiveProgramming'</span>);{'\n'}
                    {'    '}<span className="text-[#C678DD]">return</span> student.elevateToInnovator();{'\n'}
                    {'  '}{'}'}{'\n'}
                    {'}'}{'\n\n'}
                    <span className="text-[#61afef] font-medium">&#123;/* Chapter Status: 100% Active &amp; Enrolling */&#125;</span>
                  </>
                )}
                {selectedSnippet === 'cpp' && (
                  <>
                    <span className="text-slate-500 italic">// IU ACM Competitive Programming Sprint</span>{'\n'}
                    <span className="text-[#C678DD]">#include</span> <span className="text-[#98C379]">&lt;bits/stdc++.h&gt;</span>{'\n'}
                    <span className="text-[#4C8EBE]">using namespace</span> std;{'\n\n'}
                    <span className="text-[#4C8EBE]">void</span> <span className="text-[#61AFEF]">solve</span>() {'{'}{'\n'}
                    {'  '}<span className="text-[#C678DD]">int</span> n = 5; <span className="text-slate-500">// 5 Committees</span>{'\n'}
                    {'  '}vector&lt;string&gt; teams = {'{'}<span className="text-[#98C379]">\"CP\"</span>, <span className="text-[#98C379]">\"AI\"</span>, <span className="text-[#98C379]">\"Robotics\"</span>{'}'};{'\n'}
                    {'  '}cout &lt;&lt; <span className="text-[#98C379]">\"Ready for ICPC &amp; Saudi CPC 2026!\"</span> &lt;&lt; <span className="text-[#98C379]">'\\n'</span>;{'\n'}
                    {'}'}{'\n\n'}
                    <span className="text-[#C678DD]">int</span> <span className="text-[#61AFEF]">main</span>() {'{'}{'\n'}
                    {'  '}ios_base::sync_with_stdio(<span className="text-[#D9B159]">false</span>); cin.tie(NULL);{'\n'}
                    {'  '}solve();{'\n'}
                    {'  '}<span className="text-[#C678DD]">return</span> 0;{'\n'}
                    {'}'}
                  </>
                )}
                {selectedSnippet === 'py' && (
                  <>
                    <span className="text-slate-500 italic"># IU ACM Artificial Intelligence Team</span>{'\n'}
                    <span className="text-[#C678DD]">import</span> torch{'\n'}
                    <span className="text-[#C678DD]">import</span> torch.nn <span className="text-[#C678DD]">as</span> nn{'\n\n'}
                    <span className="text-[#C678DD]">class</span> <span className="text-[#D9B159]">ArabicNLPModel</span>(nn.Module):{'\n'}
                    {'  '}<span className="text-[#C678DD]">def</span> <span className="text-[#61AFEF]">__init__</span>(self, vocab_size=32000, d_model=512):{'\n'}
                    {'    '}<span className="text-[#4C8EBE]">super</span>().__init__(){'\n'}
                    {'    '}self.encoder = nn.TransformerEncoderLayer(d_model=d_model, nhead=8){'\n'}
                    {'    '}<span className="text-[#4C8EBE]">print</span>(<span className="text-[#98C379]">\"IU ACM AI Team: Multilingual LLM Initialized.\"</span>){'\n\n'}
                    model = ArabicNLPModel()
                  </>
                )}
              </code>
            </pre>
          </div>
        )}

        {/* Tab B & C: Terminal / Output Console */}
        {(activeTab === 'terminal' || activeTab === 'output') && (
          <div 
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed space-y-3 cursor-text scrollbar-thin"
          >
            {/* Terminal History */}
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-[#61afef] font-bold">visitor@iu-acm:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-[10px] text-slate-500 ml-auto">{item.timestamp}</span>
                </div>
                <div className="pl-3 border-l border-[#2c5f85]/30">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Progress when running */}
            {isRunning && (
              <div className="flex items-center gap-2 text-amber-400 py-1 font-mono animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Compiling &amp; executing {SNIPPETS[selectedSnippet].filename}...</span>
              </div>
            )}

            {/* Active Input Line in Terminal Tab */}
            {activeTab === 'terminal' && (
              <div className="flex items-center gap-2 pt-1">
                <label htmlFor={inputId} className="text-[#61afef] font-bold whitespace-nowrap">
                  visitor@iu-acm:~$
                </label>
                <div className="flex-1 relative flex items-center">
                  <input
                    id={inputId}
                    ref={inputRef}
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="help, run, teams, join..."
                    className="w-full bg-transparent border-none outline-none text-white font-mono text-[11px] sm:text-xs caret-[#c49b57]"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <span className="w-1.5 h-4 bg-[#c49b57] animate-pulse ml-0.5 inline-block" />
                </div>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>
        )}

      </div>

      {/* 3. Interactive Quick Commands Chips Bar */}
      <div className="bg-[#070D18] px-3 py-1.5 border-t border-[#2c5f85]/20 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        <span className="text-[10px] text-slate-400 uppercase font-bold shrink-0 mr-1 flex items-center gap-1">
          <TerminalIcon size={11} className="text-[#c49b57]" />
          <span>Quick:</span>
        </span>
        {quickChips.map((chip) => (
          <button
            key={chip.cmd}
            onClick={() => {
              setActiveTab('terminal');
              executeCommand(chip.cmd);
            }}
            className="px-2 py-0.5 bg-white/5 hover:bg-[#2c5f85]/30 hover:border-[#2c5f85] border border-white/10 rounded text-[10px] text-slate-300 hover:text-white transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* 4. Terminal Status Footer Bar */}
      <div className="bg-[#050A13] px-3.5 py-1.5 border-t border-[#2c5f85]/30 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 select-none">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <FolderGit2 size={11} />
            <span>main</span>
          </span>
          <span className="text-slate-600">•</span>
          <span>{SNIPPETS[selectedSnippet].language}</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#e5c07b] flex items-center gap-1 font-medium">
            <RotateCcw size={11} />
            <span>Interactive CLI</span>
          </span>
        </div>
      </div>

    </div>
  );
}
