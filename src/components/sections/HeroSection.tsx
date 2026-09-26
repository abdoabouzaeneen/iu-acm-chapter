import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Code2, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_STATS } from '../../i18n/translations';
import { HeroTerminal } from './HeroTerminal';

interface TypewriterSubheadingProps {
  phrases: string[];
}

function TypewriterSubheading({ phrases }: TypewriterSubheadingProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const current = phrases[phraseIndex] || phrases[0];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 38);
      } else {
        // Hold completed sentence for 15 seconds
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 15000);
      }
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 16);
      } else {
        timer = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setPhase('typing');
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, phase, phraseIndex, phrases]);

  return (
    <p className="text-lg sm:text-xl font-display font-medium text-text-secondary">
      <span className="text-[#2c5f85] dark:text-[#61afef] font-mono font-bold mr-1">&gt;</span>
      <span>{displayText}</span>
      <span className="inline-block w-2 h-5 bg-[#c49b57] ml-1 animate-pulse align-middle" />
    </p>
  );
}

interface HeroSectionProps {
  onOpenJoinModal: () => void;
  onToggleTheme?: () => void;
}

export function HeroSection({ onOpenJoinModal, onToggleTheme }: HeroSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-surface">
      {/* Background Decorator Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#2c5f85]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#c49b57]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid: Headline & Interactive IDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission & Call To Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Chapter Affiliation Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2c5f85]/30 bg-[#2c5f85]/5 text-[#2c5f85] dark:text-[#61afef] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#c49b57] animate-pulse" />
              <span>{t.hero.officialBadge}</span>
              <span className="text-[#2c5f85]/40">&bull;</span>
              <span>{t.hero.universityBadge}</span>
            </div>

            {/* Core Brand Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-[1.12]">
              {t.hero.headlinePrefix}{' '}
              <span className="inline-block">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2c5f85] dark:text-[#61afef] font-medium">&#123;</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#c49b57] dark:text-[#e5c07b] px-1.5 font-bold">{t.hero.headlineHighlight}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2c5f85] dark:text-[#61afef] font-medium">&#125;</span>
              </span>
            </h1>

            {/* Animated Typing Subheading with key={lang} for clean reset */}
            <div className="min-h-[56px] flex items-center">
              <TypewriterSubheading key={lang} phrases={t.hero.phrases} />
            </div>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              {t.hero.narrative}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenJoinModal}
                className="px-7 py-3.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span className="text-[#c49b57] font-mono font-bold">&#123;</span>
                <span>{t.hero.joinBtn}</span>
                <span className="text-[#c49b57] font-mono font-bold">&#125;</span>
                <ArrowRight size={17} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </button>

              <a
                href="#teams"
                className="px-6 py-3.5 bg-surface-muted hover:bg-[#2c5f85]/10 text-text-primary border border-[#2c5f85]/25 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Code2 size={17} className="text-[#2c5f85] dark:text-[#61afef]" />
                <span>{t.hero.exploreTeamsBtn}</span>
              </a>

              <a
                href="#committees"
                className="px-5 py-3.5 text-text-secondary hover:text-[#2c5f85] dark:hover:text-[#61afef] text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <span>{t.hero.committeesBtn}</span>
                <ChevronRight size={15} className={isRtl ? 'rotate-180' : ''} />
              </a>
            </div>

            {/* Micro Badge Row */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-text-secondary font-mono border-t border-border">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#2c5f85] dark:text-[#61afef]" />
                <span>{t.hero.badgeCommittees}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#c49b57]" />
                <span>{t.hero.badgeTeams}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-[#2c5f85] dark:text-[#61afef]" />
                <span>{t.hero.badgeOpen}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Rich Interactive Terminal Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <HeroTerminal 
              onOpenJoinModal={onOpenJoinModal} 
              onToggleTheme={onToggleTheme} 
            />
          </motion.div>
        </div>

        {/* Chapter Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {LOCALIZED_STATS[lang].map((stat, i) => (
            <div
              key={i}
              className="bg-surface-container p-6 rounded-2xl border border-[#2c5f85]/20 hover:border-[#2c5f85]/50 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-[#2c5f85] dark:text-[#61afef] tracking-tight group-hover:opacity-90">
                {stat.value}
              </div>
              <div className="font-display font-bold text-sm text-[#c49b57] dark:text-[#e5c07b] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
