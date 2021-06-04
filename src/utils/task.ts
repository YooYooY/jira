import { useHttp } from "utils/http";
import { useQuery, QueryKey, useMutation } from "react-query";
import {
  useAddConfig,
  useDeleteConfig,
  useEditConfig,
  useReorderTaskConfig,
} from "utils/use-optimistic-options";
import { Task, TaskType } from "typing";
import { SortProps } from "utils/kanban";

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();

  return useQuery(["tasks", param], () =>
    client<Task[]>("tasks", { data: param })
  );
};

export const useTaskTypes = () => {
  const client = useHttp();
  return useQuery(["taskTypes"], () => client<TaskType[]>("taskTypes"));
};

export const useAddTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks`, {
        data: params,
        method: "POST",
      }),
    useAddConfig(queryKey)
  );
};

export const useTask = (id?: number) => {
  const client = useHttp();
  return useQuery<Task>(["task", { id }], () => client(`tasks/${id}`), {
    enabled: Boolean(id),
  });
};

export const useEditTask = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks/${params.id}`, {
        method: "PATCH",
        data: params,
      }),
    useEditConfig(queryKey)
  );
};

export const useDeleteTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`tasks/${id}`, {
        method: "DELETE",
      }),
    useDeleteConfig(queryKey)
  );
};

export const useReorderTask = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation((params: SortProps) => {
    return client("tasks/reorder", {
      data: params,
      method: "POST",
    });
  }, useReorderTaskConfig(queryKey));
};
