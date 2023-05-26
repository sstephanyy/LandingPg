import Area from '../../Landing/commom/Area';
import { ResponsiveImage } from '../../Landing/commom/responsiveImages';
import MainContent from '../../Landing/trending/MainContent';
import '../../Landing/trending/maincontent.css';
import '../../Landing/commom/responsiveimage.css';

export default function Trending() {

  const imageUrl = 'https://github.com/transformacaodev/bitcent/blob/main/public/principal.jpg?raw=true';

  return (
    <Area id="home">
      <div className="main-content">
        <MainContent />
        <ResponsiveImage src={imageUrl} alt="First Image"/>
      </div>
    </Area>
  );
}
