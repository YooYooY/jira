import React, { ComponentProps, FC, useCallback } from "react";
import Select from "components/Select";

export interface IdSelectProps extends ComponentProps<typeof Select> {
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

const { Option } = Select;
const IdSelect: FC<IdSelectProps> = ({
  onChange,
  options,
  value,
  defaultOptionName,
  ...restProps
}) => {
  return (
    <Select width={150} value={value} onChange={onChange} {...restProps}>
      <Option value="">{defaultOptionName || ""}</Option>
      {options &&
        options.map((item) => (
          <Option key={item.id} value={item.id}>
            {item.name}
          </Option>
        ))}
    </Select>
  );
};

export default IdSelect;
