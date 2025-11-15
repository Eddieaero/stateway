import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const RealEstateIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export const PublicMarketsIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export const PrivateEquityIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export const FixedIncomeIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <path d="M12 1v6m0 6v6"></path>
    <path d="M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24"></path>
    <path d="M1 12h6m6 0h6"></path>
    <path d="M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24"></path>
  </svg>
);

export const PhysicalBusinessesIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6-6 6 6"></path>
    <path d="M9 9h6v6H9z"></path>
    <path d="M9 15h2v6H9zM13 15h2v6h-2z"></path>
  </svg>
);

export const RiskManagementIcon: React.FC<IconProps> = ({ size = 40, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 8v4m0 4v.01"></path>
  </svg>
);
