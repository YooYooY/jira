import React, { useCallback } from "react";
import Select from "components/Select";
import { useUrlQueryParam } from "hooks/useUrlQueryParam";
import { useUser } from "hooks/useUser";

const { Option } = Select;

const UserSelect = () => {
  const [param, setParam] = useUrlQueryParam(["personId"]);
  const { data: users } = useUser();
  const handleChange = useCallback(
    ({ value: personId }) => {
      setParam({ personId });
    },
    [setParam]
  );

  return (
    <div>
      <Select width={150} value={param.personId || ""} onChange={handleChange}>
        <Option value="">负责人</Option>
        {users &&
          users.map((user) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default UserSelect;
