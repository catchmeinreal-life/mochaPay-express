import React, { useState } from "react";
import '../styles/register.css';

import NavBar from "../components/NavBar";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      setSuccess(false);
      return;
    }

    try {
      const res = await fetch("https://api.mochapay.io/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Wallet created! Your Wallet ID: ${data.walletId || "Check your email"}`);
        setSuccess(true);
        setForm({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setMessage(data.message || "Something went wrong.");
        setSuccess(false);
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
      setSuccess(false);
    }
  };

  return (
    <>
    <NavBar />
    <div className="register-container">
      <h2>Create MochaPay Gateway Account</h2>
      <p className="desc">Set up an account to start sending & receiving payments</p>

      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="register-btn">Register</button>
      </form>

      {message && (
        <div className={`register-message ${success ? "success" : "error"}`}>
          {message}
        </div>
      )}
    </div>
    </>
  );
};

export default Register;
