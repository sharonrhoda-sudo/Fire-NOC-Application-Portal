import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function AdminDashboard() {

  const [applications,
    setApplications] =
    useState([]);

  const loadData = () => {

    axios
      .get(
        "http://localhost:8000/api/applications"
      )
      .then((res) =>
        setApplications(res.data)
      );

  };

  useEffect(() => {

    loadData();

  }, []);

  const approve = async (id) => {

    await axios.put(
      `http://localhost:8000/api/approve/${id}`
    );

    loadData();

  };

  const reject = async (id) => {

    await axios.put(
      `http://localhost:8000/api/reject/${id}`
    );

    loadData();

  };

  return (

    <div className="container mt-5">

      <h2>
        Admin Dashboard
      </h2>

      <table className="table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Building</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {applications.map((app) => (

            <tr key={app.id}>

              <td>{app.id}</td>

              <td>
                {app.applicantName}
              </td>

              <td>
                {app.buildingName}
              </td>

              <td>
                {app.status}
              </td>

              <td>

                <button
                  className="btn btn-success me-2"
                  onClick={() =>
                    approve(app.id)
                  }
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    reject(app.id)
                  }
                >
                  Reject
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AdminDashboard;