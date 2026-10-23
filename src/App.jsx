import React from 'react';
import './App.css';
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatementSection from './components/StatementSection';
import FeaturesBento from './components/FeaturesBento';
import StatsStrip from './components/StatsStrip';
import AiIntegrationSection from './components/AiIntegrationSection';
import WorkflowSection from './components/WorkflowSection';
import AgentSpotlight from './components/AgentSpotlight';
import PlatformBadges from './components/PlatformBadges';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{background: 'var(--color-background)', color: 'var(--color-foreground)'}}>
      {/* Top Announcement Banner */}
      <AnnouncementBanner />

      {/* Main Sticky Header (Notifications removed) */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1360px]" style={{border: '1px solid var(--color-border)', borderTop: 'none'}}>
          {/* Section: Hero, Animated Canvas & Trusted Strip */}
          <HeroSection />

          {/* Section: Problem Statement */}
          <StatementSection />

          {/* Section: Bento Grid Features */}
          <FeaturesBento />

          {/* Section: Stats Strip */}
          <StatsStrip />

          {/* Section: AI Coding Tools Integration */}
          <AiIntegrationSection />

          {/* Section: Content Repurposing Workflow */}
          <WorkflowSection />

          {/* Section: Agent Spotlight */}
          <AgentSpotlight />

          {/* Section: Founders & Platform Badges */}
          <PlatformBadges />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
