import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useLanguage } from './i18n/context';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { JoinModal } from './components/common/JoinModal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TracksSection } from './components/sections/TracksSection';
import { CommitteesSection } from './components/sections/CommitteesSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { EventsSection } from './components/sections/EventsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { FaqSection } from './components/sections/FaqSection';
import { CtaSection } from './components/sections/CtaSection';

function AppContent() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedTrackForJoin, setSelectedTrackForJoin] = useState<string | undefined>(undefined);
  const [isDark, setIsDark] = useState(false);
  const { isRtl } = useLanguage();

  // Sync dark class with document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleOpenJoinModal = (trackId?: string) => {
    setSelectedTrackForJoin(trackId);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
    setSelectedTrackForJoin(undefined);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen bg-surface text-text-primary selection:bg-[#C29B48]/20 selection:text-text-primary flex flex-col ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        onOpenJoinModal={() => handleOpenJoinModal()}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Main Landing Page Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection 
          onOpenJoinModal={() => handleOpenJoinModal()} 
          onToggleTheme={toggleTheme}
        />

        {/* About Chapter Section */}
        <AboutSection />

        {/* 3 Specialized Technical Teams Section */}
        <TracksSection onOpenJoinModal={(trackId) => handleOpenJoinModal(trackId)} />

        {/* Operational Committees & Leadership */}
        <CommitteesSection onOpenJoinModal={(committeeId) => handleOpenJoinModal(committeeId)} />

        {/* Infinite Marquee Section */}
        <MarqueeSection />

        {/* Events & Contests Calendar */}
        <EventsSection onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* Membership Benefits */}
        <BenefitsSection onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Call to Action Final Banner */}
        <CtaSection onOpenJoinModal={() => handleOpenJoinModal()} />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Interactive Membership Application Modal */}
      <JoinModal
        key={`${isJoinModalOpen}-${selectedTrackForJoin || 'default'}`}
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        defaultTrack={selectedTrackForJoin}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}