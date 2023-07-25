import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
        // ref.current = null;
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
