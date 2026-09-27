import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS } from '../../i18n/translations';

interface AcmLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  forceTheme?: 'light' | 'dark';
  className?: string;
}

export function AcmLogo({
  size = 'md',
  showSubtitle = true,
  forceTheme,
  className = ''
}: AcmLogoProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  // Sizing scale for the HTML logo badge
  const sizeClasses = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-4xl sm:text-5xl',
    xl: 'text-5xl sm:text-6xl'
  }[size];

  // Specific bracket/text colors if theme is forced, otherwise use CSS variables with .dark support
  const bracketColorClass = forceTheme === 'light'
    ? 'text-[#2c5f85]'
    : forceTheme === 'dark'
    ? 'text-[#61afef]'
    : 'text-[var(--color-logo-bracket)]';

  const textColorClass = forceTheme === 'light'
    ? 'text-[#c49b57]'
    : forceTheme === 'dark'
    ? 'text-[#e5c07b]'
    : 'text-[var(--color-logo-text)]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* HTML Logo Badge as defined in light_Mode_Logo.html & dark_Mode_Logo.html */}
      <div
        className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[-0.5px] flex items-center leading-none ${sizeClasses}`}
        aria-label="IU ACM Logo"
      >
        <span className={`${bracketColorClass} font-medium transition-colors duration-200`}>
          &#123;
        </span>
        <span className={`${textColorClass} font-bold mx-[2px] lowercase transition-colors duration-200`}>
          acm
        </span>
        <span className={`${bracketColorClass} font-medium transition-colors duration-200`}>
          &#125;
        </span>
      </div>

      {/* Optional University Chapter Subtitle */}
      {showSubtitle && (
        <div className={`flex flex-col leading-tight ${isRtl ? 'text-right border-r-2 pr-3' : 'text-left border-l-2 pl-3'} border-[#2c5f85]/30 dark:border-[#61afef]/30`}>
          <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-text-primary">
            {t.logo.chapterTitle}
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-text-secondary tracking-wide">
            {t.logo.universitySubtitle}
          </span>
        </div>
      )}
    </div>
  );
}
