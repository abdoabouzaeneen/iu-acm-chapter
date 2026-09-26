import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Languages } from 'lucide-react';
import { AcmLogo } from './AcmLogo';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRANSLATIONS, LOCALIZED_NAV_LINKS } from '../../i18n/translations';

interface NavbarProps {
  onOpenJoinModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ onOpenJoinModal, isDark, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, isRtl, toggleLang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const navLinks = LOCALIZED_NAV_LINKS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-xs border-b border-[#2c5f85]/20'
          : 'bg-surface border-b border-border/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand HTML Logo & Chapter Title */}
        <a href="#" className="flex items-center gap-2 group">
          <AcmLogo size="md" showSubtitle={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-text-secondary hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:bg-[#2c5f85]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language Switcher (EN <-> AR) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-text-secondary hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85]/40 bg-surface transition-all text-xs font-semibold cursor-pointer"
            aria-label="Switch Language"
            title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
          >
            <Languages size={16} className="text-[#2c5f85] dark:text-[#61afef]" />
            <span>{t.nav.languageLabel}</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl border border-border text-text-secondary hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85]/40 bg-surface transition-all cursor-pointer"
            aria-label="Toggle Theme"
            title={isDark ? t.nav.switchThemeLight : t.nav.switchThemeDark}
          >
            {isDark ? <Sun size={18} className="text-[#e5c07b]" /> : <Moon size={18} className="text-[#2c5f85]" />}
          </button>

          {/* Join Chapter Button with Syntax Braces */}
          <button
            onClick={onOpenJoinModal}
            className="px-5 py-2.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">&#123;</span>
            <span>{t.nav.joinChapter}</span>
            <span className="font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">&#125;</span>
            <ArrowRight size={15} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-[#2c5f85] bg-surface flex items-center gap-1 text-xs font-bold"
            aria-label="Switch Language"
          >
            <Languages size={16} className="text-[#2c5f85] dark:text-[#61afef]" />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Dark/Light Mobile */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-[#2c5f85] bg-surface"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-[#e5c07b]" /> : <Moon size={18} className="text-[#2c5f85]" />}
          </button>

          {/* Menu Drawer Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-text-primary hover:bg-[#2c5f85]/10"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2c5f85]/20 bg-surface px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-text-primary hover:bg-[#2c5f85]/10 hover:text-[#2c5f85] dark:hover:text-[#61afef] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <button
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-border text-text-primary flex items-center justify-center gap-2 text-sm font-semibold hover:bg-surface-muted"
            >
              <Languages size={16} className="text-[#2c5f85] dark:text-[#61afef]" />
              <span>{t.nav.languageLabel}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 bg-[#2c5f85] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">&#123;</span>
              <span>{t.nav.joinChapter}</span>
              <span className="font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">&#125;</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
