import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const WhyStateway: React.FC = () => {
  const { t } = useTranslation();
  const reasons = t('why.reasons');

  return (
    <section id="why-stateway" className="why-stateway">
      <div className="container">
        <div className="section-header">
          <h1>{t('why.title')}</h1>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason: any, index: number) => (
            <div key={index} className="reason-card">
              <div className="reason-number">{index + 1}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
