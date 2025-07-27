import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

import NavBar from '../components/NavBar';
import MessageContainer from '../components/Message';

function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    // Placeholder for backend call
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        <MessageContainer />

        <p className="home-description">
          MochaPay is a digital wallet and payment system for the next generation of merchants and users.
          Powered by MochaCoin — a token valued at <strong>KES 150</strong>, accepted at MochaCafe and partner outlets.
        </p>

        <div className="home-subscribe-box center-button">
          <Link className="home-button" to="/send">Send MochaCoins</Link>
        </div>

        <div className="home-subscribe-box">
          <h2 className="home-subscribe-title">🌱 Join the Mocha Ecosystem</h2>
          <p className="home-subscribe-description">
            Subscribe to get early access to MochaCoin airdrops, merchant deals, and community updates.
          </p>

          {subscribed ? (
            <p className="home-success-message">✅ You're subscribed! Welcome aboard!</p>
          ) : (
            <form className="home-subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="home-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="home-button">Subscribe</button>
            </form>
          )}
        </div>

        <div className="home-info">
          <p>
            MochaPay is currently in demo mode. New users receive <strong>3 MochaCoins</strong> (KES 450)
            to send or receive within the ecosystem.
          </p>
          <p className="home-links">
            <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
