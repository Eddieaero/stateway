import React from 'react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: '🛡️',
      title: 'Institutional-grade risk management'
    },
    {
      icon: '⚡',
      title: 'Powered by RAI™ AI Engine'
    },
    {
      icon: '📊',
      title: 'Transparent, data-driven investing'
    },
    {
      icon: '✅',
      title: 'Investor-ready platform'
    }
  ];

  return (
    <section className="trust-badges">
      <div className="container">
        <div className="badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge-card">
              <div className="badge-icon">{badge.icon}</div>
              <h3>{badge.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
