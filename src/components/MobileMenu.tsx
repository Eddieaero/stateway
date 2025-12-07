import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'sw', name: 'Swahili', flag: '🇹🇿' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ] as const;

  const handleLanguageChange = (lang: typeof languages[number]['code']) => {
    setLanguage(lang);
    onClose();
  };

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
        
        <div className="mobile-language-selector">
          <label htmlFor="mobile-language">Language:</label>
          <select 
            id="mobile-language"
            value={language} 
            onChange={(e) => handleLanguageChange(e.target.value as any)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>
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
