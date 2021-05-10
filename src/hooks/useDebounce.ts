import { useEffect, useRef, useState } from "react";

export const useDebounce = <T>(
  value: T,
  delay: number,
  immediate?: boolean
): T => {
  const [state, setState] = useState<T>(value);
  const ref = useRef(immediate);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    let timer = setTimeout(() => {
      setState(value);
    }, delay || 300);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
};
