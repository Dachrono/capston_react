import { Cog, Micro } from '../assets/icons';
import '../style/Header.css';

const Header = () => (
  <div className="headerContainer">
    <div className="weather">Weather</div>
    <div className="micro"><Micro /></div>
    <div className="cog"><Cog /></div>
  </div>
);

export default Header;
