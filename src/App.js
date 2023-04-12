import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Rockets from './components/rockets';

import Mission from './components/missions';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<missions />} />
        <Route path="/profile" element={<profile />} />
      </Routes>

      <Mission/>
      <Profile/>
    </div>
  );
}

export default App;
