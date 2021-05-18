import { useSearchParams } from "react-router-dom";
import { useMemo, useRef } from "react";

type QueryReturnParam<T extends string> = Record<T, string>;
type QuerySetSearchParam<T extends string> = (param: Record<T, string>) => void;

export const useUrlQueryParam = <T extends string>(
  keys: T[]
): [QueryReturnParam<T>, QuerySetSearchParam<T>] => {
  const keysRef = useRef(keys);
  const [searchParams, setSearchParam] = useSearchParams();

  return useMemo(
    () => [
      keysRef.current.reduce(
        (total, key) => ({ ...total, [key]: searchParams.get(key) || "" }),
        {} as QueryReturnParam<T>
      ),
      setSearchParam,
    ],
    [keysRef, searchParams, setSearchParam]
  );
};
