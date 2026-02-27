import React, { useState } from 'react';
import Ktv2Dashboard from '../components/features/ktv2/Ktv2Dashboard';
import GudFundSection from '../components/features/gudfund/GudFundSection';
import LaunchCountdown from '../components/common/LaunchCountdown';

const HomePage: React.FC = () => {
  const [setCurrentTokenSymbol] = useState<string | null>('');

  const handleSymbolLoaded = (symbol: string | null) => {
    setCurrentTokenSymbol(symbol);
  };

  // COUNTDOWN SETTINGS
  const showCountdown = import.meta.env.VITE_SHOW_COUNTDOWN === 'true';
  const launchDate = new Date(import.meta.env.VITE_COUNTDOWN_LAUNCH_DATE || 0);

  return (
    <div style={{paddingTop: '80px'}} className="p-4 px-0 md:px-4 max-w-6xl mx-auto relative">
      {showCountdown && <LaunchCountdown targetDate={launchDate} title="Launching In" />}

      <Ktv2Dashboard onSymbolLoaded={handleSymbolLoaded} />
      
      <GudFundSection />
    </div>
  );
};

export default HomePage;