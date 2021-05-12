import { cleanObject } from "./utils";

type Method = "get" | "post" | "delete" | "patch" | "put";
const methods: Method[] = ["get", "post", "delete", "patch", "put"];

export type Request<T, K> = {
  [key in Method]: <K>(
    url: string,
    data: T,
    headers?: Record<string, any>
  ) => Promise<K>;
};

const createRequest = <T, K>(): Request<T, K> => {
  const request = {} as Request<T, K>;
  methods.forEach((method: Method) => {
    request[method] = <K>(url: string, data: T, headers = {}) => {
      return new Promise<K>((resolve, reject) => {
        if (method === "get") {
          url = url + "?" + cleanObject(data);
        }

        fetch(url, {
          method: method.toUpperCase(),
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: JSON.stringify(data),
        })
          .then(async (response) => {
            if (response.ok) {
              resolve(await response.json());
            } else {
              reject(await response.json());
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    };
  });

  return request;
};

export const request = createRequest();
