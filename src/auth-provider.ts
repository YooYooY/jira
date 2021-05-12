import { resolve } from "dns";
import { AuthForm, User } from "./typing";
import { request } from "./request";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

interface Result {
  user: User;
}

export const handleUserResponse = ({ user }: Result) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: AuthForm) => {
  const result = await request.post<Result>(`${apiUrl}/login`, data);
  return handleUserResponse(result);
};

export const register = async (data: AuthForm) => {
  const result = await request.post<Result>(`${apiUrl}/register`, data);
  return handleUserResponse(result);
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
