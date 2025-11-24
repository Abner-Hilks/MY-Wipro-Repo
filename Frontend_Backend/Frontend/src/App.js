import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductCard from "./pages/ProductCard";
import Login from "./pages/Login";
import UserStatus from "./pages/UserStatus";
import UserDetails from "./pages/UserDetails";
import HOCDemo from "./pages/HOCDemo";
import FormikLogin from "./pages/FormikLogin";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <h1>ShopNow - Frontend Features</h1>

        <nav
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/product-card">Product Card</Link>
          <Link to="/login-controlled">Login</Link>
          <Link to="/user-status">User Status</Link>
          <Link to="/user-details">User Details</Link>
          <Link to="/responsive-demo">Responsive</Link>
          <Link to="/formik-login">Formik Login</Link>
        </nav>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<div>Select a page.</div>} />
              <Route path="/product-card" element={<ProductCard />} />
              <Route path="/login-controlled" element={<Login />} />
              <Route
                path="/user-status"
                element={<UserStatus userId={105} />}
              />
              <Route path="/user-details" element={<UserDetails />} />
              <Route path="/responsive-demo" element={<HOCDemo />} />
              <Route path="/formik-login" element={<FormikLogin />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
