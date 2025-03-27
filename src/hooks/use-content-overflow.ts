import { useState, useEffect } from 'react';

function useContentOverflow(
  ref: React.RefObject<HTMLElement | null>,
  maxHeight: number,
): boolean {
  const [isContentOverflow, setIsContentOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        setIsContentOverflow(ref.current.scrollHeight > maxHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [ref, maxHeight]);

  return isContentOverflow;
}

export default useContentOverflow;
