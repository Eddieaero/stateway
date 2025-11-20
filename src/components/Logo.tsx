import React, { useEffect, useState } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(!document.documentElement.classList.contains('light'));
    };

    updateTheme();
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img 
      src={isDark ? '/logo-white.svg' : '/logo-black.svg'}
      alt="Stateway Capital Group" 
      className={`logo-img ${className}`}
      style={{ height: '28px', width: 'auto' }}
    />
  );
};
