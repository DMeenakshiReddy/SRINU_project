import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://srinu-project.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      localStorage.setItem("token", data.token); // store JWT
      alert("Login successful!");
      navigate("/home"); // redirect to home page
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
