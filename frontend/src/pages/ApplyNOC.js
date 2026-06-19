import { useState } from "react";
import axios from "axios";

function ApplyNOC() {

  const [form, setForm] = useState({
    applicantName: "",
    buildingName: "",
    address: "",
    buildingType: ""
  });

  const submitApplication = async () => {

    try {

      await axios.post(
        "http://localhost:8000/api/apply",
        form
      );

      alert(
        "Application Submitted Successfully"
      );

      setForm({
        applicantName: "",
        buildingName: "",
        address: "",
        buildingType: ""
      });

    } catch {

      alert(
        "Submission Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <h2>Apply Fire NOC</h2>

      <input
        className="form-control mb-3"
        placeholder="Applicant Name"
        value={form.applicantName}
        onChange={(e)=>
          setForm({
            ...form,
            applicantName:e.target.value
          })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Building Name"
        value={form.buildingName}
        onChange={(e)=>
          setForm({
            ...form,
            buildingName:e.target.value
          })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Address"
        value={form.address}
        onChange={(e)=>
          setForm({
            ...form,
            address:e.target.value
          })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Building Type"
        value={form.buildingType}
        onChange={(e)=>
          setForm({
            ...form,
            buildingType:e.target.value
          })
        }
      />

      <button
        className="btn btn-danger"
        onClick={submitApplication}
      >
        Submit
      </button>

    </div>

  );

}

export default ApplyNOC;