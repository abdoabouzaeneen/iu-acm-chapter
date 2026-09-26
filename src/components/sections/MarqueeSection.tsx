import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRANSLATIONS, LOCALIZED_MARQUEE } from '../../i18n/translations';

export function MarqueeSection() {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const statements = LOCALIZED_MARQUEE[lang];

  return (
    <section className="w-full py-14 sm:py-18 bg-surface border-y border-border/80 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c5f85]/10 border border-[#2c5f85]/20 text-[#2c5f85] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
          <span className="font-mono text-[#c49b57]">&#123;</span> {t.marquee.badge} <span className="font-mono text-[#c49b57]">&#125;</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-text-primary tracking-tight">
          {t.marquee.titlePart1} <span className="text-[#2c5f85] dark:text-[#61afef]">{t.marquee.titlePart2}</span>, <span className="text-[#c49b57] dark:text-[#e5c07b]">{t.marquee.titlePart3}</span>
        </h2>

        <p className="text-text-secondary text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {t.marquee.subtitle}
        </p>
      </div>

      {/* Infinite Marquee Ribbon Container */}
      <div className="marquee-container bg-[#0B1320] text-white py-5 sm:py-6 border-y-2 border-[#2c5f85]/40 shadow-2xl relative select-none">
        
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-linear-to-r from-[#0B1320] via-[#0B1320]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-linear-to-l from-[#0B1320] via-[#0B1320]/80 to-transparent z-10" />

        {/* Single Bar Infinite Scroll */}
        <div className="overflow-hidden flex" dir="ltr">
          <div className={`marquee-track text-sm sm:text-lg lg:text-xl ${isRtl ? 'font-arabic' : ''}`}>
            {/* Group 1 */}
            <div className="marquee-item text-white">
              {statements.map((stmt, idx) => (\n                <React.Fragment key={`stmt-a-${idx}`}>
                  <span className={`${isRtl ? 'font-bold tracking-normal' : "font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[2px] uppercase"}`}>
                    {stmt}
                  </span>
                  <span className="dot">•</span>
                </React.Fragment>
              ))}
            </div>
            {/* Group 2 (Identical duplicate for seamless continuous loop) */}
            <div className="marquee-item text-white">
              {statements.map((stmt, idx) => (
                <React.Fragment key={`stmt-b-${idx}`}>
                  <span className={`${isRtl ? 'font-bold tracking-normal' : "font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[2px] uppercase"}`}>
                    {stmt}
                  </span>
                  <span className="dot">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
