import React, { useCallback } from "react";
import { useSetUrlSearchParam } from "hooks/useSetUrlSearchParam";
import { useTasksSearchParams } from "./util";
import { Row } from "components/lib";
import { Button, Input } from "antd";
import UserSelect from "components/user-select";
import TaskTypeSelect from "components/task-type-select";

export const SearchPanel = () => {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = useCallback(() => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  }, [setSearchParams]);

  const handleChange = (paramsName: string) => ({ value }: { value: string }) =>
    setSearchParams({ [paramsName]: value });

  return (
    <Row marginBottom={4} gap={true}>
      <Input
        style={{ width: "20rem" }}
        placeholder="任务名"
        value={searchParams.name}
        onChange={(evt) => setSearchParams({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName="经办人"
        personId={searchParams.processorId}
        onChange={handleChange("processorId")}
      />
      <TaskTypeSelect
        defaultOptionName="类型"
        value={searchParams.typeId}
        onChange={handleChange("typeId")}
      />
      <Button type="primary" onClick={reset}>
        重置
      </Button>
    </Row>
  );
};
