import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ApplyNOC from "./pages/ApplyNOC";
import TrackStatus from "./pages/TrackStatus";
import FireGuidelines from "./pages/FireGuidelines";
import ContactUs from "./pages/ContactUs";
import Reports from "./pages/Reports";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Default Page */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* User Pages */}

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/apply"
          element={<ApplyNOC />}
        />

        <Route
          path="/track"
          element={<TrackStatus />}
        />

        <Route
          path="/guidelines"
          element={<FireGuidelines />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Admin */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;