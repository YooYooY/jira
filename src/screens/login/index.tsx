import { login, register } from "auth-provider";
import React, { FormEvent } from "react";

type Type = "login" | "register";
const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>, type: Type) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    let params = { username, password };
    //  login(params);
    if (type === "login") login(params);
    if (type === "register") register(params);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, "login")}>
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
      <hr />
      <form onSubmit={(e) => handleSubmit(e, "register")}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="submit">注册</button>
        </div>
      </form>
    </>
  );
};

export default LoginScreen;
