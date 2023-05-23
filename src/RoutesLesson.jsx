import { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import './routes.css';

export const AppContext = createContext(); //it'll store all the information I wanna pass down

function RoutesLesson() {

  const [username, setUsername] =  useState('Stephany');

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}> {/*we are gonna be providing data for the elements inside of it*/}
        <Router> 
          <div className="navbar">
            <NavLink to="/" activeClassName="active-home">Home</NavLink>
            <NavLink to="/menu" activeClassName="active-menu">Profile</NavLink>
            <NavLink to="/contact" activeClassName="active-contact">Contact</NavLink>
          </div>

          <Routes> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/menu" element={<Profile/>} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<h1>Not Page Found</h1>} /> {/* when a user navigates to a path that doesn't match any of the specified routes, this mean if is not the Home/Menu/Contact*/}
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default RoutesLesson;
