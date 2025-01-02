'use client'

import { useEffect, useRef, RefObject } from "react";

export const useObserver = <T extends HTMLElement>(animate:string): RefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animate);
        }
      },
      { threshold: 0.001 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return ref;
};
