import { Link } from 'wouter';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { TRANSLATIONS } from '../i18n/translations';

export function JourneyPage() {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-surface flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8 bg-surface-muted p-8 sm:p-12 rounded-3xl border border-[#2c5f85]/20 shadow-xs relative overflow-hidden">
        
        {/* Subtle decorative background blur */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#2c5f85]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#c49b57]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Compass / Milestones Icon */}
        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2c5f85]/10 text-[#2c5f85] mx-auto shadow-xs">
          <Compass size={32} className="animate-spin-slow" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c49b57] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c49b57]"></span>
          </span>
        </div>

        {/* "Soon" Badge / State */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#c49b57]/15 border border-[#c49b57]/40 text-[#c49b57] font-mono text-xs font-bold uppercase tracking-wider animate-pulse">
            <Sparkles size={13} />
            <span>{t.journey?.badge || (lang === 'en' ? 'Soon' : 'قريباً')}</span>
          </span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-text-primary tracking-tight">
            <span className="text-[#2c5f85] font-mono">&#123;</span>{' '}
            <span>{t.journey?.title || (lang === 'en' ? 'Our Journey' : 'رحلتنا')}</span>{' '}
            <span className="text-[#2c5f85] font-mono">&#125;</span>
          </h1>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {t.journey?.subtitle ||
              (lang === 'en'
                ? 'Our chapter milestones, historical journey, and future roadmap are being crafted. We look forward to sharing our story with you very soon.'
                : 'نعمل حالياً على توثيق محطات وإنجازات الشعبة وخارطة طريقنا للمستقبل. نسعد بمشاركتها معكم قريباً!')}
          </p>
        </div>

        {/* Back-to-Home Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md group cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className={`transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
            />
            <span>{t.journey?.backHome || (lang === 'en' ? 'Back to Home' : 'العودة للرئيسية')}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default JourneyPage;
