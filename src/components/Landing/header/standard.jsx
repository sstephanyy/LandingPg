import Area from '../../Landing/commom/Area';
import Logo from '../../Landing/commom/Logo';
import { NavRoots } from '../../Landing/header/NavRoots';

export default function Header() {
  return (
    <Area>
      <div className="navbar-items">
        <Logo />
        <NavRoots />
      </div> 
    </Area>
  );
}
