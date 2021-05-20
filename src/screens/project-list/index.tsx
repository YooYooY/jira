import React from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { useDebounce } from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { useUser } from "hooks/useUser";
import { useProjects } from "utils/project";
import { Typography } from "antd";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useUrlQueryParam } from "hooks/useUrlQueryParam";

export const ProjectListScreen = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const { data: users } = useUser();
  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list, retry } = useProjects(debounceParam);

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
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

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
