import { useSearchParams } from "react-router-dom";

type QueryReturnParam<T extends string> = Record<T, string | null>;

export const useUrlQueryParam = <T extends string>(
  keys: T[]
): QueryReturnParam<T> => {
  const [searchParams] = useSearchParams();

  return keys.reduce((total, key) => {
    total[key] = searchParams.get(key);

    return total;
  }, {} as QueryReturnParam<T>);
};
