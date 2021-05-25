import { useSearchParams } from "react-router-dom";
import { cleanObject } from "utils";

export const useSetUrlSearchParam = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  return (params: Record<string, unknown>) => {
    const o = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params,
    });
    return setSearchParam(o);
  };
};
