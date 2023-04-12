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
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
