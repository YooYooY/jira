import React, { FC } from "react";
import { useUser } from "hooks/useUser";
import { PersonId } from "typing";
import IdSelect, { IdSelectProps } from "./id-select";

interface UserSelectProps extends IdSelectProps {
  personId: PersonId;
}

const UserSelect: FC<UserSelectProps> = ({
  personId,
  onChange,
  ...restProps
}) => {
  const { data: users } = useUser();

  return (
    <IdSelect
      value={personId || ""}
      onChange={onChange}
      options={users}
      {...restProps}
    />
  );
};

export default UserSelect;
