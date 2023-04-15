import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/navigation';
import Rockets from './components/rockets';
import Mission from './components/missions';
import Profile from './components/profile';
import './App.css';

function App() {
  const [joinedMissions, setJoinedMissions] = useState({});
  const [missionProfile, setMissionProfile] = useState([]);

  const handleJoinMission = (missionId, missionName) => {
    // Update the local state to indicate that the user has joined the mission
    setJoinedMissions((joinedMissions) => ({ ...joinedMissions, [missionId]: true }));
    setMissionProfile([...missionProfile, missionName]);
  };

  const handleLeaveMission = (missionId, missionName) => {
    // Update the local state to indicate that the user has left the mission
    setJoinedMissions((joinedMissions) => ({ ...joinedMissions, [missionId]: false }));
    setMissionProfile(missionProfile.filter((name) => name !== missionName));
  };
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission handleJoinMission={handleJoinMission} handleLeaveMission={handleLeaveMission} joinedMissions={joinedMissions} />} />
        <Route path="/profile" element={<Profile missionprofile={missionProfile} />} />
      </Routes>
    </div>
  );
}

export default App;
