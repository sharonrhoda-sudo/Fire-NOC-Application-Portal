import { useState } from "react";
import axios from "axios";

function TrackStatus() {

  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const trackApplication = async () => {

    try {

      const res =
        await axios.get(
          `http://localhost:8000/api/track/${id}`
        );

      setData(res.data[0]);

    } catch {

      alert(
        "Application Not Found"
      );

    }

  };

  return (

    <div className="container mt-5">

      <h2>Track Status</h2>

      <input
        className="form-control mb-3"
        placeholder="Application ID"
        onChange={(e)=>
          setId(e.target.value)
        }
      />

      <button
        className="btn btn-primary"
        onClick={trackApplication}
      >
        Track
      </button>

      {data && (

        <div className="card mt-4 p-3">

          <h4>
            {data.applicantName}
          </h4>

          <p>
            {data.buildingName}
          </p>

          <h5>
            Status:
            {" "}
            {data.status}
          </h5>

        </div>

      )}

    </div>

  );

}

export default TrackStatus;