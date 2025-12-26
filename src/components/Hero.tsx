import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';
import { HamburgerButton, MobileMenu } from './MobileMenu';
import { useTranslation } from '../contexts/TranslationContext';

export const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="hero">
      <nav className="nav" aria-label="Main navigation">
        <Logo />
        <ul className="nav-links">
          <li><a href="#why-stateway">{t('nav.whyStateway')}</a></li>
          <li><a href="#features">{t('nav.portfolio')}</a></li>
          <li><a href="#pricing">{t('nav.returns')}</a></li>
          <li><a href="#testimonials">{t('nav.investors')}</a></li>
          <li><a href="#contact" className="btn btn-sm">{t('nav.investNow')}</a></li>
          <li><LanguageSelector /></li>
          <li><ThemeToggle /></li>
        </ul>
        <HamburgerButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <p className="lead">{t('hero.description')}</p>
        <div className="hero-actions">
          <a href="tel:+255756892808" className="btn btn-primary">{t('hero.cta1')}</a>
          <a href="/STATEWAY-Press-Kit.pdf" download className="btn btn-outline">{t('hero.cta2')}</a>
        </div>
        <div className="hero-badges" aria-label="Key platform badges">
          <span>{t('hero.badge')}</span>
        </div>
        
        {/* Trust Badges Circle Frames */}
        <div className="trust-badges-hero">
          <div className="badge-circle">
            <p>{t('hero.badges.risk')}</p>
          </div>
          <div className="badge-circle">
            <p>{t('hero.badges.ai')}</p>
          </div>
          <div className="badge-circle">
            <p>{t('hero.badges.transparent')}</p>
          </div>
          <div className="badge-circle">
            <p>{t('hero.badges.ready')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
