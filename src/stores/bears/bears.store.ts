// store.ts
import { create } from 'zustand';

// Define types for state & actions
interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increseBackBears: (by: number) => void;
  incresePolarBears: (by: number) => void;
  incresePandaBears: (by: number) => void;
}

// Create store using the curried form of `create`
export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  increseBackBears: (by) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  incresePolarBears: (by) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  incresePandaBears: (by) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
}));
