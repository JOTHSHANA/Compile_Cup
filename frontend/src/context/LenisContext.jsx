import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const newLenis = new Lenis({
      lerp: 0.08, 
      wheelMultiplier: 0.9, 
      smoothWheel: true,
    });

    setLenis(newLenis);

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};