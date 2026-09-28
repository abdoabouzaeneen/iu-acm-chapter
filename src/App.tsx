import { useState, useEffect } from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { JoinModal } from './components/common/JoinModal';
import { HeroSection } from './components/sections/HeroSection';
import { TracksSection } from './components/sections/TracksSection';
import { CommitteesSection } from './components/sections/CommitteesSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { EventsSection } from './components/sections/EventsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { FaqSection } from './components/sections/FaqSection';
import { CtaSection } from './components/sections/CtaSection';
import { AboutPage } from './pages/about';
import { UpNextPage } from './pages/up-next';
import { JourneyPage } from './pages/journey';

interface HomePageProps {
  onOpenJoinModal: (trackId?: string) => void;
}

function HomePage({ onOpenJoinModal }: HomePageProps) {
  const [location] = useLocation();

  // Smooth scroll to anchor if url contains hash
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="flex-1 w-full">
      {/* Hero Section */}
      <HeroSection onOpenJoinModal={() => onOpenJoinModal()} />

      {/* 1. Chapter Statements & Vision */}
      <MarqueeSection />

      {/* 2. Organizational Architecture */}
      <CommitteesSection onOpenJoinModal={(committeeId) => onOpenJoinModal(committeeId)} />

      {/* 3. Technical Committee Cohorts */}
      <TracksSection onOpenJoinModal={(trackId) => onOpenJoinModal(trackId)} />

      {/* Events & Contests Calendar */}
      <EventsSection onOpenJoinModal={() => onOpenJoinModal()} />

      {/* Membership Benefits */}
      <BenefitsSection onOpenJoinModal={() => onOpenJoinModal()} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Call to Action Final Banner */}
      <CtaSection onOpenJoinModal={() => onOpenJoinModal()} />
    </main>
  );
}

function AppContent() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedTrackForJoin, setSelectedTrackForJoin] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (trackId?: string) => {
    setSelectedTrackForJoin(trackId);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
    setSelectedTrackForJoin(undefined);
  };

  return (
    <div className="min-h-screen bg-surface text-text-primary selection:bg-[#c49b57]/20 selection:text-text-primary flex flex-col">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* 2. Routes & Views */}
      <Switch>
        <Route path="/about">
          <AboutPage onOpenJoinModal={() => handleOpenJoinModal()} />
        </Route>
        <Route path="/up-next">
          <UpNextPage onOpenJoinModal={() => handleOpenJoinModal()} />
        </Route>
        <Route path="/journey">
          <JourneyPage />
        </Route>
        <Route path="/">
          <HomePage onOpenJoinModal={handleOpenJoinModal} />
        </Route>
        {/* Default / Fallback Route */}
        <Route>
          <HomePage onOpenJoinModal={handleOpenJoinModal} />
        </Route>
      </Switch>

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
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <LanguageProvider>
      <Router base={base}>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}