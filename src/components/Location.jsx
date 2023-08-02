import { useDispatch } from 'react-redux';
import '../style/Location.css';
import { addLocations } from '../redux/slices/locationSlice';

const Location = () => {
  const all = { usa: 15, mex: 16 };
  const Tigger = useDispatch();

  const selectValue = (event) => {
    const locationSelected = event.target.value;
    Tigger(addLocations(locationSelected));
  };

  return (
    <div className="titleContainer">
      <h1>Metrics | Wheather</h1>
      <select className="filter" value={all} onChange={selectValue}>
        <option value={all}>Choose your region</option>
        <option value="northAm">North America</option>
      </select>
    </div>
  );
};

export default Location;
