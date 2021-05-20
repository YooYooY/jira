import styled from "@emotion/styled";
import React, { FC } from "react";
import { Divider, List, Popover, Typography } from "antd";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "components/lib";

interface ProjectPopoverProps {
  projectButton: React.ReactNode;
}

const ContainerContainer = styled.div`
  min-width: 30rem;
`;

const ProjectPopover: FC<ProjectPopoverProps> = ({ projectButton }) => {
  const { data: projects } = useProjects();
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
      {projectButton}
    </ContainerContainer>
  );

  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
};

export default ProjectPopover;
