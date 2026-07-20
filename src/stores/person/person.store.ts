import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useWeddingBoundStore } from '../wedding';
// import { customSessionStorage } from '../storages/custom-session-storage.storage';
// import { firebaseStorage } from '../storages/firebase.storage.ts';
interface PersonState {
  firstName: string;
  lastName: string;
}

interface PersonActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

// Se agregan valores para poner en el redux devtools el nombre de la accion
const storeApi: StateCreator<
  PersonState & PersonActions,
  [['zustand/devtools', never], ['zustand/persist', unknown]]
> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value: string) =>
    set({ firstName: value }, false, 'setFirstName'),
  setLastName: (value: string) =>
    set({ lastName: value }, false, 'setLastName'),
});

// Para usar las Redux DevTools con zustand, se debe envolver en otro Middleware
export const usePersonStore = create<PersonState & PersonActions>()(
  devtools(
    persist(storeApi, {
      name: 'person-storage',
      // storage: customSessionStorage,
      // storage: firebaseStorage,
    }),
    { name: 'person-store' },
  ),
);

usePersonStore.subscribe((nextState/*, prevState*/) => {
  // console.log({ nextState, prevState });

  const { firstName, lastName } = nextState;

  useWeddingBoundStore.getState().setFirstName(firstName);
  useWeddingBoundStore.getState().setLastName(lastName);
});
