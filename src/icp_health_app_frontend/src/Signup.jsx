import React from "react";

function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <input
          type="text"
          placeholder="New Username"
        />
        <input
          type="password"
          placeholder="New Password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
        />
        <button>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
