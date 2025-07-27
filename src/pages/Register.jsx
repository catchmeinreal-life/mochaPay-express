import React, { useState } from "react";
import '../styles/register.css';
import NavBar from "../components/NavBar";
import { authService } from '../services/api';

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [walletInfo, setWalletInfo] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await authService.register(form);

      if (res.success) {
        setMessage(res.message || "User registered successfully");
        setSuccess(true);
        setWalletInfo(res.data.user);
        setForm({ username: "", email: "", password: "" });
      } else {
        setMessage(res.message || "Something went wrong.");
        setSuccess(false);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("User with this email or username already exists");
      } else {
        setMessage("Server error. Try again later.");
      }
      setSuccess(false);
    } finally {
      setLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className="register-container">
        <h2>Create MochaPay Gateway Account</h2>
        <p className="desc">Set up an account to start sending & receiving payments</p>

        {!success ? (
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            { Loading ? (<button type="submit" className="register-btn" >
                Registering...</button>
            ) : (
              <button type="submit" className="register-btn">Register</button>
            )}
          </form>
        ) : (
          walletInfo && (
            <div className="modal success-modal">
              <h3>🎉 Wallet Created Successfully!</h3>
              <p><strong>Username:</strong> {walletInfo.username}</p>
              <p><strong>Email:</strong> {walletInfo.email}</p>
              <p><strong>Wallet ID:</strong> {walletInfo.accountId|| "Check your email for details"}</p>
              <p className="success">{message}</p>
            </div>
          )
        )}

        {message && !success && (
          <div className="register-message error">
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
