import { createJSONStorage, StateStorage } from 'zustand/middleware';

const firebaseUrl =
  'https://zustand-storage-b0b3b-default-rtdb.firebaseio.com/zustand';

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) =>
        res.json(),
      );
      return JSON.stringify(data);
    } catch (error) {
      console.error(`Error fetching ${name}:`, error);
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const data = await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
      body: value,
    }).then((res) => res.json());
    console.log(data);
  },
  removeItem: function (name: string): unknown {
    sessionStorage.removeItem(name);
    return null;
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
