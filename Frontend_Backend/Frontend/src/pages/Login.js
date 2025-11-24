import React, { useState, useRef } from "react";

export default function Q2_Login() {
  const [username, setUsername] = useState(""); // controlled
  const passwordRef = useRef(null); // uncontrolled

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordValue = passwordRef.current ? passwordRef.current.value : "";
    console.log("Username:", username);
    console.log("Password:", passwordValue);
    // Optional: clear fields
    setUsername("");
    if (passwordRef.current) passwordRef.current.value = "";
  };

  return (
    <div>
      <h2>Q2 — Login (Controlled & Uncontrolled)</h2>
      <form onSubmit={handleSubmit} className="card" style={{ maxWidth: "360px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username (Controlled)</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{ width: "100%", padding: "8px", marginTop: "6px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password (Uncontrolled)</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
            style={{ width: "100%", padding: "8px", marginTop: "6px" }}
            required
          />
        </div>

        <button type="submit" style={{ padding: "8px 12px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#555" }}>
        On submit, check the browser console to see the logged values.
      </p>
    </div>
  );
}
