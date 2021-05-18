# Jira

## 错误边界处理

借住类组件的静态方法`gatDerivedStateFromError`，可以捕获子组件运行中的异常

编写组件`components/error-boundary.tsx`：

```tsx
import React, { Component, PropsWithChildren } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

type Props = PropsWithChildren<{
  fallbackRender: FallbackRender;
}>;

type State = {
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state = { error: null };
  static gatDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
```

`App.tsx`中使用:

```tsx
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}
```

`FullPageErrorFallback`用户提示错误信息，注意生产环境和开发环境下的提示处理：

```tsx
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />
    <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  </FullPage>
);
```

## why-did-you-render

`why-did-you-render`用于排查重复渲染的原因，在 hook 的开发中还是挺实用的。

安装：

```sh
npm i @welldone-software/why-did-you-render -D
```

新建文件`src/wdyr.ts`，输入下面内容：

```tsx
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}
```

> 排查错误一般会在开发阶段使用，所以先判断`process.env.NODE_ENV`状态。

需要在入口文件`src/index.tsx`第一行引入：

```ts
import "./wdyr";
```

在需要使用的组件中，设置组件`whyDidYouRender`属性为 true:

```ts
ComponentNeedCheck.whyDidYouRender = true;
```
