import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://srinu-project.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      alert("Signup successful! Please login.");
      navigate("/"); // redirect to login
    } catch (err) {
      setError(err.message);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      background: "#fff",
      padding: "2.5rem 2rem",
      borderRadius: "20px",
      width: "350px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    button: {
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      border: "none",
      color: "white",
      padding: "0.9rem 1rem",
      borderRadius: "10px",
      width: "100%",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    error: { color: "red", marginBottom: "1rem" },
    link: { color: "#2575fc", textDecoration: "none" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <a href="/" style={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
