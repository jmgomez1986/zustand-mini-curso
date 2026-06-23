import { WhiteCard } from '../../../components';
import { useBearStore } from '../../../stores';

export const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const incresePandaBears = useBearStore((state) => state.incresePandaBears);

  return (
    <WhiteCard centered>
      <h2>OsosPanda</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => incresePandaBears(+1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {pandaBears} </span>
        <button onClick={() => incresePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
