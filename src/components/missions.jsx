const Mission = () => (
  <div className="container mission-holder">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th colSpan={2}>Status</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Thaicom</th>
          <td>
            Thaicom is a satellite communications company based in Thailand. It operates a fleet
            of geostationary satellites that provide various services, such as broadcast, internet
            connectivity, and data services, to customers in Asia, Africa, Australia, and Europe.
            Thaicom was founded in 1991 and is a subsidiary of Thaicom Public Company Limited,
            which is listed on the Stock Exchange of Thailand.
          </td>
          <td><button type="button" className="btn btn-success">NOT A MAMBER</button></td>
          <td><button type="button" className="btn btn-secondary">Join Mission</button></td>
        </tr>

        <tr>
          <th>Telstar</th>
          <td>
            Telstar is a communications satellite that was launched into space in 1962. It was the
            first privately sponsored satellite and the first to relay television, telephone, and
            fax signals through space. Telstar was built by the American telecommunications company
            AT&T and was launched from Cape Canaveral, Florida, aboard a NASA rocket.
            {' '}
          </td>
          <td><button type="button" className="btn btn-info">ACTIVE MEMBER</button></td>
          <td><button type="button" className="btn btn-danger">Leave Mission</button></td>
        </tr>

        <tr>
          <th>Irindium NEXT</th>
          <td>
            Iridium NEXT was launched in stages between 2017 and 2019, with the last satellite
            launched on January 11, 2019. The constellation was designed to provide
            improved performance, capacity, and reliability compared to the previous
            generation Iridium satellite network. It also includes the capability for
            real-time tracking and monitoring of assets and vehicles using small,
            low-cost devices.
            {' '}
          </td>
          <td><button type="button" className="btn btn-success">NOT A MAMBER</button></td>
          <td><button type="button" className="btn btn-secondary">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Mission;
