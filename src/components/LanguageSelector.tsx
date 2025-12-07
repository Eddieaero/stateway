import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

type Language = 'en' | 'sw' | 'fr' | 'es' | 'zh' | 'ar';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const languages: Array<{ code: Language; name: string; flag: string }> = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
  };

  return (
    <div className="language-selector">
      <select 
        value={language} 
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        className="language-dropdown"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
