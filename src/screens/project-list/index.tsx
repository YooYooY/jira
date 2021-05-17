import React, { useState, useMemo, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject } from "../../utils";
import { useMount } from "../../hooks/useMount";
import { useDebounce } from "../../hooks/useDebounce";
import { User, Project } from "../../typing";
import { useHttp } from "../../utils/http";

export const ProjectListScreen = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [param, setParam] = useState<Project>({
    id: "",
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const client = useHttp();

  const queryStr = useDebounce(
    useMemo(() => cleanObject(param), [param]),
    300
  );

  useEffect(() => {
    client("projects", { data: queryStr }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryStr]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
