import React, { useCallback } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { useDebounce } from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { useUser } from "hooks/useUser";
import { useProjects } from "utils/project";
import { Typography } from "antd";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useProjectsSearchParams } from "./utils";
import { Row, ButtonNoPadding } from "components/lib";
import { useDispatch } from "react-redux";
import { projectListActions } from "./project-list.slice";

export const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const { data: users } = useUser();
  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list, retry } = useProjects(debounceParam);
  const disaptch = useDispatch();
  const open = useCallback(() => {
    disaptch(projectListActions.openProjectModal());
  }, [disaptch]);

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding onClick={open} type={"link"}>
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel param={param} users={users || []} setParam={setParam} />
      {error && (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      )}
      <List
        refresh={retry}
        loading={isLoading}
        users={users || []}
        list={list || []}
      />
    </Container>
  );
};

// ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
