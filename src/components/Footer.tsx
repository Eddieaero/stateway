import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => (
  <footer className="footer" aria-label="Site footer">
    <div className="container footer-inner">
      <Logo />
      <nav aria-label="Footer navigation" className="footer-nav">
        <a href="#features">Portfolio</a>
        <a href="#pricing">Returns</a>
        <a href="#testimonials">Investors</a>
        <a href="#contact">Invest Now</a>
      </nav>
      <div className="footer-note">© {new Date().getFullYear()} Stateway Capital Group. All rights reserved.</div>
    </div>
  </footer>
);
