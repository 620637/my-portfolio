// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="fixed z-50 pointer-events-none w-8 h-8 rounded-full bg-blue-500 opacity-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
    ></div>
  );
};

export default CustomCursor;