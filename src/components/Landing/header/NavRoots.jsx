import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Benefits } from '../../Landing/header/PageRoutes/Benefits';
import { Home } from '../../Landing/header/PageRoutes/Home';
import { Testimonials } from '../../Landing/header/PageRoutes/Testimonials';
import '../../Landing/header/navroot.css';

export const NavRoots = () => {
  return (
    <div>
      <Router>
        <div className="items-container">
          <Link to="#" className="items">
            Home
          </Link>
          <Link to="#benefits" className="items">
            Benefits
          </Link>
          <Link to="#testimonials" className="items">
            Testimonials
          </Link>
          <Link to="#" className="items btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-google"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
            </svg>
            Login
          </Link>
        </div>

        <Routes>
          <Route path="#home" element={<Home />} />
          <Route path="#testimonials" element={<Testimonials />} />
          <Route path="#benefits" element={<Benefits />} />
        </Routes>
      </Router>
    </div>
  );
};
