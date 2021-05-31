import { useHttp } from "utils/http";
import { useQuery } from "react-query";
import { Task } from "typing";

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();

  return useQuery(["tasks", param], () =>
    client<Task[]>("tasks", { data: param })
  );
};
