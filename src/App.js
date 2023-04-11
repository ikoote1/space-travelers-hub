import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Rockets from './components/rockets';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<missions />} />
        <Route path="/profile" element={<profile />} />
      </Routes>
      <h1>GROUP</h1>
    </div>
  );
}

export default App;
