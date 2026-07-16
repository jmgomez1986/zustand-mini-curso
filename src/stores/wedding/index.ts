import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { createGuestSlice, GuestSlice } from './guest.slice';
import { createDateSlice, DateSlice } from './date.slice';

//? Creaar el Store
type ShareState = PersonSlice & GuestSlice & DateSlice;

// ...a: une el set, get, storeApi en un solo arreglo de parámetros
export const useWeddingBoundStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createGuestSlice(...a),
      ...createDateSlice(...a),
    }),
    { name: 'wedding-store' },
  ),
);
