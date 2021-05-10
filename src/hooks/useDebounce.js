import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay = 300, immediate) => {
  const [state, setState] = useState(value);
  const ref = useRef(immediate);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    let timer = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
};
