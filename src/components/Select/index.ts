import "./style.less";
import Select, { SelectProps } from "./Select";
import Option, { OptionProps } from "./Option";
import { FC } from "react";

type SelectModelProps = FC<SelectProps> & { Option: FC<OptionProps> };

const SelectModel = Select as SelectModelProps;

SelectModel.Option = Option;

export default SelectModel;
