import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../../components';
import { useBearStore } from '../../../stores';

export const BearsDisplay = () => {
  // El useShalow se encarga de analizar las propiedades del objeto y ver si realmente cambiaron y si cambiaron, lo vuelve a renderizar,
  // sino, no se dispara el re-render
  // const bears = useBearStore((state) => state.bears);
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clarBear = useBearStore((state) => state.clearBear);

  return (
    <WhiteCard>
      <h2>Bears Display</h2>

      <div className='flex flex-col gap-1.5'>
        <button onClick={doNothing}>Do Nothing</button>
        <button onClick={addBear}>Add Bear</button>
        <button className='mb-3' onClick={clarBear}>
          Clear Bear
        </button>
      </div>

      <div className='flex flex-col md:flex-row'>
        <pre>{JSON.stringify(bears, null, 2)}</pre>
      </div>
    </WhiteCard>
  );
};
