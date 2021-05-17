import { useEffect, useMemo } from "react";

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useMemo(() => document.title, []);
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
