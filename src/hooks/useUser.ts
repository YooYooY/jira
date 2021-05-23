import { useEffect } from "react";
import { useQuery } from "react-query";
import { User } from "typing";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import useAsync from "./useAsync";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();

  return useQuery(["users", param], () =>
    client<User[]>("users", { data: cleanObject(param || {}) })
  );

  // const { run, ...result } = useAsync<User[]>();
  // useEffect(() => {
  //   run(client("users", { data: cleanObject(param || {}) }));
  // }, [param, run]);

  // return result;
};
