import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = ({ children, type = "fade-up", duration = 1, delay = 0 }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let fromVars = {};
    let toVars = { duration, delay, ease: "power3.out" };

    switch (type) {
      case "fade-up":
        fromVars = { y: 50, opacity: 0 };
        break;
      case "fade-down":
        fromVars = { y: -50, opacity: 0 };
        break;
      case "zoom-in":
        fromVars = { scale: 0.8, opacity: 0 };
        break;
      case "zoom-out":
        fromVars = { scale: 1.2, opacity: 0 };
        break;
      default:
        fromVars = { opacity: 0 };
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          ...toVars,
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
            scrub: false,
          },
           stagger: 0.2,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [type, duration, delay]);

  return <div ref={elRef}>{children}</div>;
};

export default GsapAnimation;
