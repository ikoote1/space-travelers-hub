const Profile = () => (
  <div className="container">
    <div className="row">

      <div className="col-6">
        <h2>My Mission</h2>
        <table className="table table-bordered">
          <tbody>
            <tr><th>Telstar</th></tr>
            <tr><th>SES</th></tr>
            <tr><th>AsiasSat</th></tr>
            <tr><th>ABS</th></tr>
          </tbody>

        </table>
      </div>
      <div className="col-6">
        <h2>My Rockets</h2>
        <table className="table table-bordered">
          <tbody>
            <tr><th>Falcon 9</th></tr>
            <tr><th>Falcony Heavy</th></tr>
            <tr><th>AsiasSat</th></tr>
            <tr><th>Starship</th></tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
);
export default Profile;
