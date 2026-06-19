import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Reports() {

  const [stats, setStats] =
    useState({});

  useEffect(() => {

    axios
      .get(
        "http://localhost:8000/api/stats"
      )
      .then((res) =>
        setStats(res.data)
      );

  }, []);

  return (

    <div className="container mt-5">

      <h2>Reports Dashboard</h2>

      <div className="row">

        <div className="col-md-3">

          <div className="card p-3">

            <h5>Total</h5>

            <h2>
              {stats.total || 0}
            </h2>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-3">

            <h5>Approved</h5>

            <h2>
              {stats.approved || 0}
            </h2>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-3">

            <h5>Rejected</h5>

            <h2>
              {stats.rejected || 0}
            </h2>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-3">

            <h5>Pending</h5>

            <h2>
              {stats.pending || 0}
            </h2>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Reports;