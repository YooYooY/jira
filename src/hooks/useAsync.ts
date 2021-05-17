import React, { useCallback, useMemo, useState } from "react";

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};

const useAsync = <D>(
  initState?: State<D>,
  initConfig?: typeof defaultConfig
) => {
  const config = useMemo(() => ({ ...defaultConfig, ...initConfig }), [
    initConfig,
  ]);

  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initState,
  });

  const setData = useCallback((data: D) => {
    setState({
      data,
      stat: "success",
      error: null,
    });
  }, []);

  const setError = useCallback((error: Error) => {
    setState({
      error,
      stat: "error",
      data: null,
    });
  }, []);

  const run = useCallback(
    (promise: Promise<D>) => {
      if (!(promise instanceof Promise)) {
        throw new Error("请传入 Promise 类型数据");
      }
      setState((state) => ({ ...state, stat: "loading" }));
      return promise
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => {
          setError(error);
          if (config.throwOnError) return Promise.reject(error);
          return error;
        });
    },
    [setData, setError, config]
  );

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};

export default useAsync;
