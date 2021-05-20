import React, { FC, useCallback } from "react";
import { Rate, RateProps } from "antd";

interface PinProps extends RateProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Pin: FC<PinProps> = ({ checked, onCheckedChange, ...restProps }) => {
  const handleChange = useCallback(
    (num) => {
      onCheckedChange && onCheckedChange(!!num);
    },
    [onCheckedChange]
  );
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export default Pin;
