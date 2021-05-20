import React, { memo, useCallback, useState } from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "hooks/useAuth";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Container, Header, HeaderLeft, HeaderRight, Main } from "./style";
import { Button, Dropdown, Menu } from "antd";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";
import { ButtonNoPadding, Row } from "components/lib";
import ProjectModal from "screens/project-list/project-modal";
import ProjectPopover from "components/project-popover";

export const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <Container>
      <PageHeader setProjectModalOpen={setProjectModalOpen} />
      <Main>
        <Router>
          <Routes>
            <Route
              path="/projects"
              element={
                <ProjectListScreen setProjectModalOpen={setProjectModalOpen} />
              }
            />
            <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
            <Navigate to={"/projects"} />
          </Routes>
        </Router>
      </Main>
      <ProjectModal
        projectModalOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </Container>
  );
};

const PageHeader = memo(
  (props: { setProjectModalOpen: (isOpen: boolean) => void }) => {
    const gotoHome = useCallback(() => {
      resetRoute();
    }, []);

    return (
      <Header between={true}>
        <HeaderLeft gap={true}>
          <ButtonNoPadding type={"link"} onClick={gotoHome}>
            <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
          </ButtonNoPadding>
          <ProjectPopover setProjectModalOpen={props.setProjectModalOpen} />
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <User />
        </HeaderRight>
      </Header>
    );
  }
);

const User = memo(() => {
  const { logout, user } = useAuth();
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={"logout"}>
            <Button onClick={logout} type={"link"}>
              登出
            </Button>
          </Menu.Item>
        </Menu>
      }
    >
      <Button type={"link"} onClick={(e) => e.preventDefault()}>
        Hi, {user?.name}
      </Button>
    </Dropdown>
  );
});
