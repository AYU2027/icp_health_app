import React from "react";

function Signup() {
  return (
    <div>
      <h2>🆕 Signup</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <input placeholder="Confirm Password" type="password" />
      <button>Signup</button>
    </div>
  );
}

export default Signup;
