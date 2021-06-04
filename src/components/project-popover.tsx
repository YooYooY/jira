import styled from "@emotion/styled";
import React, { memo } from "react";
import { Divider, List, Popover, Typography } from "antd";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "components/lib";
import { useProjectModal } from "screens/project-list/utils";

const ContainerContainer = styled.div`
  min-width: 30rem;
`;

const ProjectPopover = memo(() => {
  const { open } = useProjectModal();
  const { data: projects, refetch } = useProjects();
  const pinnedProjects = projects?.filter((project) => project.pin);

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
    <Popover
      onVisibleChange={() => refetch()}
      placement={"bottom"}
      content={content}
    >
      <span>项目</span>
    </Popover>
  );
});

export default ProjectPopover;
