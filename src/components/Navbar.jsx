import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <li>
            <NavLink to="/">first</NavLink>
          </li>
          <li>
            <NavLink to="/Second">second</NavLink>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
