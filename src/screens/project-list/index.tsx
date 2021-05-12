import React, { useState, useMemo } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject } from "../../utils";
import { useMount } from "../../hooks/useMount";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";
import { User, Project } from "../../typing";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [param, setParam] = useState<Project>({
    id: "",
    name: "",
    personId: "",
  });

  const queryStr = useDebounce(
    useMemo(() => cleanObject(param), [param]),
    300
  );

  const { result: list, loading } = useFetch<Project[]>(
    `${apiUrl}/projects?${queryStr}`,
    [],
    [queryStr]
  );

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (reps) => {
      if (reps.ok) {
        setUsers(await reps.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      {loading ? "加载中..." : <List users={users} list={list} />}
    </div>
  );
};
