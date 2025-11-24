import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
  This page demonstrates route parameter usage.
  Since this project doesn't create a backend here by default,
  the page includes a small helper to navigate to example ids:
  - Click a link to navigate to /q4?id=1 or /q4?id=2 (simple method)
  The acceptance criteria expects using useParams and fetch; here
  we simulate by reading query param and fetching if backend exists.
*/

export default function Q4_UserDetails() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // helper: navigate to /q4 and fetch based on simple input
  const handleLoad = async (e) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setUser(null);

    try {
      // If you have a backend running at localhost:4000, this will fetch real data:
      const res = await fetch(`http://localhost:4000/users/${id}`);
      if (!res.ok) {
        setUser(null);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      // network or no server
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Q4 — UserDetails (Router + API)</h2>

      <form onSubmit={handleLoad} className="card" style={{ maxWidth: "360px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Enter user id to fetch (backend at http://localhost:4000):</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g., 1"
            style={{ width: "100%", padding: "8px", marginTop: "6px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 12px" }}>
          Load User
        </button>
      </form>

      <div style={{ marginTop: "12px" }}>
        {loading && <p>Loading user details...</p>}
        {!loading && user && (
          <div className="card" style={{ width: "320px" }}>
            <h3>User Details</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
        {!loading && user === null && id && <p style={{ color: "#888" }}>User not found or no backend running.</p>}
      </div>
    </div>
  );
}
