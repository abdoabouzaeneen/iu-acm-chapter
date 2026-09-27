import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Terminal } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import { TRANSLATIONS, LOCALIZED_TEAMS, LOCALIZED_COMMITTEES } from '../../i18n/translations';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: string;
}

export function JoinModal({ isOpen, onClose, defaultTrack }: JoinModalProps) {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const teams = LOCALIZED_TEAMS[lang];
  const committees = LOCALIZED_COMMITTEES[lang];

  const [fullName, setFullName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [faculty, setFaculty] = useState('College of Computing and Information Systems');
  const [academicYear, setAcademicYear] = useState('1st Year - Common Year');
  const [selectedPreference, setSelectedPreference] = useState(
    defaultTrack && defaultTrack !== 'executive' ? defaultTrack : 'cp'
  );
  const [profileUrl, setProfileUrl] = useState('');
  const [statement, setStatement] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle ESC key press and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setStudentEmail('');
    setFaculty('College of Computing and Information Systems');
    setAcademicYear('1st Year - Common Year');
    setProfileUrl('');
    setStatement('');
    onClose();
  };

  const selectedTeam = teams.find((item) => item.id === selectedPreference);
  const selectedComm = committees.find((item) => item.id === selectedPreference);
  const preferenceLabel = selectedTeam?.title || selectedComm?.name || selectedPreference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-surface rounded-3xl border border-[#2c5f85]/30 shadow-2xl overflow-hidden text-text-primary"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
      >
        {/* Modal Top Header Bar with #2c5f85 framing */}
        <div className="bg-[#2c5f85] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg text-[#c49b57] dark:text-[#e5c07b]">&#123;</span>
            <span className="font-display font-bold text-sm tracking-wide">
              {t.modal.headerTitle}
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg text-[#c49b57] dark:text-[#e5c07b]">&#125;</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 bg-[#2c5f85]/10 text-[#2c5f85] dark:text-[#61afef] rounded-2xl flex items-center justify-center mx-auto border border-[#2c5f85]/20">
              <CheckCircle2 size={36} className="text-[#2c5f85] dark:text-[#61afef]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-text-primary">
                {t.modal.successTitle}
              </h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                {t.modal.successWelcomePrefix} <span className="font-semibold text-[#2c5f85] dark:text-[#61afef]">{fullName || (lang === 'ar' ? 'طالبنا العزيز' : 'Student')}</span>! {t.modal.successLoggedPrefix} <span className="font-semibold text-[#c49b57] dark:text-[#e5c07b]">{preferenceLabel}</span>.
              </p>
            </div>

            <div className={`bg-[#2c5f85]/5 border border-[#2c5f85]/20 rounded-2xl p-4 text-xs font-mono ${isRtl ? 'text-right' : 'text-left'} space-y-2`}>
              <div className="flex items-center gap-2 text-[#2c5f85] dark:text-[#61afef] font-bold">
                <Terminal size={14} /> {t.modal.successNextStepsTitle}
              </div>
              <div className="text-text-secondary space-y-1">
                {t.modal.successNextSteps.map((step, idx) => (
                  <p key={idx}>{step}</p>
                ))}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              {t.modal.doneBtn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
              <p className="text-xs text-text-secondary font-mono">
                {t.modal.openNote}
              </p>
              <h3 id="join-modal-title" className="text-xl font-display font-bold text-text-primary mt-1">
                {t.modal.formTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary">{t.modal.fullNameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.fullNamePlaceholder}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary">{t.modal.emailLabel}</label>
                <input
                  type="email"
                  required
                  placeholder={t.modal.emailPlaceholder}
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Faculty & Academic Standing (5 Years Structure) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary">{t.modal.facultyLabel}</label>
                <select
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors"
                >
                  {t.modal.facultyOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-text-secondary">{t.modal.facultyHint}</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary">{t.modal.academicYearLabel}</label>
                <select
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors"
                >
                  {t.modal.academicYearOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-text-secondary">{t.modal.academicYearHint}</p>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-text-primary">{t.modal.preferenceLabel}</label>
              <select
                value={selectedPreference}
                onChange={(e) => setSelectedPreference(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors font-medium text-[#2c5f85] dark:text-[#61afef]"
              >
                <optgroup label={t.modal.groupTeams}>
                  {teams.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={t.modal.groupCommittees}>
                  {committees
                    .filter((c) => c.id !== 'executive')
                    .map((comm) => (
                      <option key={comm.id} value={comm.id}>
                        {comm.name}
                      </option>
                    ))}
                </optgroup>
              </select>
              <p className="text-[11px] text-text-secondary">
                {t.modal.preferenceHint}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-text-primary">
                {t.modal.profileLabel} <span className="text-text-secondary font-normal">{t.modal.optional}</span>
              </label>
              <input
                type="text"
                placeholder={t.modal.profilePlaceholder}
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors"
                dir="ltr"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-text-primary">
                {t.modal.statementLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.modal.statementPlaceholder}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-surface-muted border border-border focus:border-[#2c5f85] focus:ring-1 focus:ring-[#2c5f85] rounded-xl outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                {t.modal.cancelBtn}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#2c5f85] hover:bg-[#224b69] text-white rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.modal.submittingBtn}
                  </>
                ) : (
                  <>
                    <Send size={15} className={isRtl ? 'rotate-180' : ''} />
                    {t.modal.submitBtn}
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
