import React, { FC, useCallback, memo } from "react";
import { SearchProps } from "./typing";

const SearchPanel: FC<SearchProps> = memo(({ param, setParam, users }) => {
  const handleChange = useCallback(
    (e) => {
      const personId = e.target.value;
      setParam((param) => ({ ...param, personId }));
    },
    [setParam]
  );

  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select value={param.personId} onChange={handleChange}>
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
});

export default SearchPanel;
