import React, { useState } from "react";
import './Home.css';

const Contact = () => {
  const [formState, setFormState] = useState({name:'', email:'', message:''});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSent(true);
      // You can add real form submit logic here (API call, etc.)
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="container">
      <h2 style={{marginTop:'2rem', color:'#ad1457'}}>Contact Us</h2>
      <div className="card" style={{maxWidth:"700px", margin:"2rem auto"}}>
        {sent ? (
          <p style={{color:"#4caf50", fontWeight:"bold", fontSize:"1.2rem"}}>
            Thank you for your message! We will get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"1.2rem"}}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              style={{padding:"0.8rem", borderRadius:"8px", border:"1px solid #eee", fontSize:"1rem"}}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              style={{padding:"0.8rem", borderRadius:"8px", border:"1px solid #eee", fontSize:"1rem"}}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              style={{padding:"0.8rem", borderRadius:"8px", border:"1px solid #eee", fontSize:"1rem"}}
              required
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #f8bbd0 60%, #f3e5f5 100%)",
                border: "none",
                borderRadius: "12px",
                color: "#880e4f",
                fontWeight: "bold",
                fontSize: "1.15rem",
                padding: "1rem 0",
                cursor: "pointer",
                marginTop: "0.5rem"
              }}
            >
              Send Message
            </button>
          </form>
        )}
        <p style={{color:"#555", marginTop:"2rem"}}>
          Or email us directly at <a href="mailto:info@fashionfusion.com" style={{color:"#aa00ff"}}>info@fashionfusion.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
