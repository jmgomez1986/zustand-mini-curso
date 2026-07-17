import { StateCreator } from 'zustand';

export interface ConfirmationSlice {
  isConfirmed: boolean;

  setConfirmation: (value: boolean) => void;
}

export const createConfirmationSlice: StateCreator<
  ConfirmationSlice,
  [
    ['zustand/devtools', never], // ← Aquí se declara devtools
  ]
> = (set) => ({
  isConfirmed: false,

  setConfirmation: (value: boolean) => set({ isConfirmed: value }),
});
