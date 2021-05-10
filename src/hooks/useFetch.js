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
