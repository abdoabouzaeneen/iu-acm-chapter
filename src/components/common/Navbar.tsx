import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { AcmLogo } from './AcmLogo';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_NAV_LINKS } from '../../i18n/translations';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  const { lang, toggleLang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const navLinks = LOCALIZED_NAV_LINKS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#') || href.startsWith('#')) {
      const hash = href.includes('#') ? href.substring(href.indexOf('#')) : href;
      if (location === '/' || location === '') {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      } else {
        e.preventDefault();
        navigate('/' + hash);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <AcmLogo size="md" showSubtitle={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-2 text-sm font-semibold text-text-secondary hover:text-[#2c5f85] hover:bg-[#2c5f85]/5 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language Switcher (EN <-> AR) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-text-secondary hover:text-[#2c5f85] hover:border-[#2c5f85]/40 bg-surface transition-all text-xs font-semibold cursor-pointer"
            aria-label="Switch Language"
            title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
          >
            <Languages size={16} className="text-[#2c5f85]" />
            <span>{t.nav.languageLabel}</span>
          </button>

          {/* Join Chapter Button with Syntax Braces */}
          <button
            onClick={onOpenJoinModal}
            className="px-5 py-2.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-mono text-[#c49b57] font-bold">&#123;</span>
            <span>{t.nav.joinChapter}</span>
            <span className="font-mono text-[#c49b57] font-bold">&#125;</span>
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-[#2c5f85] bg-surface flex items-center gap-1 text-xs font-bold cursor-pointer"
            aria-label="Switch Language"
          >
            <Languages size={16} className="text-[#2c5f85]" />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Menu Drawer Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-text-primary hover:bg-[#2c5f85]/10 cursor-pointer"
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
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-text-primary hover:bg-[#2c5f85]/10 hover:text-[#2c5f85] transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <button
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-border text-text-primary flex items-center justify-center gap-2 text-sm font-semibold hover:bg-surface-muted cursor-pointer"
            >
              <Languages size={16} className="text-[#2c5f85]" />
              <span>{t.nav.languageLabel}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span className="font-mono text-[#c49b57] font-bold">&#123;</span>
              <span>{t.nav.joinChapter}</span>
              <span className="font-mono text-[#c49b57] font-bold">&#125;</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
