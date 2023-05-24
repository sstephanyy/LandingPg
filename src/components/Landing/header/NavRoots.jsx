import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Benefits } from '../../Landing/header/PageRoutes/Benefits';
import { Home } from '../../Landing/header/PageRoutes/Home';
import { Testimonials } from '../../Landing/header/PageRoutes/Testimonials';
import '../../Landing/header/navroot.css';

export const NavRoots = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to="#" className="items">Home</Link>
          <Link to="#benefits" className="items">Benefits</Link>
          <Link to="#testimonials" className="items">Testimonials</Link>
        </div>
        
        <Routes>
          <Route path="#home" element={<Home/>}/>
          <Route path="#testimonials" element={<Testimonials/>}/>
          <Route path="#benefits" element={<Benefits/>}/>
        </Routes>
      </Router>
    </div>
  );
};
