import '../../Landing/trending/maincontent.css';

export default function MainContent() {
  return (
    <div className="all-content">
      <div className="left-side">
        <div className="text-title">
          <span className="mark-text"></span>
          <span className="text-descrip">Best way to organize your</span>

          <div className="highlight-container">
            <span className="highlight-text">money</span>
          </div>
        </div>
 
        <div className="descrip-text">
          <p>Financial platform that makes your life easier!!</p>
        </div>

        <div className="buttons">
          <button className="button-start">Start Now</button>
          <button className="button-video">Watch the Video</button>
        </div>
      </div>
    </div>
  );
}
