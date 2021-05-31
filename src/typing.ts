export type PersonId = number | string | undefined;

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
  personId: PersonId;
  pin: boolean;
  organization: string;
  created: number;
}

export interface Task {
  id: number;
  name: string;
  // 经办人
  processorId: number;
  projectId: number;
  epicId: number;
  kanbanId: number;
  typeId: number;
  note: string;
}

export interface Kanban {
  id: number;
  name: string;
  projectId: number;
}
