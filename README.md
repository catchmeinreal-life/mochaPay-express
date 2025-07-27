# 🏆 MochaPay — MochaVerse Gateway ‹ Boot.dev Hackathon 2025 Submission ›

**Live Demo:** [https://mochapay-express.onrender.com](https://mochapay-express.onrender.com)

---

## ✨ Project Overview

MochaPay is your secure digital token wallet for the future. Powered by MochaCoin, it enables peer-to-peer and merchant payments inside the MochaVerse ecosystem.

* **Demo‑ready:** New users receive 3 MochaCoins (\~KES 450).
* **Seamless UX:** No login required—simple wallet address entry and a PIN confirm flow.
* **Secure PIN-based validation** (inspired by Safaricom’s M‑PESA PIN model).

> This build was created fresh during the hackathon—only the frontend code was written during the event, while leveraging an existing backend API (transparent per rules). Only the frontend repo is submitted.

---

## 🧠 Technical Stack & Features

* **Frontend:** React (Vite + React)
* **Backend integration:** Axios-powered service calling authenticated endpoints; transaction endpoint `/api/wallet/transfer/pin`
* **PIN verification flow:**

  1. User completes sender/receiver/amount form
  2. Prompted for PIN in modal
  3. Client POSTs: `{ fromAccountId, toAccountId, amount, pin }`
  4. On success: shows confirmation, clears sensitive data
* Uses `react-toastify` for user feedback

**Backend logic:**

* Validates PIN by matching with user's password hash
* Verifies balances & recipient, prevents self‑transfer
* Records transaction and returns transaction summary with updated balance and recipient info
* Base endpoint: transferCoins secured by JWT middleware

---

## 🛠 Installation & Demo

1. Clone frontend repo.
2. Run `npm install` and set `.env` with `VITE_MOCHA_API_URL=https://mochapayment.onrender.com`.
3. `npm start` launches a React app; backend is already hosted.

### Demo flows:

* Visit homepage → view greeting message from API.
* Click Send → fill in wallet addresses & amount.
* Enter PIN modal → confirm → toast feedback + UI response.
* All sensitive values cleared after use.

---

## 📆 Example successful transaction payload

```json
{
  "success": true,
  "message": "Transfer successful with PIN confirmation",
  "data": {
    "transaction": {
      "transactionId":"TXN_...",
      "fromAccountId":"MC_...",
      "toAccountId":"MC_...",
      "amount":5,
      "currency":"MochaCoin",
      "status":"completed",
      "description":"User-confirmed PIN transfer",
      "createdAt":"2025-07-27T09:18:54.811Z"
    },
    "senderBalance":46,
    "receiverInfo":{"accountId":"MC_ADMIN_001","username":"admin"}
  }
}
```

---

## 📣 Business Vision & Promotion

MochaPay is more than a wallet—it's the gateway to the MochaVerse, the new payment ecosystem spanning mobile, café, and merchant transactions.

Leveraging this hackathon entry, I’m engaging early investors to drive adoption and integrate MochaCoin into partner outlets like MochaCafe.

---

## 🤝 Acknowledgements

> "Built this payment gateway for the Boot.dev Hackathon using React + MochaCoin."

Thank you for considering MochaPay!
Let’s make MochaVerse the next-gen payment standard. 🚀
