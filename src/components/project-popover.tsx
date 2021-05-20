import styled from "@emotion/styled";
import React, { FC } from "react";
import { Divider, List, Popover, Typography } from "antd";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "components/lib";

interface ProjectPopoverProps {
  setProjectModalOpen: (isOpen: boolean) => void;
}

const ContainerContainer = styled.div`
  min-width: 30rem;
`;

const ProjectPopover: FC<ProjectPopoverProps> = ({ setProjectModalOpen }) => {
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
      <ButtonNoPadding onClick={() => setProjectModalOpen(true)} type="link">
        创建项目
      </ButtonNoPadding>
    </ContainerContainer>
  );

  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
};

export default ProjectPopover;
