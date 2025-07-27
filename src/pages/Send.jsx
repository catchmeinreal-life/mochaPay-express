import React, { useState } from 'react';
import '../styles/send.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../components/NavBar';
import { authService } from '../services/api';

const SendMochaCoin = () => {
  const [senderWallet, setSenderWallet] = useState('');
  const [receiverWallet, setReceiverWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [showPinModal, setShowPinModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transferInfo, setTransferInfo] = useState(null); // new state for result

  const handleSendClick = () => {
    if (!senderWallet || !receiverWallet || !amount) {
      toast.error('Please fill in all fields');
      return;
    }
    setShowPinModal(true);
  };

  const handleConfirmTransfer = async () => {
    if (!pin) {
      toast.error('Enter your PIN');
      return;
    }

    setLoading(true);

    try {
      const response = await authService.transact({
        fromAccountId: senderWallet,
        toAccountId: receiverWallet,
        amount: parseFloat(amount),
        pin,
      });

      if (!response.success) {
        toast.error(response.message || 'Transfer failed');
      } else {
        toast.success(`✅ Transferred ${amount} MochaCoins to ${receiverWallet}`);
        setTransferInfo(response.data); // capture result
      }

    } catch (error) {
      const msg = error.response?.data?.message || 'Transfer failed';
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
      setPin('');
      setShowPinModal(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="send-container">
        <h2>Send MochaCoins</h2>

        <input
          type="text"
          placeholder="Sender Wallet"
          value={senderWallet}
          onChange={(e) => setSenderWallet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver Wallet"
          value={receiverWallet}
          onChange={(e) => setReceiverWallet(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleSendClick} disabled={loading}>
          {loading ? 'Processing...' : 'Send Payment'}
        </button>

        {showPinModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Enter your PIN to confirm transfer</h4>
              <input
                type="password"
                placeholder="Transaction PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <div className="modal-buttons">
                <button onClick={handleConfirmTransfer} disabled={loading}>
                  {loading ? 'Sending...' : 'Confirm'}
                </button>
                <button
                  onClick={() => {
                    setShowPinModal(false);
                    setPin('');
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {transferInfo && (
          <div className="transfer-details">
            <h3>✅ Transfer Summary</h3>
            <p><strong>Transaction ID:</strong> {transferInfo.transaction.transactionId}</p>
            <p><strong>From:</strong> {transferInfo.transaction.fromAccountId}</p>
            <p><strong>To:</strong> {transferInfo.receiverInfo.username} ({transferInfo.receiverInfo.accountId})</p>
            <p><strong>Amount:</strong> {transferInfo.transaction.amount} {transferInfo.transaction.currency}</p>
            <p><strong>Status:</strong> {transferInfo.transaction.status}</p>
            <p><strong>New Balance:</strong> {transferInfo.senderBalance} MochaCoins</p>
            <p><strong>Description:</strong> {transferInfo.transaction.description}</p>
            <p><strong>Date:</strong> {new Date(transferInfo.transaction.createdAt).toLocaleString()}</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default SendMochaCoin;
