import React, { FC, useCallback, useEffect, useState } from "react";
import { useAddTask } from "utils/task";
import { useProjectIdInUrl, useTasksQueryKey } from "screens/kanban/util";
import { Card, Input, Button } from "antd";

const CreateTask: FC<{ kanbanId: number }> = ({ kanbanId }) => {
  const [name, setName] = useState("");
  const { mutateAsync: addTask } = useAddTask(useTasksQueryKey());
  const [inputMode, setInputMode] = useState(false);
  const projectId = useProjectIdInUrl();

  const submit = useCallback(async () => {
    setInputMode(false);
    await addTask({ projectId, name, kanbanId });
  }, [projectId, name, kanbanId, addTask]);

  const toggle = useCallback(() => setInputMode((mode) => !mode), []);
  const handleChange = useCallback((evet) => {
    setName(evet.target.value);
  }, []);

  useEffect(() => {
    if (!inputMode) {
      setName("");
    }
  }, [inputMode]);

  if (!inputMode)
    return (
      <Button block onClick={toggle}>
        +创建事务
      </Button>
    );

  return (
    <Card>
      <Input
        onBlur={toggle}
        placeholder="需要做什么"
        autoFocus={true}
        onPressEnter={submit}
        value={name}
        onChange={handleChange}
      />
    </Card>
  );
};

export default CreateTask;
