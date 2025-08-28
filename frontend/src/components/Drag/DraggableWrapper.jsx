import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const DraggableWrapper = ({ children }) => {
  const dragRef = useRef(null);
  const draggableInstance = useRef(null);

  useEffect(() => {
    const el = dragRef.current;

    if (!el) return;

    const original = { x: 0, y: 0 };

    // Kill existing draggable if re-render
    if (draggableInstance.current) {
      draggableInstance.current.kill();
    }

    draggableInstance.current = Draggable.create(el, {
      type: 'x,y',
      edgeResistance: 0.65,
      inertia: true,
      bounds: window,
      onRelease: function () {
        gsap.to(el, {
          x: original.x,
          y: original.y,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
      },
    })[0];

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
        draggableInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={dragRef} style={{ display: 'inline-block', position: 'relative' }}>
      {children}
    </div>
  );
};

export default DraggableWrapper;
