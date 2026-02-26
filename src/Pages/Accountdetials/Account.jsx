import React from "react";

const AccountDetails = () => {
  return (
    <div className="account-container">
      <h2>Account Details</h2>

      <div className="account-card">
        <p><strong>Name:</strong> User Name</p>
        <p><strong>Email:</strong> user@email.com</p>
        <p><strong>Member Since:</strong> 2026</p>
      </div>
    </div>
  );
};

export default AccountDetails;