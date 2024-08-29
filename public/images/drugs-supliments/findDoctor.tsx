import React from 'react';

interface FindDoctorProps {
  color?: string;
}

const FindDoctor: React.FC<FindDoctorProps> = ({ color }) => {
  const fillColor = color || "#3557FF";

  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Find a Doctor</title>
      <circle cx="35" cy="35" r="35" fill="white" />
      <circle cx="35" cy="33.5" r="20" stroke={fillColor} strokeWidth="2" />
      <path d="M48 49.5L53.75 56.3536" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9545 23.2727C29.9545 22.0175 30.9721 21 32.2273 21H36.7727C38.0279 21 39.0455 22.0175 39.0455 23.2727V28.9545H44.7273C45.9825 28.9545 47 29.9721 47 31.2273V35.7727C47 37.0279 45.9825 38.0455 44.7273 38.0455H39.0455V43.7273C39.0455 44.9825 38.0279 46 36.7727 46H32.2273C30.9721 46 29.9545 44.9825 29.9545 43.7273V38.0455H24.2727C23.0175 38.0455 22 37.0279 22 35.7727V31.2273C22 29.9721 23.0175 28.9545 24.2727 28.9545H29.9545V23.2727Z"
        fill="#D2D9FF"
      />
      <path
        d="M31 21.5V30H22.5C22.2239 30 22 30.2239 22 30.5V36.5C22 36.7761 22.2239 37 22.5 37H31V45.5C31 45.7761 31.2239 46 31.5 46H37.5C37.7761 46 38 45.7761 38 45.5V37H46.5C46.7761 37 47 36.7761 47 36.5V30.5C47 30.2239 46.7761 30 46.5 30H38V21.5C38 21.2239 37.7761 21 37.5 21H31.5C31.2239 21 31 21.2239 31 21.5Z"
        stroke={fillColor}
        strokeWidth="2"
      />
    </svg>
  );
}

export default FindDoctor;
