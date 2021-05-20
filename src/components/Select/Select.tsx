import { useClickOutSide } from "../../hooks/useClickoutside";
import classnames from "classnames";

import React, {
  FC,
  useMemo,
  FunctionComponent,
  isValidElement,
  useCallback,
  useState,
  createContext,
  useRef,
} from "react";

export interface SelectProps {
  value: string;
  width?: number;
  onChange: (value: string) => void;
}

export interface SelectItem {
  value: string;
  label: React.ReactNode;
}

export interface SelectContext {
  selectValue: string;
  onSelect: (selectItem: SelectItem) => void;
}

export const selectContext = createContext<SelectContext>({
  selectValue: "",
  onSelect: () => {},
});

const Select: FC<SelectProps> = ({
  value,
  onChange,
  width,
  children,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<SelectItem>({ value, label: "" });
  const selectRef = useRef<HTMLDivElement | null>(null);

  useClickOutSide(selectRef, (isClickoutside) => {
    if (!isClickoutside && visible) {
      setVisible(false);
    } else {
      setVisible(!isClickoutside);
    }
  });

  const handleSelect = useCallback(
    (selectItem) => {
      setState(() => selectItem);
      onChange && onChange(selectItem);
    },
    [onChange]
  );

  const classes = useMemo(() => {
    return classnames("cv-select", {
      "cv-select-active": visible,
    });
  }, [visible]);

  const OptionChild = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          const { displayName } = child.type as FunctionComponent;
          const { value: defaultValue, children, label } = child.props;

          if (String(value) === String(defaultValue)) {
            setState((state) => ({
              ...state,
              label: label ? label : children,
            }));
          }
          if (displayName === "select-option") {
            return React.cloneElement(child);
          } else {
            throw new Error("Children must be Select.Option Element");
          }
        } else {
          return null;
        }
      }),
    [children, value]
  );

  const selectValue = useMemo(() => state.value, [state.value]);

  const contextValue = useMemo(
    () => ({
      selectValue,
      onSelect: handleSelect,
    }),
    [handleSelect, selectValue]
  );

  return (
    <selectContext.Provider value={contextValue}>
      <div className={classes} style={{ width }} {...restProps}>
        <div className="cv-select-button" ref={selectRef}>
          {state.label}
          <span className="cv-select-arrow"></span>
        </div>
        <div className="cv-select-list">{visible && OptionChild}</div>
      </div>
    </selectContext.Provider>
  );
};

export default Select;
