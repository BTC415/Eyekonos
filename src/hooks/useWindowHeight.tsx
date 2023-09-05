import { useState, useEffect } from 'react';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // return [windowHeight, setWindowHeight];
  return windowHeight;
};

export default useWindowHeight;
