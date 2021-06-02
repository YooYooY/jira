import React, { FC } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { useDebounce } from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { useUser } from "hooks/useUser";
import { useProjects } from "utils/project";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useProjectModal, useProjectsSearchParams } from "./utils";
import {
  ButtonNoPadding,
  ErrorBox,
  Row,
  ScreenContainer,
} from "components/lib";

export const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const { data: users } = useUser();
  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { open } = useProjectModal();

  useDocumentTitle("项目列表", false);

  return (
    <ScreenContainer>
      <Row between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding onClick={open} type={"link"}>
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel param={param} setParam={setParam} />
      <ErrorBox error={error} />
      <List loading={isLoading} users={users || []} list={list || []} />
    </ScreenContainer>
  );
};

// ProjectListScreen.whyDidYouRender = false;
