import { motion } from 'framer-motion';
import { Terminal, Code2, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_STATS } from '../../i18n/translations';
import campusBg from '../../assets/university_campus.jpg';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export function HeroSection({ onOpenJoinModal }: HeroSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section
      className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cover bg-no-repeat bg-[center_top] md:bg-center bg-scroll md:bg-fixed"
      style={{ backgroundImage: `url(${campusBg})` }}
    >
      {/* Light Clean Adjusted Overlay for Desktop and Mobile */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-br from-white/92 via-white/85 to-[#f7fafc]/80 sm:from-white/88 sm:via-white/78 sm:to-[#f7fafc]/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 z-10">
        
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          {/* Chapter Affiliation Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2c5f85]/30 bg-white/90 backdrop-blur-xs text-[#2c5f85] text-xs font-mono font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#c49b57] animate-pulse" />
            <span>{t.hero.officialBadge}</span>
            <span className="text-[#2c5f85]/40">&bull;</span>
            <span>{t.hero.universityBadge}</span>
          </div>

          {/* Core Brand Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-[1.12]">
            {t.hero.headlinePrefix}{' '}
            <span className="inline-block">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2c5f85] font-medium">&#123;</span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#c49b57] px-1.5 font-bold">{t.hero.headlineHighlight}</span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2c5f85] font-medium">&#125;</span>
            </span>
          </h1>

          {/* Clean Static Professional Subtitle Box with Subtle Cursor Blink */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/90 backdrop-blur-xs border border-[#2c5f85]/20 shadow-xs text-sm sm:text-base md:text-lg font-mono font-medium text-[#2c5f85]">
              <span className="font-bold text-[#2c5f85]">&gt;</span>
              <span>{t.hero.staticSubtitle}</span>
              <span className="inline-block w-2 h-4 sm:h-5 bg-[#c49b57] animate-pulse align-middle" />
            </div>
          </div>

          {/* Narrative Body */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t.hero.narrative}
          </p>

          {/* Refined Action Buttons (Responsive Layout) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            {/* Primary Join Button matching navbar button style precisely */}
            <button
              onClick={onOpenJoinModal}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span className="font-mono text-[#c49b57] font-bold">&#123;</span>
              <span>{t.hero.joinBtn}</span>
              <span className="font-mono text-[#c49b57] font-bold">&#125;</span>
            </button>

            <a
              href="#teams"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-text-primary border border-[#2c5f85]/25 hover:border-[#2c5f85]/50 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Code2 size={17} className="text-[#2c5f85]" />
              <span>{t.hero.exploreTeamsBtn}</span>
            </a>

            <a
              href="#committees"
              className="px-4 py-2.5 text-text-secondary hover:text-[#2c5f85] text-sm font-semibold transition-colors flex items-center justify-center sm:justify-start gap-1.5"
            >
              <span>{t.hero.committeesBtn}</span>
              <ChevronRight size={15} className={isRtl ? 'rotate-180' : ''} />
            </a>
          </div>

          {/* Micro Badge Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-text-secondary font-mono border-t border-border/80">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#2c5f85]/15">
              <Terminal size={14} className="text-[#2c5f85]" />
              <span>{t.hero.badgeCommittees}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#c49b57]/25">
              <Sparkles size={14} className="text-[#c49b57]" />
              <span>{t.hero.badgeTeams}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#2c5f85]/15">
              <Layers size={14} className="text-[#2c5f85]" />
              <span>{t.hero.badgeOpen}</span>
            </div>
          </div>
        </motion.div>

        {/* Chapter Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {LOCALIZED_STATS[lang].map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#2c5f85]/20 hover:border-[#2c5f85]/50 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-[#2c5f85] tracking-tight group-hover:opacity-90">
                {stat.value}
              </div>
              <div className="font-display font-bold text-sm text-[#c49b57] mt-1">
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
