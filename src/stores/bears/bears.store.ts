// store.ts
import { create } from 'zustand';

interface Bear {
  id: number;
  name: string;
}
// Define types for state & actions
interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  increseBackBears: (by: number) => void;
  incresePolarBears: (by: number) => void;
  incresePandaBears: (by: number) => void;

  doNothing: () => void;
}

// Create store using the curried form of `create`
export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [{ id: 1, name: 'Oso #1' }],

  increseBackBears: (by) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  incresePolarBears: (by) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  incresePandaBears: (by) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
}));
