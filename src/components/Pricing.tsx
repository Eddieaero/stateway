import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const portfolios = t('pricing.plans');
  const labels = t('pricing.labels');

  return (
  <section id="pricing" className="section pricing" aria-labelledby="pricing-heading">
    <div className="container">
      <div className="pricing-header">
        <h2 id="pricing-heading">{t('pricing.title')}</h2>
        <p className="pricing-disclaimer">{t('pricing.disclaimer')}</p>
      </div>
      
      <div className="pricing-layout">
        <div className="pricing-image-side">
          <img src="/growth.gif" alt="Investment Plans Chart" className="pricing-image" />
        </div>
        
        <div className="pricing-cards-side">
          <div className="pricing-cards-grid">
            {portfolios.map((p: any) => (
              <div
                key={p.name}
                className={`pricing-card card ${p.highlighted ? 'highlighted' : ''} ${expandedCard === p.name ? 'expanded' : 'minimized'}`}
                aria-label={`${p.name} plan`}
                onMouseEnter={() => setExpandedCard(p.name)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className="pricing-header-row">
                  <h3>{p.name}</h3>
                  <div className="pricing-range-badge">{p.range}</div>
                </div>

                {expandedCard === p.name && (
                  <div className="pricing-details">
                    <div className="detail-row">
                      <span className="label">{labels.capital}:</span>
                      <span className="value">{p.minimum}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{labels.risk}:</span>
                      <span className="value">{p.risk}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{labels.lockUp}:</span>
                      <span className="value">{p.lockup}</span>
                    </div>
                    <p className="ideal-for"><strong>{labels.idealFor}:</strong> {p.ideal}</p>
                    <a href="#contact" className={`btn ${p.highlighted ? 'btn-primary' : 'btn-outline'}`}>{labels.learnMore}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
