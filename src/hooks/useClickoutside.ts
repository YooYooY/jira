import { MutableRefObject, useEffect } from "react";

export const useClickOutSide = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (isClickOutSide: boolean) => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      let clickoutSide = false;
      if (!ref.current?.contains(event.target as HTMLElement)) {
        clickoutSide = true;
      }
      callback && callback(clickoutSide);
    };

    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  }, [callback, ref]);
};
