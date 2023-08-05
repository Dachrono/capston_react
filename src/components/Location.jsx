import '../style/Location.css';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const nav = useNavigate();

  const selectValue = (event) => {
    nav(event.target.value);
  };

  return (
    <div className="titleContainer">
      <h1>Metrics | Wheather</h1>
      <select className="filter" defaultValue="0" onChange={selectValue}>
        <option value="0" disabled>Choose your region</option>
        <option value="/Canada">Canada</option>
        <option value="/United States">United States</option>
        <option value="/Mexico">Mexico</option>
        <option value="/Brazil">Brazil</option>
        <option value="/Argentina">Argentina</option>
        <option value="/Chile">Chile</option>
      </select>
    </div>
  );
};

export default Location;
