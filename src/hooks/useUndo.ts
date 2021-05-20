import { useState, useCallback, useMemo } from "react";

export const useUndo = <T>(initialPresent: T) => {
  const [past, setPast] = useState<T[]>([]);
  const [present, setPresent] = useState(initialPresent);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = useMemo(() => past.length !== 0, [past]);
  const canRedo = useMemo(() => future.length !== 0, [future]);

  const undo = useCallback(() => {
    if (!canUndo) return;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    setPast(newPast);
    setPresent(previous);
    setFuture([present, ...future]);
  }, [past, canUndo, present, future]);

  const redo = useCallback(() => {
    if (!canRedo) return;
    const next = future[0];
    const newFuture = future.slice(1);

    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture);
  }, [past, canRedo, present, future]);

  const set = useCallback(
    (newPresent: T) => {
      if (newPresent === present) return;
      setPast([...past, present]);
      setPresent(newPresent);
      setFuture([]);
    },
    [past, present]
  );

  const reset = useCallback((newPresent: T) => {
    setPast([]);
    setPresent(newPresent);
    setFuture([]);
  }, []);

  return [
    { past, present, future },
    { set, reset, undo, redo, canUndo, canRedo },
  ];
};
