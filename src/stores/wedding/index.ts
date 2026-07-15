import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { createGuestSlice, GuestSlice } from './guest.slice';

//? Creaar el Store
type ShareState = PersonSlice & GuestSlice;

// ...a: une el set, get, storeApi en un solo arreglo de parámetros
export const useWeddingBoundStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createGuestSlice(...a),
    }),
    { name: 'wedding-store' },
  ),
);
