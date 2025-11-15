import React from 'react';

export const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
        role="presentation"
      />
      <div 
        className={`mobile-menu ${isOpen ? 'open' : ''}`} 
        role="navigation" 
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul>
          <li><a href="#features" onClick={onClose}>Portfolio</a></li>
          <li><a href="#pricing" onClick={onClose}>Returns</a></li>
          <li><a href="#testimonials" onClick={onClose}>Investors</a></li>
          <li><a href="#contact" className="btn btn-sm" onClick={onClose}>Invest Now</a></li>
        </ul>
      </div>
    </>
  );
};

export const HamburgerButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
  <button
    className={`hamburger ${isOpen ? 'open' : ''}`}
    onClick={onClick}
    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </button>
);
