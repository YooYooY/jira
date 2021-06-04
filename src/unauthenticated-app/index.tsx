import React, { useEffect, useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Divider, Button } from "antd";
import { ErrorBox } from "components/lib";
import { Container, Header, Background, ShadowCard, Title } from "./style";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useDocumentTitle("请登录注册以继续");

  // 切换登录条件，清空报错信息
  useEffect(() => {
    setError(null);
  }, [isRegister]);

  // 2s后清空报错信息
  useEffect(() => {
    let timer: any = null;
    clearTimeout(timer);
    setTimeout(setError, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        <ErrorBox error={error} />
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <Divider />
        <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export default UnauthenticatedApp;
