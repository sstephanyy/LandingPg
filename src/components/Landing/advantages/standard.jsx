import { Advantage } from '../../Landing/advantages/Advantage';
import Area from '../../Landing/commom/Area';

export default function Advantages() {
  const image2 =
    'https://github.com/transformacaodev/bitcent/blob/main/public/vantagem-1.jpg?raw=true';

  return (
    <Area id="benefits">
      <Advantage src={image2} alt="Second Image" />
    </Area>
  );
}
