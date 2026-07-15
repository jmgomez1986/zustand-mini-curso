import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';

//? Creaar el Store
type ShareState = PersonSlice;

// ...a: une el set, get, storeApi en un solo arreglo de parámetros
export const useWeddingBoundStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createPersonSlice(...a),
    }),
    { name: 'wedding-store' },
  ),
);
