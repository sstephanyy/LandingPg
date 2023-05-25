import Area from '../../Landing/commom/Area';
import Logo from '../../Landing/commom/Logo';
import { NavRoots } from '../../Landing/header/NavRoots';
import './standard.css';

export default function Header() {
  return (
    <header className="header">
    <Area>
      <div className="navbar-items">
        <Logo />
        <NavRoots />
      </div> 
    </Area>
    </header>
  );
}
