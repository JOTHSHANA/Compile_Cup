import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = ({ children, type = "fade-up", duration = 2, delay = 0, stagger = 0.9 }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const elements = elRef.current ? gsap.utils.toArray(elRef.current.children) : [];
    if (elements.length === 0) return;

    let fromVars = {};
    let toVars = { duration, delay, ease: "power3.out" };

    switch (type) {
      case "fade-up":
        fromVars = { y: 200, opacity: 0 };
        break;
      case "fade-down":
        fromVars = { y: -200, opacity: 0 };
        break;
      case "zoom-in":
        fromVars = { scale: 1, opacity: 0 };
        break;
      case "zoom-out":
        fromVars = { scale: 2.5, opacity: 0 };
        break;
      default:
        fromVars = { opacity: 0 };
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements, 
        fromVars,
        {
          ...toVars,
          y: 0,
          scale: 1,
          opacity: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: elRef.current,
            start: "top 85%", 
            toggleActions: "restart none none reset",
            scrub: false,
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [type, duration, delay, stagger]);

  return <div ref={elRef}>{children}</div>;
};

export default GsapAnimation;