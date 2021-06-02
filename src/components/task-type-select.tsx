import React, { FC } from "react";
import { useTaskTypes } from "utils/task";
import IdSelect, { IdSelectProps } from "./id-select";

export const TaskTypeSelect: FC<IdSelectProps> = (props) => {
  const { data: taskTypes } = useTaskTypes();

  return <IdSelect options={taskTypes || []} {...props} />;
};

export default TaskTypeSelect;
