import { useEffect, useRef } from "react";

type callbackType = (key: string) => void;

export const useKeyDown = (callback: callbackType): void => {
  const refCallback = useRef(callback);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      refCallback.current(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
