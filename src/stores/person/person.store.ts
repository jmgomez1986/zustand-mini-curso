import { create } from 'zustand';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface PersonActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export const usePersonSore = create<PersonState & PersonActions>()((set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
}));
