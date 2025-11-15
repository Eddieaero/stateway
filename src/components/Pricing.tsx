import React from 'react';

const tiers = [
  { name: '2-Month', price: '3.5%', period: 'return', features: ['Minimum: 2.5M investment', 'Quarterly reports', 'Investor dashboard access', '1.5% management fee'], highlighted: false },
  { name: '6-Month', price: '10%', period: 'return', features: ['Diversified allocation', 'Monthly interest payments', 'Priority support', 'Performance incentives'], highlighted: true },
  { name: '12-Month', price: '20%', period: 'return', features: ['Strategic aggressive option', 'Annual dividend payouts', 'Private equity access', 'Dedicated account manager'], highlighted: false }
];

export const Pricing: React.FC = () => (
  <section id="pricing" className="section pricing" aria-labelledby="pricing-heading">
    <div className="container">
      <h2 id="pricing-heading">Investment Terms</h2>
      <div className="grid cols-3 pricing-grid">
        {tiers.map(t => (
          <div key={t.name} className={`pricing-card card ${t.highlighted ? 'highlighted' : ''}`} aria-label={`${t.name} plan`}>
            <h3>{t.name}</h3>
            <p className="price"><span>{t.price}</span> <small>{t.period}</small></p>
            <ul className="features-list">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="#contact" className={`btn ${t.highlighted ? 'btn-primary' : 'btn-outline'}`}>Choose {t.name}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
