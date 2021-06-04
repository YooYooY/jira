export const cleanObject = (obj: Record<string, any>): string => {
  return Object.entries(obj)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .filter(Boolean)
    .join("&");
};

export const resetRoute = () => (window.location.href = window.location.origin+process.env.PUBLIC_URL);
