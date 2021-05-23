import { Dispatch, SetStateAction } from "react";

export interface User {
  id: number;
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
  id: number;
  name: string;
  personId: number | undefined;
  pin: boolean;
  organization: string;
  created: number;
}
