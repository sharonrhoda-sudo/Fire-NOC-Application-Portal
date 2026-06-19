import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = async () => {

    try {

      const res =
        await axios.post(
          "http://localhost:8000/api/login",
          {
            email,
            password
          }
        );

      if (
        res.data.message ===
        "User Not Found"
      ) {

        alert(
          "User Not Found"
        );

        return;
      }

      if (
        res.data.message ===
        "Wrong Password"
      ) {

        alert(
          "Wrong Password"
        );

        return;
      }

      if (res.data.user) {

        localStorage.setItem(
          "user",
          JSON.stringify(
            res.data.user
          )
        );

        alert(
          "Login Successful"
        );

        if (
          res.data.user.role ===
          "admin"
        ) {

          window.location =
            "/admin";

        } else {

          window.location =
            "/home";

        }

      }

    } catch (error) {

      console.log(error);

      alert(
        "Login Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <div
        className="card p-4 mx-auto"
        style={{
          maxWidth: "500px"
        }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="btn btn-primary"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;