import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Layout/Header";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";

import Account from "./Pages/Accountdetials/Account";
import Login from "./Pages/Accountdetials/Login";
import Createaccount from "./Pages/Accountdetials/Createaccount";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Account Routes */}
        <Route path="/account" element={<Account />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/create" element={<Createaccount />} />
      </Routes>
    </Router>
  );
}

export default App;