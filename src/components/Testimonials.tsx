import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const quotes = t('testimonials.items');

  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">{t('testimonials.title')}</h2>
        <div className="grid cols-3">
          {quotes.map((q: any) => (
            <figure key={q.name} className="testimonial card">
              <div className="testimonial-avatar">{q.name.charAt(0)}{q.name.charAt(q.name.indexOf(' ') + 1)}</div>
              <blockquote>"{q.text}"</blockquote>
              <figcaption>{q.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="logos-section">
          <div className="logos-grid">
            <div className="logo-badge-svg">
              <img src="/svg/Asset-4.svg" alt="Early Stage Fintech" />
            </div>
            <div className="logo-badge-svg">
              <img src="/svg/Asset-5.svg" alt="Africa Startup Ecosystem" />
            </div>
            <div className="logo-badge-svg">
              <img src="/svg/Asset-6.svg" alt="AI Investment Network" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
