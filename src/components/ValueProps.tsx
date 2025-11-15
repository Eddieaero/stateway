import React from 'react';

const items = [
  { title: 'Diversified Portfolio', desc: 'Access real estate, stocks, bonds, private equity, and alternative investments across multiple asset classes.' },
  { title: 'Complete Transparency', desc: 'Open books policy with real-time investor dashboard, no hidden fees, and third-party annual audits.' },
  { title: 'Consistent Returns', desc: 'Strategic allocation delivering 3.5% to 20% benchmark returns based on investment term and portfolio style.' }
];

export const ValueProps: React.FC = () => (
  <section className="section value-props" aria-labelledby="value-props-heading">
    <div className="container">
      <h2 id="value-props-heading">Why Choose Stateway</h2>
      <div className="grid cols-3">
        {items.map(i => (
          <div key={i.title} className="card">
            <h3>{i.title}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
