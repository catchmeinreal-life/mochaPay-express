console.log("Base URL:", import.meta.env.VITE_MOCHA_API_URL);

import axios from "axios";

const MochaApi = axios.create({
  baseURL: import.meta.env.VITE_MOCHA_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

MochaApi.interceptors.request.use(
    (config) => {
        //add tokens from localStorage
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('error making request:', error.message);
        return Promise.reject(error.message);
    }
);

MochaApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('got an error while waiting for the response', error.message);
        return Promise.reject(error);
    }
)

/**
 * send and receive mocha 
 * new user onBoarding
 */

export const authService = {
    //get greeting message from the backend
    greetUser: async () => {
        const response = await MochaApi.get('/api/auth/message');
        return response.data;
    },
    transact: async (transactionData) => {
        const response = await MochaApi.post('/api/wallet/transfer/pin', transactionData);
        console.log('server response', response.data.data);
        return response.data;
    },
}