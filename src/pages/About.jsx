import React from 'react';
import '../styles/about.css';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <h1 className="about-title">About MochaPay</h1>

        <p className="about-intro">
          MochaPay is a modern, secure digital wallet and payment system built around <strong>MochaCoin</strong> — a community-based token designed for fast, easy, and transparent transactions.
        </p>

        <section className="about-section">
          <h2>☕ What is MochaCoin?</h2>
          <p>
            MochaCoin is the native digital currency of the Mocha ecosystem. Each coin is pegged to a fixed value of <strong>KES 150</strong>. 
            Users can use MochaCoins to buy coffee, support creators, or transfer value within the platform instantly.
          </p>
        </section>

        <section className="about-section">
          <h2>🚀 Key Features</h2>
          <ul className="about-list">
            <li><strong>Instant Transfers:</strong> Send MochaCoins to anyone within the platform using just their wallet ID.</li>
            <li><strong>Secure PIN Confirmation:</strong> Every transaction is protected by a password confirmation layer.</li>
            <li><strong>Real-Time Balance Updates:</strong> Know exactly how much you have after every transaction.</li>
            <li><strong>Transparent Records:</strong> View your transaction history with clear details on amount, direction, and recipient.</li>
            <li><strong>Demo Access:</strong> New users start with <strong>3 free MochaCoins</strong> to explore the ecosystem.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🔐 How It Works</h2>
          <ol className="about-list numbered">
            <li>Register your account and get your unique MochaWallet ID.</li>
            <li>Login and access your dashboard to send or receive MochaCoins.</li>
            <li>To send coins, enter the recipient’s wallet ID, amount, and your password (PIN).</li>
            <li>Transaction is securely processed and confirmed instantly.</li>
            <li>Monitor your activity through your personal transaction history page.</li>
          </ol>
        </section>

        <section className="about-section">
          <h2>🌍 The Vision</h2>
          <p>
            MochaPay is built for a community of creators, local merchants, students, and innovators. We believe in frictionless exchange of value without banks, fees, or delays.
          </p>
          <p>
            Join the Mocha movement — where <strong>coffee meets crypto</strong>, and every transaction tells a story.
          </p>
        </section>

        <div className="about-cta">
          <p>👉 Ready to start?</p>
          <a href="/register" className="about-button">Create Your Account</a>
        </div>
      </div>
    </>
  );
}

export default About;
