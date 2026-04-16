import React, { useState, useEffect } from 'react';
import HeartBackground from './components/HeartBackground';
import DailyMessage from './components/DailyMessage';

const App = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <HeartBackground />
      <DailyMessage />
    </div>
  );
};

export default App;