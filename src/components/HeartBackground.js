import React from 'react';

const HeartBackground = () => {
  const hearts = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const opacity = Math.random() * 0.3 + 0.1;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    
    return (
      <div
        key={i}
        className="absolute text-red-300 animate-float"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          fontSize: `${size}px`,
          opacity: opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      >
        ❤
      </div>
    );
  });

  return <>{hearts}</>;
};

export default HeartBackground;