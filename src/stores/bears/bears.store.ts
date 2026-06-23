// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

  totalBears: () => number;

  increseBackBears: (by: number) => void;
  incresePolarBears: (by: number) => void;
  incresePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBear: () => void;
}

// Create store using the curried form of `create`

// Al poner el midleware 'persist', la propiedad coputada ya no funciona correctamente (maneja bien
//  la sumas pero al recargar el navegador deja de mantener los nuevos valores), entonces se
// realizan los get como los demas metodos
export const useBearStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,

      bears: [],

      totalBears(): number {
        return (
          get().blackBears +
          get().polarBears +
          get().pandaBears +
          get().bears.length
        );
      },

      increseBackBears: (by) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      incresePolarBears: (by) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      incresePandaBears: (by) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),

      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `Oso ${state.bears.length + 1}`,
            },
          ],
        })),
      clearBear: () => set(() => ({ bears: [] })),
    }),
    { name: 'bears-store' },
  ),
);
