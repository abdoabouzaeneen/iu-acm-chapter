import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_BENEFITS } from '../../i18n/translations';

interface BenefitsSectionProps {
  onOpenJoinModal: () => void;
}

export function BenefitsSection({ onOpenJoinModal }: BenefitsSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const benefits = LOCALIZED_BENEFITS[lang];

  return (
    <section id="benefits" className="w-full py-20 md:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C6B99]/10 border border-[#2C6B99]/20 text-[#2C6B99] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="font-mono text-[#C29B48]">&#123;</span> {t.benefits.badge} <span className="font-mono text-[#C29B48]">&#125;</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            {t.benefits.titlePrefix} <span className="text-[#2C6B99] dark:text-[#61afef]">{t.benefits.titleHighlight}</span>{t.benefits.titleSuffix}
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="bg-surface-container rounded-2xl border border-border hover:border-[#2C6B99]/40 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#2C6B99]/10 text-[#2C6B99] dark:text-[#61afef] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2C6B99] group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#C29B48]/15 text-[#C29B48] dark:text-[#e5c07b] font-bold">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-[#2C6B99] dark:group-hover:text-[#61afef] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border flex items-center gap-1.5 text-xs font-semibold text-[#2C6B99] dark:text-[#61afef] group-hover:translate-x-1 transition-transform">
                  <span>{t.benefits.availableNote}</span>
                  <ArrowRight size={13} className={isRtl ? 'rotate-180' : ''} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-surface-muted rounded-3xl border border-[#2C6B99]/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className={`space-y-2 ${isRtl ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
              {t.benefits.ctaTitle}
            </h3>
            <p className="text-sm text-text-secondary">
              {t.benefits.ctaSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3 bg-[#2C6B99] hover:bg-[#22547a] text-white rounded-xl text-sm font-semibold transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span className="text-[#C29B48] font-mono font-bold">&#123;</span>
            <span>{t.benefits.ctaButton}</span>
            <span className="text-[#C29B48] font-mono font-bold">&#125;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
