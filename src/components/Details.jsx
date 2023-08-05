import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../style/Details.css';
import Header from './Header';

function Details() {
  const { city, details } = useParams();
  const filterCityData = useSelector((state) => state.weather.weatherData);
  const filterArray = filterCityData.filter((item) => details === item.name);

  return (
    <>
      <Header routeRet={`/${city}`} />
      <div className="details">{details}</div>
      <div className="banner"><p>City / town weather info</p></div>
      <div className="today">
        {filterArray[0].sky}
        <br />
        Humidity
        {' '}
        {filterArray[0].temp.humidity}
        {' '}
        K
      </div>
      <div className="feels">
        Temperature:
        {' '}
        {filterArray[0].temp.temp}
        {' '}
        K
        ,
        {' '}
        {' '}
        Feels like:
        {' '}
        {filterArray[0].temp.feels_like}
        {' '}
        K
      </div>
      <div className="temp">
        Temp Max:
        {' '}
        {filterArray[0].temp.temp_max}
        {' '}
        K
        ,
        {' '}
        {' '}
        Temp Min:
        {filterArray[0].temp.temp_min}
        {' '}
        K
      </div>
    </>
  );
}

export default Details;
