import React from "react";
import { Kanban } from "typing";
import { useTaskTypes } from "utils/task";
import { useTasksInProject } from "./util";
import taskIcon from "assets/task.svg";
import bugIcon from "assets/bug.svg";

const TaskTypeIcon = ({ id }: { id: number }) => {
  const { data: taskTypes } = useTaskTypes();
  const name = taskTypes?.find((taskType) => taskType.id === id)?.name;
  if (!name) return null;
  return <img src={name === "task" ? taskIcon : bugIcon} alt="task" />;
};

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasksInProject();
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);
  return (
    <div>
      <h3>{kanban.name}</h3>
      {tasks?.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};
