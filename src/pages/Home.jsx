import { useState } from 'react';
import { useEffect } from 'react';
import { authService } from '../services/api';
import '../styles/home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const greetUser = async () => {
      try {
        const response = await authService.greetUser();
        console.log('Welcome message:', response);
        setMessage(response.message);
      } catch (error) {
        console.error('Error fetching welcome message:', error);
      }
    };
    greetUser();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    // Placeholder for backend call
    setSubscribed(true);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">{message}</h1>
      <p className="home-description">
        MochaPay is a digital wallet and payment system for the next generation of merchants and users.
        Powered by MochaCoin — a token valued at <strong>KES 150</strong>, accepted at MochaCafe and partner outlets.
      </p>

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
  );
}

export default Home;
