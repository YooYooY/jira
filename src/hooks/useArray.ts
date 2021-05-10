import { useCallback, useState } from "react";

export interface UseArrayReturn<T> {
  value: T[];
  clear: () => void;
  removeIndex: (index: number) => void;
  add: (value: T) => void;
}

export const useArray = <T>(arr: T[]): UseArrayReturn<T> => {
  const [value, setValue] = useState(arr);

  const clear = useCallback(() => {
    setValue([]);
  }, []);

  const removeIndex = useCallback((index: number) => {
    setValue((oldVal) => {
      return oldVal.filter((val, i) => i !== index);
    });
  }, []);

  const add = useCallback((newData: T) => {
    setValue((value) => [newData, ...value]);
  }, []);

  return {
    value,
    clear,
    removeIndex,
    add,
  };
};
