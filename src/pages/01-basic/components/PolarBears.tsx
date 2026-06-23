import { WhiteCard } from '../../../components';
import { useBearStore } from '../../../stores';

export const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const incresePolarBears = useBearStore((state) => state.incresePolarBears);
  // No se recomienda usar la desestructuracion porque puede traer problemas con el renderizado ya que renderiza componentes que
  // no deben renderizarse

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => incresePolarBears(+1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {polarBears} </span>
        <button onClick={() => incresePolarBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
