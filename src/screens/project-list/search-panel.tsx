import React, { FC, useCallback, memo } from "react";
import { Project } from "../../typing";
import { Input, Form } from "antd";
import UserSelect from "components/user-select";

type SearchParam = Pick<Project, "name" | "personId">;

export interface SearchProps {
  param: SearchParam;
  setParam: (param: SearchParam) => void;
}

const SearchPanel: FC<SearchProps> = memo(({ param, setParam }) => {
  const handleUserSelectChange = useCallback(
    ({ value: personId }) => {
      setParam({ ...param, personId });
    },
    [param, setParam]
  );

  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          placeholder="请输入名称"
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          personId={param.personId}
          onChange={handleUserSelectChange}
        />
      </Form.Item>
    </Form>
  );
});

export default SearchPanel;
