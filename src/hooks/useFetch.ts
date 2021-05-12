import { useAuth } from "context/auth-context";
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
  const { user } = useAuth();
  const [result, setResult] = useState<T>(initState);
  const [loading, setLoading] = useState(false);

  let token = "";
  if (user && user.token) {
    token = user.token;
  }

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(async (reps) => {
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
