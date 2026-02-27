import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/account/login");
  };

  if (!user) {
    return <Navigate to="/account/login" />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Account Details</h2>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Account;