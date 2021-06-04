import { useHttp } from "utils/http";
import { User } from "typing";
import { useQuery } from "react-query";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();

  return useQuery(["users", param], () =>
    client<User[]>("users", { data: param })
  );
};
