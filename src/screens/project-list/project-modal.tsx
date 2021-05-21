import React, { FC } from "react";
import { Button, Drawer } from "antd";
import { useProjectModal } from "./utils";

const ProjectModal = () => {
  const { projectModalOpen, close } = useProjectModal();

  return (
    <Drawer onClose={close} visible={projectModalOpen} width="100%">
      <h1>Project Modal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
