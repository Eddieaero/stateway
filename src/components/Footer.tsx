import React from 'react';
import { Logo } from './Logo';
import { useTranslation } from '../contexts/TranslationContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const links = t('footer.links');

  return (
  <footer className="footer" aria-label="Site footer">
    <div className="container footer-content">
      <div className="footer-section">
        <Logo />
        <div className="company-info">
          <p><strong>{t('footer.company')}</strong></p>
          <p>{t('footer.tagline')}</p>
          <p><strong>{t('footer.contact')}:</strong></p>
          <p><a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a></p>
          <p>{t('footer.location')}</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul className="footer-nav">
          <li><a href="#why-stateway">{links.about}</a></li>
          <li><a href="#pricing">{links.investment}</a></li>
          <li><a href="#contact">{links.risk}</a></li>
          <li><a href="#contact">{links.privacy}</a></li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <div className="footer-note">{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</div>
    </div>
  </footer>
  );
};
