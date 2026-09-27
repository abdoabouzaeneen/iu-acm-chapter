import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_FAQS } from '../../i18n/translations';

export function FaqSection() {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const faqs = LOCALIZED_FAQS[lang];

  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-surface-muted border-t border-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C6B99]/10 border border-[#2C6B99]/20 text-[#2C6B99] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="font-mono text-[#C29B48]">&#123;</span> {t.faq.badge} <span className="font-mono text-[#C29B48]">&#125;</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            {t.faq.titlePrefix} <span className="text-[#2C6B99] dark:text-[#61afef]">{t.faq.titleHighlight}</span>
          </h2>

          <p className="text-text-secondary text-base leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-surface rounded-2xl border border-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-text-primary">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#2C6B99] text-white' : 'bg-surface-muted text-text-secondary'
                  }`}>
                    <ChevronDown size={17} />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-5 pb-6 sm:px-6 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-border/60 pt-4 animate-in fade-in duration-150 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer */}
        <div className="text-center pt-4">
          <p className="text-sm text-text-secondary">
            {t.faq.contactText}{' '}
            <a
              href="mailto:acm@iu.edu.sa"
              className="text-[#2C6B99] dark:text-[#61afef] font-semibold underline underline-offset-4 hover:text-[#22547a] inline-flex items-center gap-1"
              dir="ltr"
            >
              <Mail size={14} />
              <span>acm@iu.edu.sa</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
