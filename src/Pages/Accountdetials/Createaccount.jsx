
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Createaccount = () => {
   const navigate = useNavigate();
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister =(e)=>{
e.preventDefault();
const userdata = {email, name, password};
localStorage.setItem("user", JSON.stringify(userdata));

   alert("Account Created Successfully!");
    navigate("/account/login");

}

  return (
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <input required type="text" placeholder="Full Name" value={name}
            onChange={(e) => setName(e.target.value)} />

          <input required type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <input required type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Register</button>
        </form>
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already registered?{" "}
        <Link to="/account/login">Login</Link>
        </p>
        </div>
  );
};

export default Createaccount;