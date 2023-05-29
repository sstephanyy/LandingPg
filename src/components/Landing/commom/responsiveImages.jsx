export function ResponsiveImage({ src, alt }) {
  return (
    <div className="image-container">
      <img className="img-main" src={src} alt={alt}/>
    </div>
  ); 
} 
