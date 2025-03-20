import { useEffect, useRef, useState } from 'react';

function useScrollVisibility(threshold: number, callback: () => void) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold) {
        setIsVisible(currentScrollY < lastScrollY.current);
        callback();
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, threshold]);

  return isVisible;
}

export default useScrollVisibility;
