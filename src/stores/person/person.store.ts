import { type StateCreator, create } from 'zustand';
import { createJSONStorage, StateStorage, persist } from 'zustand/middleware';
interface PersonState {
  firstName: string;
  lastName: string;
}

interface PersonActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & PersonActions> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
});

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    console.log('getItem: ', name);

    return null;
  },
  setItem: function (name: string, value: string): unknown {
    console.log('setItem: ', name, value);

    return null;
  },
  removeItem: function (name: string): unknown {
    console.log('removeItem: ', name);

    return null;
  },
};

export const usePersonSore = create<PersonState & PersonActions>()(
  persist(storeApi, {
    name: 'person-storage',
    storage: createJSONStorage(() => sessionStorage),
  }),
);
