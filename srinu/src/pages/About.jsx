import React from "react";
import './Home.css'; // Use your main CSS for consistent styling

const About = () => (
  <div className="container">
    <h2 style={{marginTop:'2rem', color:'#ad1457'}}>About Fashion Fusion</h2>
    <div style={{
      background: "#fff",
      borderRadius: "20px",
      padding: "2rem",
      maxWidth: "700px",
      margin: "2rem auto",
      boxShadow: "0 8px 20px rgba(173, 20, 87, 0.1)"
    }}>
      <p style={{fontSize: "1.2rem", color: "#555", marginBottom: "1.5rem"}}>
        <strong>Fashion Fusion</strong> is your modern digital style companion dedicated to personalized fashion advice for all body types.
        We believe every shape is beautiful and deserves to be celebrated with confidence and flair!
      </p>
      <ul style={{textAlign: "left", color: "#4e2352", fontSize: "1.05rem", lineHeight: "1.7"}}>
        <li>Discover in-depth information and style guides for 11 unique body types</li>
        <li>Find tailored clothing tips and outfit suggestions</li>
        <li>Learn to dress for your natural form and celebrate your individuality</li>
        <li>Explore trends, pro styling secrets, and timeless fashion advice</li>
      </ul>
      <p style={{fontSize: "1.1rem", marginTop: "2rem", color: "#8d1451"}}>
        Our goal: To make every woman feel confident and look fabulous, every day!
      </p>
    </div>
  </div>
);

export default About;
