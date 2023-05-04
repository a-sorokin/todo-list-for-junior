import { LOCAL_STORAGE_VERSION } from "utils/constant";

export const generateId = (): string => crypto.randomUUID();

export const getItemsFromLS = (key: string): unknown => {
  const items = window.localStorage.getItem(key);
  return items ? JSON.parse(items)[LOCAL_STORAGE_VERSION] : null;
};

export const saveItemsToLS = (key: string, value: unknown): void => {
  const paramsWithVersion = { [LOCAL_STORAGE_VERSION]: value };
  window.localStorage.setItem(key, "");
  window.localStorage.setItem(key, JSON.stringify(paramsWithVersion));
};
