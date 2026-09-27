import { CheckCircle2, Compass, Cpu, Target, Users } from 'lucide-react';
import { AcmLogo } from '../common/AcmLogo';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS } from '../../i18n/translations';

const PILLAR_ICONS = [Target, Users, Compass, Cpu];

export function AboutSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-surface-muted border-y border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c5f85]/10 border border-[#2c5f85]/20 text-[#2c5f85] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="font-mono text-[#c49b57]">&#123;</span> {t.about.badge} <span className="font-mono text-[#c49b57]">&#125;</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            {t.about.titlePart1} <span className="text-[#2c5f85] dark:text-[#61afef]">{t.about.titlePart2}</span> &amp; <span className="text-[#c49b57] dark:text-[#e5c07b]">{t.about.titlePart3}</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Brand Focus Card & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface p-8 sm:p-12 rounded-3xl border border-[#2c5f85]/25 shadow-sm">
          
          <div className="lg:col-span-6 space-y-6">
            <AcmLogo size="lg" showSubtitle={true} />

            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            <div className="pt-2 space-y-2.5">
              {t.about.bullets.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-text-primary">
                  <CheckCircle2 size={16} className="text-[#2c5f85] dark:text-[#61afef] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 bg-surface-muted p-6 sm:p-8 rounded-2xl border border-border space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs font-bold text-[#2c5f85] dark:text-[#61afef]">
                {t.about.quoteTitle}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#c49b57]/15 text-[#c49b57] dark:text-[#e5c07b] font-bold">
                {t.about.quoteBadge}
              </span>
            </div>

            <blockquote className="text-text-primary text-base sm:text-lg font-display italic leading-relaxed">
              {t.about.quote}
            </blockquote>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-text-secondary font-mono">
              <span>{t.about.quoteAuthor}</span>
              <span className="text-[#2c5f85] dark:text-[#61afef] font-bold">{t.about.quoteAffiliation}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx];
            return (
              <div
                key={idx}
                className="bg-surface p-6 sm:p-7 rounded-2xl border border-border hover:border-[#2c5f85]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2c5f85]/10 text-[#2c5f85] dark:text-[#61afef] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#2c5f85] group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">
                  <span>{t.about.pillarPrefix}{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
