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
 
        <div >
          <p className="paragh-text">Financial platform that makes your life easier!!</p>
        </div>

        <div className="buttons">
          <button className="button-start">
            Start Now

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M15 16l4 -4"></path>
            <path d="M15 8l4 4"></path>
            </svg>

          </button>
          

          <button className="button-video">
            Watch the Video
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-zoom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17.011 9.385v5.128l3.989 3.487v-12z"></path>
            <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z"></path>
          </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
