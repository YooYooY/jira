import React, { useState, useMemo, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject } from "../../utils";
import { useMount } from "../../hooks/useMount";
import { useDebounce } from "../../hooks/useDebounce";
import { User, Project } from "../../typing";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { useUser } from "hooks/useUser";
import { useProjects } from "hooks/useProjects";
import { Typography } from "antd";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const { data: users } = useUser();
  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debounceParam);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} users={users || []} setParam={setParam} />
      {error && (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      )}
      <List loading={isLoading} users={users || []} list={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
