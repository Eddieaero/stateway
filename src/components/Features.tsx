import React from 'react';
import { RealEstateIcon, PublicMarketsIcon, PrivateEquityIcon, FixedIncomeIcon, PhysicalBusinessesIcon, RiskManagementIcon } from './InvestmentIcons';

const features = [
  { icon: RealEstateIcon, title: 'Real Estate', desc: 'Commercial and residential properties with rental income and REIT-style models.' },
  { icon: PublicMarketsIcon, title: 'Public Markets', desc: 'Blue-chip stocks, dividend-paying equities, government and corporate bonds.' },
  { icon: PrivateEquityIcon, title: 'Private Equity', desc: 'High-growth startups and non-public firms with strategic acquisition opportunities.' },
  { icon: FixedIncomeIcon, title: 'Fixed Income', desc: 'Micro-lending with collateral, treasury bills, and secured asset-backed loans.' },
  { icon: PhysicalBusinessesIcon, title: 'Physical Businesses', desc: 'Retail ventures in energy, technology, agribusiness, and export-import.' },
  { icon: RiskManagementIcon, title: 'Risk Management', desc: 'Third-party audits, licensed operations, and comprehensive insurance coverage.' }
];

export const Features: React.FC = () => (
  <section id="features" className="section features" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading">Investment Portfolio</h2>
      <div className="grid cols-3">
        {features.map(f => {
          const IconComponent = f.icon;
          return (
            <div key={f.title} className="feature-item card">
              <div className="feature-icon" aria-hidden="true">
                <IconComponent size={48} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
