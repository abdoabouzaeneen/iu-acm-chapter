import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_TEAMS } from '../../i18n/translations';

interface TracksSectionProps {
  onOpenJoinModal: (teamId?: string) => void;
}

export function TracksSection({ onOpenJoinModal }: TracksSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const teams = LOCALIZED_TEAMS[lang];

  const [activeTeamId, setActiveTeamId] = useState(teams[0].id);
  const activeTeam = teams.find((item) => item.id === activeTeamId) || teams[0];
  const ActiveIcon = activeTeam.icon;

  return (
    <section id="teams" className="w-full py-20 md:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c5f85]/10 border border-[#2c5f85]/20 text-[#2c5f85] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="font-mono text-[#c49b57]">&#123;</span> {t.teams.badge} <span className="font-mono text-[#c49b57]">&#125;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
              {t.teams.titlePrefix} <span className="text-[#2c5f85] dark:text-[#61afef]">{t.teams.titleHighlight}</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              {t.teams.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.teams.openBadge}</span>
          </div>
        </div>

        {/* 3 Teams Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Team Navigation Switcher */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-text-secondary font-bold">
              {t.teams.selectPrompt}
            </p>
            {teams.map((team) => {
              const Icon = team.icon;
              const isSelected = team.id === activeTeamId;
              return (
                <button
                  key={team.id}
                  onClick={() => setActiveTeamId(team.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#2c5f85]/10 border-[#2c5f85] shadow-sm'
                      : 'bg-surface-container border-border hover:border-[#2c5f85]/40 hover:bg-surface-muted'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2c5f85] text-white shadow-xs'
                          : 'bg-surface text-[#2c5f85] dark:text-[#61afef] border border-border group-hover:border-[#2c5f85]/40'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div className={isRtl ? 'text-right' : 'text-left'}>
                      <h3 className={`font-display font-bold text-base ${
                        isSelected ? 'text-[#2c5f85] dark:text-[#61afef]' : 'text-text-primary group-hover:text-[#2c5f85] dark:group-hover:text-[#61afef]'
                      }`}>
                        {team.title}
                      </h3>
                      <p className="text-xs text-text-secondary font-mono">
                        {team.shortName}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition-transform ${isRtl ? 'rotate-180' : ''} ${
                      isSelected
                        ? `text-[#2c5f85] dark:text-[#61afef] ${isRtl ? '-translate-x-1' : 'translate-x-1'}`
                        : `text-text-secondary/40 group-hover:text-[#2c5f85] dark:group-hover:text-[#61afef] ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`
                    }`}
                  />
                </button>
              );
            })}

            <div className="p-5 rounded-2xl bg-surface-muted border border-border text-xs text-text-secondary space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-[#2c5f85] dark:text-[#61afef]">
                <Terminal size={14} />
                <span>{t.teams.governanceTitle}</span>
              </div>
              <p className="leading-relaxed">
                {t.teams.governanceDesc}
              </p>
            </div>
          </div>

          {/* Right: Detailed Team Syllabus & Description Card */}
          <div className="lg:col-span-7 bg-surface-container rounded-3xl border-2 border-[#2c5f85]/30 p-6 sm:p-10 shadow-lg space-y-8">
            
            {/* Top Bar with Code signature */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-13 h-13 rounded-2xl bg-[#2c5f85] text-white flex items-center justify-center shadow-xs">
                  <ActiveIcon size={26} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-text-primary">
                    {activeTeam.title}
                  </h3>
                  <span className="text-xs font-mono text-[#c49b57] dark:text-[#e5c07b] font-bold">
                    {activeTeam.category}
                  </span>
                </div>
              </div>

              <div className="px-3 py-1 bg-[#2c5f85]/10 border border-[#2c5f85]/20 rounded-lg font-mono text-xs text-[#2c5f85] dark:text-[#61afef] font-semibold" dir="ltr">
                {activeTeam.codeSnippet}
              </div>
            </div>

            {/* Exact Team Description */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-secondary font-bold">
                {t.teams.missionTitle}
              </h4>
              <p className="text-base sm:text-lg text-text-primary font-medium leading-relaxed">
                "{activeTeam.description}"
              </p>
            </div>

            {/* Skills & Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-secondary font-bold">
                {t.teams.skillsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeTeam.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-surface border border-[#2c5f85]/25 text-xs font-mono font-medium text-text-primary shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Weekly Activities */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-secondary font-bold">
                {t.teams.activitiesTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTeam.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 size={16} className="text-[#c49b57] dark:text-[#e5c07b] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Join CTA */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#c49b57]" />
                {activeTeam.coordinators}
              </span>

              <button
                onClick={() => onOpenJoinModal(activeTeam.id)}
                className="px-6 py-2.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>{t.teams.joinTeamPrefix} {activeTeam.shortName}</span>
                <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
