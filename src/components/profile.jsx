/* eslint-disable react/prop-types */

const Profile = ({ missionprofile }) => (

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
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Falcon 9</th>
            </tr>
            <tr>
              <th>Falcon Heavy</th>
            </tr>
            <tr>
              <th>AsiasSat</th>
            </tr>
            <tr>
              <th>Starship</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Profile;
