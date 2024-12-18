import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4">
        <li><a href="#blog">--blog</a></li>
        <li><a href="#projects">--projects</a></li>
        <li><a href="#socials">--socials</a></li>
        <li><a href="#resume">--resume</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
