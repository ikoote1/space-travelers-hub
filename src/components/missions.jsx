/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../features/missions/missionsSlice';

const Mission = ({ handleJoinMission, handleLeaveMission, joinedMissions }) => {
  const dispatch = useDispatch();
  const missionStore = useSelector((state) => state.missions.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="container mission-holder">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missionStore.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
              <td>{mission.description}</td>

              {joinedMissions[mission.mission_id] ? (
                <>
                  <td>
                    <button type="button" className="btn btn-success">
                      Active Member
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleLeaveMission(mission.mission_id, mission.mission_name)}
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                    >
                      Not a Member
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleJoinMission(mission.mission_id, mission.mission_name)}

                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
