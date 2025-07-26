# Hackathon BootDev

A simple React-based payment interface for sending MochaCoins, built for hackathon prototyping. This app features user registration, a payment form, and a home dashboard.

## Backend API

This frontend consumes a pre-existing backend API I built before the hackathon.  
The backend is **not** part of this submission and will not be judged.  
Hosted at: [https://mochapayment.onrender.com/](https://mochapayment.onrender.com/)

## Features

- User registration form
- Send MochaCoins to other users
- Simple, card-style payment UI
- React Router navigation

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd hackathon_BootDev
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Build for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

- `src/pages/Home.jsx` – Home dashboard and payment entry
- `src/pages/Send.jsx` – Payment form for sending MochaCoins
- `src/pages/Register.jsx` – User registration form
- `src/App.jsx` – Main app and routing
- `src/styles/` – CSS files for styling

## API Integration

- Registration endpoint: `https://api.mochapay.io/register`
- Payment logic: (to be implemented or connected to your backend)

## License

MIT
