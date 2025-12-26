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
        <a href="tel:+255756892808" className="btn btn-primary">{t('cta.button1')}</a>
        <a href="/STATEWAY-Press-Kit.pdf" download className="btn btn-outline">{t('cta.button2')}</a>
      </div>
    </div>
  </section>
  );
};
