import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src="/logo.svg" 
    alt="Stateway Capital Group" 
    className={`logo-img ${className}`}
    style={{ height: '40px', width: 'auto' }}
  />
);
