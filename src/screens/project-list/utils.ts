import { useUrlQueryParam } from "hooks/useUrlQueryParam";
import { useCallback, useMemo } from "react";

// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
    "projectCreate",
  ]);

  const open = useCallback(() => {
    setProjectCreate({ projectCreate: true });
  }, [setProjectCreate]);

  const close = useCallback(
    () => setProjectCreate({ projectCreate: undefined }),
    [setProjectCreate]
  );

  const projectModalOpen = useMemo(() => projectCreate === "true", [
    projectCreate,
  ]);
  return {
    projectModalOpen,
    open,
    close,
  };
};
