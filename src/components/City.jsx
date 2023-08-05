import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/City.css';
import { Arrow } from '../assets/icons';
import Header from './Header';

function City() {
  const citys = useSelector((state) => state.locations.coord);
  const { city } = useParams();
  const filterArray = citys.filter((item) => city === item.country);

  return (
    <>
      <Header routeRet="/" />
      <div className="city">CITY</div>
      <div className="banner"><p>City / town location</p></div>
      <div className="cityContainer">
        {
        filterArray.map((item) => (
          <div className="cityCard" key={item.city}>
            <div className="cityName">{item.city}</div>
            <div className="lat">
              lat:
              {' '}
              {item.lat.toFixed(2)}
            </div>
            <div className="lon">
              Lon:
              {' '}
              {item.lon.toFixed(2)}
            </div>
            <NavLink className="cityArrow" to={item.city}><Arrow /></NavLink>
          </div>
        ))
      }
      </div>
    </>
  );
}

export default City;
