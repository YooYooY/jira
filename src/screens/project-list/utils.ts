import { useSetUrlSearchParam } from "hooks/useSetUrlSearchParam";
import { useUrlQueryParam } from "hooks/useUrlQueryParam";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProject } from "utils/project";

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

export const useProjectsQueryKey = () => {
  const [params] = useProjectsSearchParams();
  return ["projects", params];
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
    "projectCreate",
  ]);
  const [{ editingProjectId }, setEditingProjectId] = useUrlQueryParam([
    "editingProjectId",
  ]);
  // const [_, setUrlParams] = useSearchParams();
  const setUrlParams = useSetUrlSearchParam();
  const { data: editingProject, isLoading } = useProject(
    Number(editingProjectId)
  );

  const open = useCallback(() => {
    setProjectCreate({ projectCreate: true });
  }, [setProjectCreate]);

  const close = useCallback(
    () => setUrlParams({ projectCreate: "", editingProjectId: "" }),
    [setUrlParams]
  );

  const startEdit = (id: number) =>
    setEditingProjectId({ editingProjectId: id });

  return {
    projectModalOpen: projectCreate === "true" || Boolean(editingProjectId),
    open,
    close,
    startEdit,
    editingProject,
    isLoading,
  };
};
