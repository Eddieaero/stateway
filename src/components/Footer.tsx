import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => (
  <footer className="footer" aria-label="Site footer">
    <div className="container footer-inner">
      <Logo />
      <div className="footer-note">© {new Date().getFullYear()} Stateway Capital Group. All rights reserved.</div>
    </div>
  </footer>
);
