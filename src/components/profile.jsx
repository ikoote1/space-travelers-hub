/* eslint-disable react/prop-types */
// import { useSelector } from 'react-redux';

const Profile = ({ missionprofile }) => (
  // const { rocketStore } = useSelector((store) => store.rocket);

  <div className="container">
    <div className="row">
      <div className="col-6">
        <h2>My Mission</h2>
        <table className="table table-bordered">
          <tbody>
            {missionprofile.map((missionprofile) => (
              <tr key={missionprofile}>
                <th>{missionprofile}</th>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-6">
        <h2>My Rockets</h2>
        <table className="table table-bordered" />
        {/* <tbody>
            {rocketStore
              .filter((rocket) => rocket.reserved)
              .map((reservedRocket) => (
                <tr key={reservedRocket.id}>
                  <th className="mprtd">{reservedRocket.name}</th>
                </tr>
              ))}
          </tbody>
        </table> */}
      </div>
    </div>
  </div>
);

export default Profile;
