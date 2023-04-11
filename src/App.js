import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<rockets />} />
        <Route path="/" element={<missions />} />
        <Route path="/" element={<profile />} />
      </Routes>
      <h1>GROUP</h1>
    </div>
  );
}

export default App;
