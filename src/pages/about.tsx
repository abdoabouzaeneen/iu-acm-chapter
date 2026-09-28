import { Link } from 'wouter';
import { CheckCircle2, Compass, Cpu, Target, Users, ArrowLeft } from 'lucide-react';
import { AcmLogo } from '../components/common/AcmLogo';
import { useLanguage } from '../i18n/context';
import { TRANSLATIONS } from '../i18n/translations';

const PILLAR_ICONS = [Target, Users, Compass, Cpu];

interface AboutPageProps {
  onOpenJoinModal?: () => void;
}

export function AboutPage({ onOpenJoinModal }: AboutPageProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-surface py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between border-b border-border/70 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-[#2c5f85]/40 text-text-secondary hover:text-[#2c5f85] text-xs font-semibold bg-surface transition-all group cursor-pointer"
          >
            <ArrowLeft size={16} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            <span>{lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}</span>
          </Link>

          <span className="text-xs font-mono text-text-secondary">
            IU ACM Chapter &bull; {lang === 'en' ? 'About' : 'عن الشعبة'}
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c5f85]/10 border border-[#2c5f85]/20 text-[#2c5f85] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="font-mono text-[#c49b57]">&#123;</span> {t.about.badge} <span className="font-mono text-[#c49b57]">&#125;</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            {t.about.titlePart1} <span className="text-[#2c5f85]">{t.about.titlePart2}</span> &amp; <span className="text-[#c49b57]">{t.about.titlePart3}</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Brand Focus Card & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-muted p-8 sm:p-12 rounded-3xl border border-[#2c5f85]/25 shadow-xs">
          
          <div className="lg:col-span-6 space-y-6">
            <AcmLogo size="lg" showSubtitle={true} />

            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            <div className="pt-2 space-y-2.5">
              {t.about.bullets.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 size={16} className="text-[#2c5f85] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs font-bold text-[#2c5f85]">
                {t.about.quoteTitle}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#c49b57]/15 text-[#c49b57] font-bold">
                {t.about.quoteBadge}
              </span>
            </div>

            <blockquote className="text-text-primary text-base sm:text-lg font-display italic leading-relaxed">
              {t.about.quote}
            </blockquote>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-text-secondary font-mono">
              <span>{t.about.quoteAuthor}</span>
              <span className="text-[#2c5f85] font-bold">{t.about.quoteAffiliation}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary">
              {lang === 'en' ? 'Core Operational Pillars' : 'أركان عمل الشعبة'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <div
                  key={idx}
                  className="bg-surface p-6 sm:p-7 rounded-2xl border border-border hover:border-[#2c5f85]/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#2c5f85]/10 text-[#2c5f85] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#2c5f85] group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-mono text-[#c49b57] font-bold">
                    <span>{t.about.pillarPrefix}{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        {onOpenJoinModal && (
          <div className="text-center py-8 bg-surface-muted rounded-2xl border border-border space-y-4">
            <h3 className="text-xl font-display font-bold text-text-primary">
              {lang === 'en' ? 'Ready to Join our Chapter Community?' : 'هل أنت مستعد للانضمام لمجتمع الشعبة؟'}
            </h3>
            <div>
              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-mono text-[#c49b57] font-bold">&#123;</span>
                <span>{t.nav.joinChapter}</span>
                <span className="font-mono text-[#c49b57] font-bold">&#125;</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AboutPage;
