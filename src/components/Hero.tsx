import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { HamburgerButton, MobileMenu } from './MobileMenu';

export const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero">
      <nav className="nav" aria-label="Main navigation">
        <Logo />
        <ul className="nav-links">
          <li><a href="#features">Portfolio</a></li>
          <li><a href="#pricing">Returns</a></li>
          <li><a href="#testimonials">Investors</a></li>
          <li><a href="#contact" className="btn btn-sm">Invest Now</a></li>
          <li><ThemeToggle /></li>
        </ul>
        <HamburgerButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="hero-content">
        <h1>Build Wealth Through Smart Investments</h1>
        <p className="lead">Stateway Capital Group delivers consistent returns through diversified, transparent, and strategic asset management across Africa and beyond.</p>
        <div className="hero-actions">
          <a href="#pricing" className="btn btn-primary">Start Investing</a>
          <a href="#features" className="btn btn-outline">View Portfolio</a>
        </div>
        <div className="hero-badges" aria-label="Key platform badges">
          <span>✔ Transparent</span>
          <span>✔ Diversified</span>
          <span>✔ Legacy-Driven</span>
        </div>
      </div>
    </header>
  );
};
