import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import First from './components/First';
import Second from './components/Second';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
