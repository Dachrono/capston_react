import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Cog, Micro, RevArrow } from '../assets/icons';
import '../style/Header.css';

const Header = ({ routeRet }) => (
  <div className="headerContainer">
    <NavLink to={routeRet} className="return"><RevArrow /></NavLink>
    <div className="weather">Weather</div>
    <div className="micro"><Micro /></div>
    <div className="cog"><Cog /></div>
  </div>
);

export default Header;

Header.propTypes = {
  routeRet: PropTypes.string.isRequired,
};
