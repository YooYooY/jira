import { useState, useEffect } from "react";

interface FetchResult<T> {
  result: T;
  loading: boolean;
}

export const useFetch = <T>(
  url: string,
  initState: T,
  deps: any[]
): FetchResult<T> => {
  const [result, setResult] = useState<T>(initState);
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
