import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';

//? Creaar el Store
type ShareState = PersonSlice;

// ...a: une el set, get, storeApi en un solo arreglo de parámetros
export const useWeddingBoundStore = create<ShareState>()((...a) => ({
  ...createPersonSlice(...a),
}));
