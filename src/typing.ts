import { Dispatch, SetStateAction } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

export interface AuthForm {
  username: string;
  password: string;
}

export interface Project {
  id: string;
  name: string;
  personId: string;
}

export interface ListProps {
  list: Project[];
  users: User[];
}

export interface SearchProps {
  param: Project;
  setParam: Dispatch<SetStateAction<Project>>;
  users: User[];
}
