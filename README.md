# Jira

## 项目介绍

使用 react17 开发的 Jira 项目，在线地址：[jira](https://yooyooy.github.io/jira)

项目主要包含以下几个特点：

- `service-worker`注册的本地服务器
- `react-query`缓存和管理数据状态
- `乐观更新(optimistic updates)`的机制

关于`乐观更新(optimistic updates)`，从 stackoverflow 上摘抄一位老哥的表述：

> In an optimistic update the UI behaves as though a change was successfully completed before receiving confirmation from the server that it actually was - it is being optimistic that it will eventually get the confirmation rather than an error. This allows for a more responsive user experience.

大意是：用户需要完成跟后台交互的数据操作，例如点赞，投票、删除等等，这种操作后端返回的成功率很高，所以前端直接在交互后完成对应的操作，不必把跟后端交互的流程（loading、成功或失败）反馈出来，让用户体验更爽。

## 一些收获

虽然项目暂告段落，但是其中还是有一些收获和笔记值得记录下 📝

### 错误边界处理

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

### why-did-you-render

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

### profiler 记录性能信息

来自 react 的[Profiler API](https://reactjs.bootcss.com/docs/profiler.html)

> Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 它需要两个 prop ：一个是 id(string)，一个是当组件树中的组件“提交”更新的时候被 React 调用的回调函数 onRender(function)。

```js
function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
}
```

- src/components/profiler.tsx

```tsx
import React, { ProfilerOnRenderCallback, ProfilerProps } from "react";

type Props = { metadata?: any; phases?: ("mount" | "update")[] } & Omit<
  ProfilerProps,
  "onRender"
>;

let queue: unknown[] = [];

const sendProfileQueue = () => {
  if (!queue.length) {
    return;
  }
  const queueToSend = [...queue];
  queue = [];
  console.log(queueToSend);
};

setInterval(sendProfileQueue, 5000);

export const Profiler = ({ metadata, phases, ...props }: Props) => {
  const reportProfile: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    if (!phases || phases.includes(phase)) {
      queue.push({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
        metadata,
      });
    }
  };

  return <React.Profiler onRender={reportProfile} {...props} />;
};
```

在组件中使用：

- src/index.tsx

```tsx
<Profiler id={"Root App"} phases={["mount"]}>
  <App />
</Profiler>
```

### 代码分割

代码分割在路由开发中常用，但是组件里面使用的还是比较少。

项目中涉及到`代码分割`的部分是登录注册页面，主要逻辑如下：

用户数据 ? 登录组件 : 注册组件

显然，当页面加载的时候不必两个组件都加载进来，所以这里用了代码分割：

```tsx
import { FullPageLoading } from "components/lib";

const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
    </div>
  );
```
