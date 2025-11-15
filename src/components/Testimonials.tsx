import React from 'react';

const quotes = [
  { name: 'Amara K.', role: 'Family Office Principal', text: 'Stateway\'s transparent approach and diversified portfolio strategy delivered 18% returns while protecting our legacy wealth.' },
  { name: 'David M.', role: 'SME Owner', text: 'The open books policy and quarterly reports gave us complete confidence. Their real estate investments alone exceeded expectations.' },
  { name: 'Fatima N.', role: 'Institutional Investor', text: 'Strategic allocation across Africa with global vision. Stateway balances growth, income, and security like no other firm.' }
];

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-heading">
    <div className="container">
      <h2 id="testimonials-heading">Trusted by Investors</h2>
      <div className="grid cols-3">
        {quotes.map(q => (
          <figure key={q.name} className="testimonial card">
            <blockquote>“{q.text}”</blockquote>
            <figcaption>{q.name} · <span className="muted">{q.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
