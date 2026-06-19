import { Link } from "react-router-dom";

function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const logout = () => {

    localStorage.removeItem("user");

    window.location = "/login";

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Fire NOC Portal
        </Link>

        <div>

          {!user && (
            <>
              <Link
                className="btn btn-primary me-2"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="btn btn-success"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}

          {user &&
            user.role === "user" && (
              <>
                <Link
                  className="btn btn-light me-2"
                  to="/home"
                >
                  Home
                </Link>

                <Link
                  className="btn btn-light me-2"
                  to="/apply"
                >
                  Apply NOC
                </Link>

                <Link
                  className="btn btn-light me-2"
                  to="/track"
                >
                  Track Status
                </Link>

                <Link
                  className="btn btn-light me-2"
                  to="/contact"
                >
                  Contact
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}

          {user &&
            user.role === "admin" && (
              <>
                <Link
                  className="btn btn-warning me-2"
                  to="/admin"
                >
                  Dashboard
                </Link>

                <Link
                  className="btn btn-info me-2"
                  to="/reports"
                >
                  Reports
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}

        </div>

      </div>

    </nav>

  );

}

export default Navbar;