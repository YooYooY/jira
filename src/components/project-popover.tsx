import styled from "@emotion/styled";
import React, { memo, useCallback } from "react";
import { Divider, List, Popover, Typography } from "antd";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "components/lib";
import { useDispatch } from "react-redux";
import { projectListActions } from "screens/project-list/project-list.slice";

const ContainerContainer = styled.div`
  min-width: 30rem;
`;

const ProjectPopover = memo(() => {
  // const { open } = useProjectModal();
  const { data: projects } = useProjects();
  const pinnedProjects = projects?.filter((project) => project.pin);
  const dispatch = useDispatch();
  const open = useCallback(() => {
    dispatch(projectListActions.openProjectModal());
  }, [dispatch]);

  const content = (
    <ContainerContainer>
      <Typography.Text type="secondary"></Typography.Text>
      <List>
        {pinnedProjects?.map((projects) => (
          <List.Item key={projects.id}>
            <List.Item.Meta title={projects.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding onClick={open} type={"link"}>
        创建项目
      </ButtonNoPadding>
    </ContainerContainer>
  );

  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
});

export default ProjectPopover;
