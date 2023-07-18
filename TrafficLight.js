import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState('red');

  useEffect(() => {
    const timer = setInterval(() => {
      setLightColor((prevColor) => {
        switch (prevColor) {
          case 'red':
            return 'green';
          case 'green':
            return 'yellow';
          case 'yellow':
            return 'red';
          default:
            return 'red';
        }
      });
    }, getDuration(lightColor));

    return () => clearInterval(timer);
  }, [lightColor]);

  const getDuration = (color) => {
    switch (color) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 4000;
    }
  };

  return (
    <div>
      <div className={`light red ${lightColor === 'red' ? 'active' : ''}`} />
      <div className={`light yellow ${lightColor === 'yellow' ? 'active' : ''}`} />
      <div className={`light green ${lightColor === 'green' ? 'active' : ''}`} />
    </div>
  );
};

export default TrafficLight;
