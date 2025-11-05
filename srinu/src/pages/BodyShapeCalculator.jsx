import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const BodyShapeCalculator = () => {
  const [form, setForm] = useState({
    bust: "",
    waist: "",
    hips: "",
    shoulders: "",
    email: "",
  });
  const [result, setResult] = useState(null);
  const [pastResults, setPastResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateShape = () => {
    const { bust, waist, hips, shoulders, email } = form;

    if (!bust || !waist || !hips || !shoulders || !email) {
      alert("Please fill all fields.");
      return;
    }

    const bustVal = parseFloat(bust);
    const waistVal = parseFloat(waist);
    const hipsVal = parseFloat(hips);
    const shouldersVal = parseFloat(shoulders);

    let scores = {
      hourglass: 0,
      pear: 0,
      apple: 0,
      rectangle: 0,
      invertedTriangle: 0,
      diamond: 0,
      topHourglass: 0,
    };

    if (Math.abs(bustVal - hipsVal) <= 5) scores.hourglass += 2;
    if (waistVal <= bustVal * 0.75) scores.hourglass += 2;
    if (hipsVal > bustVal && hipsVal > shouldersVal) scores.pear += 3;
    if (waistVal >= bustVal || waistVal >= hipsVal) scores.apple += 3;
    if (Math.abs(bustVal - hipsVal) <= 5 && Math.abs(bustVal - waistVal) <= 5)
      scores.rectangle += 3;
    if (shouldersVal > hipsVal) scores.invertedTriangle += 3;
    if (waistVal > bustVal && waistVal > hipsVal) scores.diamond += 2;
    if (bustVal > hipsVal && waistVal <= bustVal * 0.75) scores.topHourglass += 2;

    const bestMatch = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    setResult(bestMatch);
    saveShapeToDB({ bust: bustVal, waist: waistVal, hips: hipsVal, shoulders: shouldersVal, result: bestMatch, userEmail: email });
  };

  const saveShapeToDB = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/save-shape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) throw new Error(resData.message);
      alert("✅ Shape saved to your history!");
      fetchPastResults(data.userEmail);
    } catch (err) {
      console.error("❌ Save failed:", err);
    }
  };

  const fetchPastResults = async (email) => {
    try {
      const res = await fetch(`http://localhost:5000/get-results/${email}`);
      const data = await res.json();
      setPastResults(data);
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginTop: "2rem", color: "#ad1457" }}>Body Shape Calculator</h2>
      <div className="card" style={{ maxWidth: "700px", margin: "2rem auto" }}>
        {!result ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateShape();
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {["bust", "waist", "hips", "shoulders"].map((f) => (
              <input
                key={f}
                type="number"
                name={f}
                placeholder={`${f.charAt(0).toUpperCase() + f.slice(1)} (in inches)`}
                value={form[f]}
                onChange={handleChange}
                required
              />
            ))}

            <button type="submit">Calculate Shape</button>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>
              Your closest body shape is: <strong>{result}</strong>
            </p>
            <button onClick={() => navigate(`/bodytypes/${result}`)}>
              View Styling Tips
            </button>
          </div>
        )}
      </div>

      {/* 🕒 Past Results Section */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <h3>📜 Your Past Calculations</h3>
        {pastResults.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {pastResults.map((r, i) => (
              <li key={i}>
                {r.result.toUpperCase()} — {new Date(r.date).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No past results yet.</p>
        )}
      </div>
    </div>
  );
};

export default BodyShapeCalculator;
