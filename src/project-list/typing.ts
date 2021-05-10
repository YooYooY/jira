import { Dispatch, SetStateAction } from "react";

export interface UserProps {
  id: string;
  name: string;
}

export interface PropjectProps {
  id: string;
  name: string;
  personId: string;
}

export interface ListProps {
  list: PropjectProps[];
  users: UserProps[];
}

export interface SearchProps {
  param: PropjectProps;
  setParam: Dispatch<SetStateAction<PropjectProps>>;
  users: UserProps[];
}
