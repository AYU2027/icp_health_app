import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PatientProfile from "./PatientProfile";

function App() {
  return (
    <Router>
      <div>
        <h1>ICP Health App</h1>
        <nav>
          <Link to="/">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/profile">Patient Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


