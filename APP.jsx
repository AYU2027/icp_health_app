import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import UpdateForm from "./components/UpdateForm";
import ShareButton from "./components/ShareButton";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🩺 ICP Health App</h1>

      <Login />
      <Signup />
      <Profile />
      <UpdateForm />
      <ShareButton />
    </div>
  );
}

export default App;

