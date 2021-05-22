import React, { createContext, useCallback } from "react";
import { AuthForm, User } from "../typing";
import * as auth from "../auth-provider";
import { http } from "../utils/http";
import { useMount } from "../hooks/useMount";
import useAsync from "hooks/useAsync";
import { FullPageErrorFallback, FullPageLoading } from "components/lib";
import * as authStore from "store/auth.slice";
import { bootstrap, selectUser } from "store/auth.slice";
import { useDispatch, useSelector } from "react-redux";

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
  const { error, isLoading, isIdle, isError, run } = useAsync<User | null>();

  const dispatch = useDispatch() as (...args: unknown[]) => Promise<User>;

  useMount(() => {
    run(dispatch(bootstrap()));
  });

  if (isIdle || isLoading) return <FullPageLoading />;
  if (isError) return <FullPageErrorFallback error={error} />;

  return <div>{children}</div>;
};

export const useAuth = () => {
  const dispatch = useDispatch() as (...args: unknown[]) => Promise<User>;
  const user = useSelector(selectUser);
  const login = useCallback(
    (form: AuthForm) => dispatch(authStore.login(form)),
    [dispatch]
  );
  const register = useCallback(
    (form: AuthForm) => dispatch(authStore.register(form)),
    [dispatch]
  );
  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);

  return {
    user,
    login,
    register,
    logout,
  };
};
