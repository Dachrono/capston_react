import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Country.css';
import Header from './Header';
import Location from './Location';
import { Arrow } from '../assets/icons';

function Country() {
  const countrys = useSelector((state) => state.locations.coord);

  const countryCount = countrys.reduce((acc, item) => {
    if (acc[item.country]) {
      acc[item.country] += 1;
    } else {
      acc[item.country] = 1;
    }
    return acc;
  }, {});

  const countryCountArray = Object.entries(countryCount).map(
    ([country, count]) => ({ country, count }),
  );

  return (
    <>
      <Header routeRet="/" />
      <Location />
      <div className="banner"><p>Select country</p></div>
      <div className="cardContainer">
        {
        countryCountArray.map((item) => (
          <div className="card" key={item.country}>
            <NavLink className="arrow" to={item.country}><Arrow /></NavLink>
            <div className="name">{item.country}</div>
            <div className="items">{item.count}</div>
          </div>
        ))
      }
      </div>
    </>
  );
}

export default Country;
