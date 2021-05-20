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
  pin: boolean;
  organization: string;
  created: number;
}

type SearchParam = Pick<Project, "name" | "personId">;
export interface SearchProps {
  param: SearchParam;
  setParam: (param: SearchParam) => void;
  users: User[];
}
