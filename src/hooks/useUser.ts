import { useEffect } from "react";
import { User } from "typing";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import useAsync from "./useAsync";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param, run]);

  return result;
};
