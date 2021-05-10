# Jira

## 自定义 Hooks

### useMount

> 页面初始化渲染，更语义化

```js
import { useEffect } from "react";

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
```

### useDebounce

> debounce 函数，加入`immediate`是否立即执行参数，还想返回定时器是否开始的参数，发现挺鸡肋的，删除掉了

```js
import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay = 300, immediate) => {
  const [state, setState] = useState(value);
  const ref = useRef(immediate);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    let timer = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
};
```

### useFetch

> 简化请求方法，添加 loading 参数

```js
import { useState, useEffect } from "react";

export const useFetch = (url, deps = []) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url).then(async (reps) => {
      if (reps.ok) {
        setResult(await reps.json());
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...deps]);

  return {
    result,
    loading,
  };
};
```
