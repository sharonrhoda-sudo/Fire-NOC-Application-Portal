import { useState } from "react";
import axios from "axios";

function Signup() {

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: ""
    });

  const register = async () => {

    try {

      await axios.post(
        "http://localhost:8000/api/signup",
        form
      );

      alert(
        "Signup Successful"
      );

      window.location =
        "/login";

    } catch {

      alert(
        "Signup Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <h2>Signup</h2>

      <input
        className="form-control mb-3"
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name:
              e.target.value
          })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email:
              e.target.value
          })
        }
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password:
              e.target.value
          })
        }
      />

      <button
        className="btn btn-success"
        onClick={register}
      >
        Signup
      </button>

    </div>

  );

}

export default Signup;