import styled from 'styled-components';

const ImagemResponsive = styled.img`
  width: 100%;
  height: 120px;

  @media (min-width: 640px) {
    width: 200px;
    height: 330px;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 365px;
  }

  @media (min-width: 1024px) {
    width: 550px;
    height: 365px;
  }

`;


export function ResponsiveImage({ src, alt }) {
  return (
    <div className="image-container">
      <img className="img-main" src={src} alt={alt}/>
    </div>
  );
}
