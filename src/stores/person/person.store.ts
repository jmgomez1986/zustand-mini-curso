import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
// import { customSessionStorage } from '../storages/custom-session-storage.storage';
import { firebaseStorage } from '../storages/firebase.storage.ts';
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

export const usePersonSore = create<PersonState & PersonActions>()(
  persist(storeApi, {
    name: 'person-storage',
    // storage: customSessionStorage,
    storage: firebaseStorage,
  }),
);
