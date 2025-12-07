import React from 'react';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { WhyStateway } from './components/WhyStateway';
import { ValueProps } from './components/ValueProps';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { InvestmentStrategies } from './components/InvestmentStrategies';
import { useMouseGradient } from './hooks/useMouseGradient';
import { TranslationProvider } from './contexts/TranslationContext';

const AppContent: React.FC = () => {
  useMouseGradient();

  return (
    <>
      {/* Starfield background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <Hero />
      <main id="main">
        <WhyStateway />
        <InvestmentStrategies/>
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
};

export default App;
