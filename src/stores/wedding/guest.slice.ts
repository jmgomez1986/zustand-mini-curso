import { StateCreator } from 'zustand';

export interface GuestSlice {
  guestCount: number;

  setGuestCount: (guestCount: number) => void;
}

export const createGuestSlice: StateCreator<
  GuestSlice,
  [
    ['zustand/devtools', never], // ← Aquí se declara devtools
  ]
> = (set) => ({
  guestCount: 0,

  setGuestCount: (guestCount: number) =>
    set(
      { guestCount: guestCount > 0 ? guestCount : 0 },
      false,
      'setGuestCount',
    ),
});
