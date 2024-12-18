import React from 'react';

interface DesktopProps {
  addTerminal: () => void;
}

const Desktop: React.FC<DesktopProps> = () => {
  return (
    <div className="min-h-screen relative">
    </div>
  );
};

export default Desktop;
