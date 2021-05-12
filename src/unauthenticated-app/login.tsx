import { useAuth } from "../context/auth-context";
import React, { FormEvent } from "react";

export const LoginScreen = () => {
  const { login } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [
      { value: username },
      { value: password },
    ] = (event.currentTarget as any).elements as Array<{ value: string }>;

    let params = { username, password };
    login(params);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="submit">登录</button>
        </div>
      </form>
    </>
  );
};
