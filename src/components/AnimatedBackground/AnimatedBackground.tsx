import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // points: 8.0,
          // maxDistance: 16.0,
          spacing: 20.0,
          color: 0xbe185d,
          backgroundColor: 0x141419,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="h-full w-full" />;
};

export default AnimatedBackground;
