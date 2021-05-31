import { useQuery } from "react-query";
import { Kanban } from "typing";
import { useHttp } from "./http";

export const useKanbans = (param?: Partial<Kanban>) => {
  const client = useHttp();
  return useQuery(["kanbans", param], () =>
    client<Kanban[]>("kanbans", { data: param })
  );
};
