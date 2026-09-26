import { Check, ShieldCheck, ArrowRight, Lock, UserPlus } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRANSLATIONS, LOCALIZED_COMMITTEES } from '../../i18n/translations';

interface CommitteesSectionProps {
  onOpenJoinModal: (targetId?: string) => void;
}

export function CommitteesSection({ onOpenJoinModal }: CommitteesSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const committees = LOCALIZED_COMMITTEES[lang];

  return (
    <section id="committees" className="w-full py-20 md:py-28 bg-surface-muted border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c5f85]/10 border border-[#2c5f85]/20 text-[#2c5f85] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="font-mono text-[#c49b57]">&#123;</span> {t.committees.badge} <span className="font-mono text-[#c49b57]">&#125;</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            {t.committees.titlePrefix} <span className="text-[#2c5f85] dark:text-[#61afef]">{t.committees.titleHighlight}</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t.committees.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface border border-border text-xs font-mono text-text-secondary">
            <UserPlus size={13} className="text-[#2c5f85] dark:text-[#61afef]" />
            <span>{t.committees.noticeBadge}</span>
          </div>
        </div>

        {/* Committees Grid: 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((comm) => {
            const Icon = comm.icon;
            const isTechnical = comm.id === 'technical';
            const isExecutive = comm.id === 'executive';

            return (
              <div
                key={comm.id}
                className={`bg-surface rounded-3xl border transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-xs hover:shadow-md ${
                  isTechnical
                    ? 'border-[#2c5f85]/50 ring-1 ring-[#2c5f85]/30 bg-linear-to-br from-surface to-[#2c5f85]/5 md:col-span-2 lg:col-span-2'
                    : isExecutive
                    ? 'border-border/90 bg-surface md:col-span-2 lg:col-span-1'
                    : 'border-border hover:border-[#2c5f85]/40'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Icon & Code Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-[#2c5f85]/10 text-[#2c5f85] dark:text-[#61afef] flex items-center justify-center group-hover:bg-[#2c5f85] group-hover:text-white transition-colors duration-200">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-mono text-text-secondary px-3 py-1 bg-surface-muted rounded-lg border border-border" dir="ltr">
                      {comm.code}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-[#2c5f85] dark:group-hover:text-[#61afef] transition-colors">
                        {comm.name}
                      </h3>
                      {isTechnical && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#c49b57]/15 text-[#c49b57] dark:text-[#e5c07b]">
                          {t.committees.housesTeamsBadge}
                        </span>
                      )}
                      {isExecutive && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-500/10 text-slate-500 dark:text-slate-400">
                          {t.committees.appointedBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mt-2.5 leading-relaxed">
                      {comm.description}
                    </p>
                  </div>

                  {/* Sub-Teams Preview for Technical Committee */}
                  {comm.subTeams && (
                    <div className="p-4 rounded-2xl bg-[#2c5f85]/5 dark:bg-[#2c5f85]/10 border border-[#2c5f85]/20 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#2c5f85] dark:text-[#61afef] font-bold">
                        {t.committees.subTeamsTitle}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        {comm.subTeams.map((team, idx) => (
                          <a
                            key={idx}
                            href="#teams"
                            className="p-2 bg-surface rounded-xl border border-border text-center text-xs font-semibold text-text-primary hover:border-[#2c5f85] hover:text-[#2c5f85] dark:hover:text-[#61afef] transition-colors"
                          >
                            {team}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Duties */}
                  <div className="space-y-2 pt-2 border-t border-border">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary font-bold">
                      {t.committees.mandatesTitle}
                    </span>
                    <ul className="space-y-2">
                      {comm.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <Check size={15} className="text-[#c49b57] dark:text-[#e5c07b] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-5 mt-5 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-secondary flex-wrap gap-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#2c5f85] dark:text-[#61afef]" />
                    <span>{t.committees.officialBadge}</span>
                  </span>
                  
                  {isExecutive ? (
                    <span className="flex items-center gap-1.5 text-text-secondary/70 italic text-[11px]">
                      <Lock size={12} />
                      <span>{t.committees.executiveOnly}</span>
                    </span>
                  ) : isTechnical ? (
                    <div className="flex items-center gap-3">
                      <a
                        href="#teams"
                        className="text-[#2c5f85] dark:text-[#61afef] font-bold flex items-center gap-1 hover:underline underline-offset-4"
                      >
                        <span>{t.committees.exploreTeams}</span>
                        <ArrowRight size={13} className={isRtl ? 'rotate-180' : ''} />
                      </a>
                      <button
                        onClick={() => onOpenJoinModal('cp')}
                        className="px-3 py-1.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                      >
                        {t.committees.joinTeam}
                      </button>
                    </div>
                  ) : (\n                    <button
                      onClick={() => onOpenJoinModal(comm.id)}
                      className="px-3 py-1.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>{t.committees.joinCommittee}</span>
                      <ArrowRight size={12} className={isRtl ? 'rotate-180' : ''} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
