import React, { FC, useContext, useCallback, useEffect } from "react";
import classNames from "classnames";
import { selectContext } from "./Select";

export interface OptionProps {
  value: string;
  label?: string;
}

const Option: FC<OptionProps> = ({ value, label, children }) => {
  const { onSelect, selectValue } = useContext(selectContext);
  const handleChange = useCallback(() => {
    onSelect && onSelect({ value, label: label ? label : children });
  }, [value, label, children, onSelect]);

  const classes = classNames("cv-select-item", {
    "cv-select-item-active": selectValue === value,
  });

  return (
    <div className={classes} onClick={handleChange}>
      {label ? label : children}
    </div>
  );
};

Option.displayName = "select-option";

export default Option;
