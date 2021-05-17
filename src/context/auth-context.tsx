import React, { useState } from "react";
import { AuthForm, User } from "../typing";
import * as auth from "../auth-provider";
import { http } from "../utils/http";
import { useMount } from "../hooks/useMount";
import useAsync from "hooks/useAsync";
import { FullPageErrorFallback, FullPageLoading } from "components/lib";

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

const AuthContext = React.createContext<AuthContextProps | undefined>(
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

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

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

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};
