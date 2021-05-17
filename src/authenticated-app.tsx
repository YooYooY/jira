import React, { memo } from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Container, Header, HeaderLeft, HeaderRight, Main } from "./style";
import { Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { user, logout } = useAuth();

  const MenuOperate = () => (
    <Menu>
      <Menu.Item key={"logout"}>
        <a onClick={logout}>登出</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={MenuOperate}>
            <a>Hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};
