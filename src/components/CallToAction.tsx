import React from 'react';

export const CallToAction: React.FC = () => (
  <section id="contact" className="section cta" aria-labelledby="cta-heading">
    <div className="container">
      <h2 id="cta-heading">Ready to Build Your Legacy?</h2>
      <p>Join individuals, families, and institutions building wealth through strategic, transparent investments. Minimum investment: 2.5M.</p>
      <form className="cta-form" onSubmit={e => e.preventDefault()} aria-label="Investment inquiry form">
        <label className="visually-hidden" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="investor@example.com" required aria-required="true" />
        <button type="submit" className="btn btn-primary">Schedule Consultation</button>
      </form>
      <small className="muted">Licensed and audited. Your investment, your future.</small>
    </div>
  </section>
);
