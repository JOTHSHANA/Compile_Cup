import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sectionIds, options) => {
  const [activeId, setActiveId] = useState();
  const observer = useRef();

  useEffect(() => {
    const elements = sectionIds.map(id => document.getElementById(id));
    
    observer.current?.disconnect();
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach(el => {
      if (el) {
        observer.current.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  }, [sectionIds, options]);

  return activeId;
};
