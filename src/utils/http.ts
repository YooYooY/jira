import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context/auth-context";
const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = "";

interface Config extends RequestInit {
  token?: string;
  data?: object | string;
}

type Http = <T>(endpoint: string, config?: Config) => Promise<T>;

export const http: Http = async (
  endpoint,
  { token, method, data, ...restConfig } = {}
) => {
  const config = {
    method: method || "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...restConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    if (typeof data === "string") {
      endpoint += `?${data}`;
    } else {
      endpoint += `?${qs.stringify(data)}`;
    }
  } else {
    config.body = JSON.stringify(data || {});
  }

  return fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export type UseHttp = () => <T>(...args: Parameters<typeof http>) => Promise<T>;

export const useHttp: UseHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: [string, Config?]) =>
    http(endpoint, { token: user?.token, ...config });
};
