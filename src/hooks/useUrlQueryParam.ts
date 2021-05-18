import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo, useRef } from "react";
import { cleanObject } from "utils";

type QueryReturnParam<T extends string> = Record<T, string>;
type QuerySetSearchParam<T extends string> = (
  param: Partial<{ [key in T]: unknown }>
) => void;

export const useUrlQueryParam = <T extends string>(
  keys: T[]
): [QueryReturnParam<T>, QuerySetSearchParam<T>] => {
  const keysRef = useRef(keys);
  const [searchParams, setSearchParam] = useSearchParams();

  const setParam = useCallback(
    (params: Partial<{ [key in T]: unknown }>) => {
      setSearchParam(cleanObject(params));
    },
    [setSearchParam]
  );

  return useMemo(
    () => [
      keysRef.current.reduce(
        (total, key) => ({ ...total, [key]: searchParams.get(key) || "" }),
        {} as QueryReturnParam<T>
      ),
      setParam,
    ],
    [keysRef, searchParams, setParam]
  );
};
