export const cleanObject = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .join("&");
};
