import React from 'react';

const DrugIntraction = ({ color }: { color?: string }) => {
  const fillColor = color || "#3557FF";

  return (
    <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Drugs Interaction Checker</title>
      <circle cx="35.3333" cy="35" r="35" fill="white" />
      <circle cx="27.8333" cy="35.5" r="15.5" fill="white" />
      <circle cx="44.8333" cy="35.5" r="15.5" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35.7821 24C35.7821 24 42.3333 27.0478 42.3333 34.8842C42.3333 42.7206 40.4756 44.1679 35.8327 47C29.9577 44.0227 29.3333 42.1268 29.3333 35.5C29.3333 28.8732 35.7821 24 35.7821 24Z" fill={fillColor} />
      <circle cx="27.8333" cy="35.5" r="14.5" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44.8333" cy="35.5" r="14.5" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.3333 35.5H42.3333" stroke={fillColor} strokeWidth="2" />
      <path d="M30.3333 35.5H59.3333" stroke={fillColor} strokeWidth="2" />
    </svg>
  );
}

export default DrugIntraction;
