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
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import { Drag, Drop, DropChild } from "components/drag-and-drop";

export const KanbanScreen = () => {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans, isLoading: kanbanIsLoading } = useKanbans(
    useKanbanSearchParams()
  );
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = taskIsLoading || kanbanIsLoading;

  return (
    <DragDropContext onDragEnd={() => {}}>
      <ScreenContainer>
        <h1>{currentProject?.name}看板</h1>
        <SearchPanel />
        {isLoading ? (
          <Spin size={"large"} />
        ) : (
          <Drop type={"COLUMN"} direction={"horizontal"} droppableId={"kanban"}>
            <ColumnsContainer>
              {kanbans?.map((kanban, index) => (
                <Drag
                  key={kanban.id || index}
                  draggableId={"kanban" + kanban.id}
                  index={index}
                >
                  <KanbanColumn kanban={kanban} key={kanban.id} />
                </Drag>
              ))}
              <CreateKanban />
            </ColumnsContainer>
          </Drop>
        )}
        <TaskModal />
      </ScreenContainer>
    </DragDropContext>
  );
};

export const ColumnsContainer = styled(DropChild)`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
