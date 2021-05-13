import React, { FC, useCallback, memo } from "react";
import { SearchProps } from "../../typing";
import { Input } from "antd";
import Select from "../../components/Select";

const { Option } = Select;

const SearchPanel: FC<SearchProps> = memo(({ param, setParam, users }) => {
  const handleChange = useCallback(
    ({ value: personId }) => {
      setParam((param) => ({ ...param, personId }));
    },
    [setParam]
  );

  return (
    <form action="">
      <Input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <Select width={150} value={param.personId} onChange={handleChange}>
        <Option value="">负责人</Option>
        {users.map((user) => (
          <Option key={user.id} value={user.id}>
            {user.name}
          </Option>
        ))}
      </Select>
    </form>
  );
});

export default SearchPanel;
