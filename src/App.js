import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import Location from './components/Location';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Location />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/Second" />
      </Routes>
    </>
  );
}

export default App;
