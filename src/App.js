import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { addLocations } from './redux/slices/locationSlice';
import './App.css';
import Details from './components/Details';
import Country from './components/Country';
import City from './components/City';
import { fetchWeather } from './redux/slices/contentSlice';

const all = [
  {
    country: 'Canada', city: 'Toronto', lat: 43.6549655646058, lon: -79.37479941846408,
  },
  {
    country: 'Canada', city: 'Vancuver', lat: 49.28456521938234, lon: -123.12214104360507,
  },
  {
    country: 'Canada', city: 'Calgary', lat: 51.04822030704042, lon: -114.06432261717674,
  },
  {
    country: 'United States', city: 'New York', lat: 40.71843407765192, lon: -73.98645256066996,
  },
  {
    country: 'United States', city: 'Seattle', lat: 47.608608767489734, lon: -122.33109182292564,
  },
  {
    country: 'United States', city: 'Denver', lat: 39.74099412778967, lon: -104.98971967171701,
  },
  {
    country: 'Mexico', city: 'Mexico City', lat: 19.43396573331607, lon: -99.12226945387417,
  },
  {
    country: 'Mexico', city: 'Guadalajara', lat: 20.661229118581875, lon: -103.34537718727384,
  },
  {
    country: 'Mexico', city: 'Puebla', lat: 19.041312739118077, lon: -98.20257936857907,
  },
  {
    country: 'Brazil', city: 'Rio de Janeiro', lat: -22.91021810384214, lon: -43.19987864510543,
  },
  {
    country: 'Brazil', city: 'Sao Paulo', lat: -23.55293784299838, lon: -46.62889888087177,
  },
  {
    country: 'Brazil', city: 'Salvador', lat: -12.98380135725205, lon: -38.50927810765993,
  },
  {
    country: 'Argentina', city: 'Buenos Aires', lat: -34.60075026602496, lon: -58.38809492227143,
  },
  {
    country: 'Argentina', city: 'Cordoba', lat: -31.413339055753784, lon: -64.18660544329883,
  },
  {
    country: 'Argentina', city: 'Rosario', lat: -32.959350988616954, lon: -60.68701733930564,
  },
  {
    country: 'Chile', city: 'Santiago', lat: -33.42959672227586, lon: -70.66020381533912,
  },
  {
    country: 'Chile', city: 'Viña del Mar', lat: -33.015270240895894, lon: -71.54020497908475,
  },
  {
    country: 'Chile', city: 'Valparaiso', lat: -33.04716585309701, lon: -71.61310995287344,
  },
];

function App() {
  const Tigger = useDispatch();

  Tigger(addLocations(all));

  const coords = useSelector(((state) => state.locations.coord));
  coords.forEach(({ lat, lon, city }) => {
    Tigger(fetchWeather([lat, lon, city]));
  });

  return (
    <Routes>
      <Route path="/" element={<Country />} />
      <Route path="/:city" element={<City />} />
      <Route path="/:city/:details" element={<Details />} />
    </Routes>
  );
}

export default App;
