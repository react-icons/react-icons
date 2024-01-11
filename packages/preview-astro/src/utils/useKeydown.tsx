import { useEffect, useRef } from 'react' 

export const useKeydown = (callback: (key: string) => void) => {
  const refCallback = useRef(callback)

  useEffect(() => {
    refCallback.current(callback)
  }, [callback])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      refCallback.current(event.key);
    };
    
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);
}
