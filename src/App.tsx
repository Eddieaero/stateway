import React from 'react';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <ValueProps />
        <Features />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default App;
