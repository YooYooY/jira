import { AuthForm, User } from "./typing";
import { http } from "utils/http";

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
  const result = await http<Result>(`login`, { method: "post", data });
  console.log("getUserData");

  return handleUserResponse(result);
};

export const register = async (data: AuthForm) => {
  const result = await http<Result>(`register`, { method: "post", data });
  return handleUserResponse(result);
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
