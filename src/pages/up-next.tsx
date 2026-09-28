import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { EventsSection } from '../components/sections/EventsSection';

interface UpNextPageProps {
  onOpenJoinModal: () => void;
}

export function UpNextPage({ onOpenJoinModal }: UpNextPageProps) {
  const { lang, isRtl } = useLanguage();

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-surface py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between border-b border-border/70 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-[#2c5f85]/40 text-text-secondary hover:text-[#2c5f85] text-xs font-semibold bg-surface transition-all group cursor-pointer"
          >
            <ArrowLeft size={16} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            <span>{lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}</span>
          </Link>

          <span className="text-xs font-mono text-text-secondary">
            IU ACM Chapter &bull; {lang === 'en' ? 'Up Next' : 'القادم'}
          </span>
        </div>

        {/* Dedicated Up Next / Events & Contests Section */}
        <div className="rounded-3xl overflow-hidden border border-border/80 shadow-xs">
          <EventsSection onOpenJoinModal={onOpenJoinModal} />
        </div>

      </div>
    </div>
  );
}

export default UpNextPage;
