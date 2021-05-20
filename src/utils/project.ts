import { useEffect, useCallback, useMemo } from "react";
import { Project } from "typing";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import useAsync from "hooks/useAsync";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  const fetchProjects = useCallback(
    () => client<Project[]>("projects", { data: cleanObject(param || {}) }),
    [client, param]
  );

  useEffect(() => {
    run(fetchProjects(), { retry: fetchProjects });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return useMemo(() => result, [result]);
};

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = useCallback(
    (params: Partial<Project>) => {
      return run(
        client(`projects/${params.id}`, {
          data: params,
          method: "PATCH",
        })
      );
    },
    [run, client]
  );

  return {
    mutate,
    ...asyncResult,
  };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, { data: params, method: "POST" })
    );
  };
  return {
    mutate,
    ...asyncResult,
  };
};
