import { createJSONStorage, StateStorage } from 'zustand/middleware';

const storageApi: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    const data = sessionStorage.getItem(name);
    return data;
  },
  setItem: function (name: string, value: string): unknown {
    sessionStorage.setItem(name, value);
    return null;
  },
  removeItem: function (name: string): unknown {
    sessionStorage.removeItem(name);
    return null;
  },
};

export const customSessionStorage = createJSONStorage(() => storageApi);
