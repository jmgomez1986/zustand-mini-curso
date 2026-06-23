import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../../components';
import { useBearStore } from '../../../stores';

export const BearsDisplay = () => {
  // El useShalow se encarga de analizar las propiedades del objeto y ver si realmente cambiaron y si cambiaron, lo vuelve a renderizar,
  // sino, no se dispara el re-render
  // const bears = useBearStore((state) => state.bears);
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);

  return (
    <WhiteCard>
      <h2>Bears Display</h2>

      <button onClick={doNothing}>Do Nothing</button>

      <div className='flex flex-col md:flex-row'>
        <pre>{JSON.stringify(bears, null, 2)}</pre>
      </div>
    </WhiteCard>
  );
};
