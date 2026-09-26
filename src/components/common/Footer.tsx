import { MessageSquare, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';
import { AcmLogo } from './AcmLogo';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRANSLATIONS, LOCALIZED_COMMITTEES, LOCALIZED_TEAMS, LOCALIZED_NAV_LINKS } from '../../i18n/translations';

export function Footer() {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const committees = LOCALIZED_COMMITTEES[lang];
  const teams = LOCALIZED_TEAMS[lang];
  const navLinks = LOCALIZED_NAV_LINKS[lang];

  return (
    <footer className="w-full bg-surface border-t border-[#2c5f85]/20 text-text-primary pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">
          
          {/* Col 1 & 2: Chapter Identity */}
          <div className="lg:col-span-2 space-y-5">
            <AcmLogo size="md" showSubtitle={true} />
            
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>

            <div className="flex items-center gap-3 text-text-secondary pt-2">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85] hover:bg-[#2c5f85]/5 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85] hover:bg-[#2c5f85]/5 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85] hover:bg-[#2c5f85]/5 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:border-[#2c5f85] hover:bg-[#2c5f85]/5 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare size={17} />
              </a>
            </div>

            <div className="text-xs font-mono text-text-secondary space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#2c5f85] dark:text-[#61afef] shrink-0" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#2c5f85] dark:text-[#61afef] shrink-0" />
                <span>acm@iu.edu.sa</span>
              </div>
            </div>
          </div>

          {/* Col 3: 5 Committees */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-text-primary flex items-center gap-1.5">
              <span className="text-[#2c5f85] dark:text-[#61afef] font-mono">&#123;</span> {t.footer.committeesTitle} <span className="text-[#2c5f85] dark:text-[#61afef] font-mono">&#125;</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {committees.map((comm) => (\n                <li key={comm.id}>
                  <a href="#committees" className="hover:text-[#2c5f85] dark:hover:text-[#61afef] hover:underline underline-offset-4 transition-colors">
                    {comm.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: 3 Technical Teams */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-text-primary flex items-center gap-1.5">
              <span className="text-[#c49b57] dark:text-[#e5c07b] font-mono">&#123;</span> {t.footer.teamsTitle} <span className="text-[#c49b57] dark:text-[#e5c07b] font-mono">&#125;</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {teams.map((team) => (
                <li key={team.id}>
                  <a href="#teams" className="hover:text-[#c49b57] dark:hover:text-[#e5c07b] hover:underline underline-offset-4 transition-colors">
                    {team.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: External ACM & Faculty Affiliations */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-text-primary flex items-center gap-1.5">
              <span className="text-[#2c5f85] dark:text-[#61afef] font-mono">&#123;</span> {t.footer.linksTitle} <span className="text-[#2c5f85] dark:text-[#61afef] font-mono">&#125;</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#2c5f85] dark:hover:text-[#61afef] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.acm.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#2c5f85] dark:hover:text-[#61afef] transition-colors"
                >
                  <span>ACM Global</span>
                  <ExternalLink size={12} className={isRtl ? 'rotate-[-90deg]' : ''} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {t.footer.copyright}</span>
            <Heart size={13} className="text-red-500 fill-red-500 inline" />
            <span>{t.footer.craftedBy}</span>
          </p>

          <p className="font-mono text-[11px] text-text-secondary" dir="ltr">
            {t.footer.paletteText}
          </p>
        </div>
      </div>
    </footer>
  );
}
