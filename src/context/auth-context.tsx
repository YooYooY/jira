import React, { createContext } from "react";
import { AuthForm, User } from "../typing";
import * as auth from "../auth-provider";
import { http } from "../utils/http";
import { useMount } from "../hooks/useMount";
import useAsync from "hooks/useAsync";
import { FullPageErrorFallback, FullPageLoading } from "components/lib";
import { useQueryClient } from "react-query";

export interface AuthContextProps {
  user: User | null;
  register: (form: AuthForm) => Promise<void>;
  login: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http<{ user: User }>("me", { token });
    user = data.user;
  }
  return user;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
AuthContext.displayName = "AuthContext";

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();

  const queryClient = useQueryClient();

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      queryClient.clear();
    });

  useMount(() => {
    run(bootstrapUser());
  });

  if (isIdle || isLoading) return <FullPageLoading />;
  if (isError) return <FullPageErrorFallback error={error} />;

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};
