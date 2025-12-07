import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
  <section id="contact" className="section cta" aria-labelledby="cta-heading">
    <div className="container">
      <h2 id="cta-heading">{t('cta.title')}</h2>
      <p>{t('cta.description')}</p>
      <div className="cta-actions">
        <a href="#contact" className="btn btn-primary">{t('cta.button1')}</a>
        <a href="/Investor-Deck.pdf" download className="btn btn-outline">{t('cta.button2')}</a>
      </div>
      <small className="muted">{t('cta.footer')}</small>
    </div>
  </section>
  );
};
