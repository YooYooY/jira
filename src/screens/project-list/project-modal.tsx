import React, { FC } from "react";
import { Button, Drawer } from "antd";

interface PropjectModalProps {
  projectModalOpen: boolean;
  onClose: () => void;
}

const ProjectModal: FC<PropjectModalProps> = (props) => {
  const { projectModalOpen, onClose } = props;

  return (
    <Drawer onClose={props.onClose} visible={projectModalOpen} width="100%">
      <h1>Project Modal</h1>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
