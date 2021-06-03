import React, { useCallback, useState } from "react";
import { useKanbansQueryKey, useProjectIdInUrl } from "./util";
import { useAddKanban } from "utils/kanban";
import { Input } from "antd";
import { Container } from "./style";

const CreateKanban = () => {
  const [name, setName] = useState("");
  const projectId = useProjectIdInUrl();
  const { mutateAsync: addKanban } = useAddKanban(useKanbansQueryKey());

  const submit = useCallback(async () => {
    await addKanban({ name, projectId });
    setName("");
  }, [name, projectId, addKanban]);

  const handleChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <Container>
      <Input
        size="large"
        placeholder="新建看板名称"
        onPressEnter={submit}
        value={name}
        onChange={handleChange}
      />
    </Container>
  );
};

export default CreateKanban;
