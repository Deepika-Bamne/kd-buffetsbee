import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default CreateAccount;