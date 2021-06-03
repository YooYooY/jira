import React, { FC, useMemo } from "react";
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
      defaultOptionName="请选择负责人"
      {...restProps}
    />
  );
};

export default UserSelect;
