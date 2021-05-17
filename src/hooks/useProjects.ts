import { useEffect } from "react";
import { Project } from "typing";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import useAsync from "./useAsync";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};
