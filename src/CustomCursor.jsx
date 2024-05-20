import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'white',
        pointerEvents: 'none',
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default CustomCursor;