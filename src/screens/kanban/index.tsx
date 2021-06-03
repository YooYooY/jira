import React, { useEffect } from "react";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import {
  useKanbanSearchParams,
  useProjectInUrl,
  useTasksSearchParams,
} from "./util";
import { KanbanColumn } from "./kanban-column";
import { useKanbans } from "utils/kanban";
import { SearchPanel } from "screens/kanban/search-panel";
import { ScreenContainer } from "components/lib";
import { useTasks } from "utils/task";
import { Spin } from "antd";
import CreateKanban from "screens/kanban/create-kanban";
import TaskModal from "screens/kanban/task-modal";
import { ColumnsContainer } from "./style";

export const KanbanScreen = () => {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans, isLoading: kanbanIsLoading } = useKanbans(
    useKanbanSearchParams()
  );
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = taskIsLoading || kanbanIsLoading;

  return (
    <ScreenContainer>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      {isLoading ? (
        <Spin size={"large"} />
      ) : (
        <ColumnsContainer>
          {kanbans?.map((kanban, index) => (
            <KanbanColumn kanban={kanban} key={index} />
          ))}
          <CreateKanban />
        </ColumnsContainer>
      )}
      <TaskModal />
    </ScreenContainer>
  );
};
