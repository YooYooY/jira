import React, { useCallback } from "react";
import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "./project-list.slice";

const ProjectModal = () => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);
  const close = useCallback(() => {
    dispatch(projectListActions.closeProjectModal());
  }, [dispatch]);

  return (
    <Drawer onClose={close} visible={projectModalOpen} width="100%">
      <h1>Project Modal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
