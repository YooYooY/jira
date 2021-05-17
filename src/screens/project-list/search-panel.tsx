import React, { FC, useCallback, memo } from "react";
import { SearchProps } from "../../typing";
import { Input } from "antd";
import Select from "../../components/Select";
import styled from "@emotion/styled";

const { Option } = Select;
const Form = styled.form`
  display: flex;
  margin-bottom: 2rem;
`;

const SearchPanel: FC<SearchProps> = memo(({ param, setParam, users }) => {
  const handleChange = useCallback(
    ({ value: personId }) => {
      setParam((param) => ({ ...param, personId }));
    },
    [setParam]
  );

  return (
    <Form>
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
    </Form>
  );
});

export default SearchPanel;
