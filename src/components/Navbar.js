import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: 'Calculator' },
    { id: 3, path: '/quote', text: 'Quote' },
  ];

  return (
    <nav className="navbar__box">
      <span id="brand-link" className="navbar__brand nav-link">Math Magicians</span>
      <ul className="navbar__menu-list">
        {
          links.map((link) => <li key={link.id} className="navbar__menu-item"><NavLink to={link.path} className="nav-link">{link.text}</NavLink></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;