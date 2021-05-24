import React, { FC, useCallback } from "react";
import Select from "components/Select";
import { useUser } from "hooks/useUser";
import { PersonId } from "typing";

interface UserSelectProps {
  personId: PersonId;
  onChange?: (params: { value: PersonId; label: string }) => void;
}

const { Option } = Select;

const UserSelect: FC<UserSelectProps> = ({ personId, onChange }) => {
  const { data: users } = useUser();

  const handleChange = useCallback(
    (params) => {
      onChange && onChange(params);
    },
    [onChange]
  );

  return (
    <div>
      <Select width={150} value={personId || ""} onChange={handleChange}>
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
