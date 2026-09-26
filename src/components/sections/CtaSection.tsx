import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRANSLATIONS } from '../../i18n/translations';

interface CtaSectionProps {
  onOpenJoinModal: () => void;
}

export function CtaSection({ onOpenJoinModal }: CtaSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section className="w-full py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2C6B99]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-b from-[#0B1526] to-[#060D1A] border-2 border-[#2C6B99]/50 p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Subtle Top Code Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#D9B159] mx-auto">
            <Sparkles size={14} className="text-[#D9B159]" />
            <span>{t.cta.badge}</span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.15]">
              {t.cta.titlePart1}{' '}
              <span className="text-[#4C8EBE] font-mono">&#123;</span>
              <span className="text-[#D9B159] px-1.5">{t.cta.titleHighlight}</span>
              <span className="text-[#4C8EBE] font-mono">&#125;</span>{' '}
              {t.cta.titlePart2}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.cta.subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenJoinModal}
              className="px-8 py-4 bg-[#2C6B99] hover:bg-[#22547a] text-white rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 group cursor-pointer"
            >
              <span className="text-[#D9B159] font-mono font-bold">&#123;</span>
              <span>{t.cta.applyBtn}</span>
              <span className="text-[#D9B159] font-mono font-bold">&#125;</span>
              <ArrowRight size={17} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 rounded-xl font-medium text-sm sm:text-base transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>{t.cta.githubBtn}</span>
            </a>
          </div>

          {/* Guarantee / Requirement footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#4C8EBE]" />
              <span>{t.cta.guarantee1}</span>
            </div>
            <span>&bull;</span>
            <div>{t.cta.guarantee2}</div>
            <span>&bull;</span>
            <div>{t.cta.guarantee3}</div>
          </div>

        </div>
      </div>
    </section>
  );
}
