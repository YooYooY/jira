export const cleanObject = (obj: Record<string, any>): string => {
  return Object.entries(obj)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .join("&");
};
