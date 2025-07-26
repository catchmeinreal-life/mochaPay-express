import { useState } from 'react';
import '../styles/send.css'; // Card-style payment form

function Send() {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendPayment = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!sender || !receiver || !amount) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call or transaction logic here
      setTimeout(() => {
        setMessage(`Successfully sent ${amount} MochaCoins!`);
      }, 1000);
    } catch (error) {
      setMessage('Error occurred during transaction.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSendPayment} className="payment-form">
        <h1>Send MochaCoins</h1>

        <label htmlFor="sender">Sender Wallet ID</label>
        <input
          type="text"
          id="sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
        />

        <label htmlFor="receiver">Receiver Wallet ID</label>
        <input
          type="text"
          id="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          required
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0"
          step="0.01"
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Payment'}
        </button>

        {message && <p className="note">{message}</p>}
      </form>
    </div>
  );
}

export default Send;