import { useState } from 'react';
import { Calendar, Clock, MapPin, User, ArrowUpRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_EVENTS } from '../../i18n/translations';

interface EventsSectionProps {
  onOpenJoinModal: () => void;
}

export function EventsSection({ onOpenJoinModal }: EventsSectionProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const allEvents = LOCALIZED_EVENTS[lang];

  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('All');
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});

  const filterOptions = [
    { key: 'All', label: t.events.filterAll },
    { key: 'Workshop', label: t.events.filterWorkshop },
    { key: 'Contest', label: t.events.filterContest },
    { key: 'Seminar', label: t.events.filterSeminar },
    { key: 'Hackathon', label: t.events.filterHackathon },
  ];

  // In Arabic, event.category is translated ('ورشة عمل', 'مسابقة', etc.) or we match by key
  const filteredEvents = selectedCategoryKey === 'All'
    ? allEvents
    : allEvents.filter((_e, idx) => {
        // Match with English counterpart by index or category map
        const enCategory = LOCALIZED_EVENTS.en[idx]?.category;
        return enCategory === selectedCategoryKey;
      });

  const handleRegisterEvent = (eventId: string) => {
    setRegisteredEvents((prev) => ({ ...prev, [eventId]: true }));
  };

  return (
    <section id="events" className="w-full py-20 md:py-28 bg-surface-muted border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C6B99]/10 border border-[#2C6B99]/20 text-[#2C6B99] dark:text-[#61afef] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="font-mono text-[#C29B48]">&#123;</span> {t.events.badge} <span className="font-mono text-[#C29B48]">&#125;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
              {t.events.titlePrefix} <span className="text-[#2C6B99] dark:text-[#61afef]">{t.events.titleHighlight}</span> {t.events.titleSuffix}
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              {t.events.subtitle}
            </p>
          </div>

          {/* Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-2xl border border-border">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedCategoryKey(opt.key)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategoryKey === opt.key
                    ? 'bg-[#2C6B99] text-white shadow-xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isRegistered = !!registeredEvents[event.id];

            return (
              <div
                key={event.id}
                className="bg-surface rounded-2xl border border-border hover:border-[#2C6B99]/40 hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-[#2C6B99]/10 text-[#2C6B99] dark:text-[#61afef] text-xs font-mono font-bold">
                      {event.category}
                    </span>
                    {event.registrationOpen ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {t.events.rsvpOpen}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-text-secondary">
                        {t.events.opensSoon}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-[#2C6B99] dark:group-hover:text-[#61afef] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Date, Time, Venue Meta */}
                  <div className="space-y-2 pt-2 border-t border-border text-xs text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#2C6B99] dark:text-[#61afef] shrink-0" />
                      <span className="font-medium text-text-primary">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#C29B48] dark:text-[#e5c07b] shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#2C6B99] dark:text-[#61afef] shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <User size={14} className="text-[#C29B48] dark:text-[#e5c07b] shrink-0" />
                      <span className="text-[11px] font-mono truncate">{event.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* RSVP / Action Button */}
                <div className="pt-6 mt-4 border-t border-border">
                  {isRegistered ? (
                    <div className="w-full py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-500/20">
                      <CheckCircle size={15} />
                      <span>{t.events.rsvpConfirmed}</span>
                    </div>
                  ) : event.registrationOpen ? (
                    <button
                      onClick={() => handleRegisterEvent(event.id)}
                      className="w-full py-2.5 bg-[#2C6B99] hover:bg-[#22547a] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t.events.reserveSeat}</span>
                      <ArrowUpRight size={15} className={isRtl ? 'rotate-[-90deg]' : ''} />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenJoinModal}
                      className="w-full py-2.5 bg-surface-muted hover:bg-border text-text-secondary rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.events.earlyAccess}</span>
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
