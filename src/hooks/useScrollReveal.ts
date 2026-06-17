import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  threshold?: number;
  childSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      direction = 'up',
      delay = 0,
      duration = 0.6,
      distance = 30,
      stagger = 0,
      threshold = 0.15,
      childSelector,
    } = options;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === 'up') fromVars.y = distance;
    else if (direction === 'down') fromVars.y = -distance;
    else if (direction === 'left') fromVars.x = distance;
    else if (direction === 'right') fromVars.x = -distance;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    gsap.set(targets, fromVars);

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: 'play none none none',
      },
    };

    if (stagger > 0) {
      toVars.stagger = stagger;
    }

    const tween = gsap.to(targets, toVars);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
