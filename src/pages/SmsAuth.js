
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/SmsAuth.css'

const SmsAuth = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const sendCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-code', { phoneNumber });
      if (response.data.success) {
        setMessageSent(true);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-code', { token });
      if (response.data.success) {
        onVerify();
      } else {
        setError('Invalid code. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify code. Please try again.');
    }
  };

  return (
    <div className="sms-auth-container">
      <h2>Authentification par SMS</h2>
      {!messageSent ? (
        <form onSubmit={sendCode}>
          <div className="form-group">
            <label>Numéro de téléphone</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {error && <span className="error">{error}</span>}
          </div>
          <button type="submit">Envoyer le code</button>
        </form>
      ) : (
        <form onSubmit={verifyCode}>
          <div className="form-group">
            <label>Code de vérification</label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {error && <span className="error">{error}</span>}
          </div>
          <button type="submit">Vérifier le code</button>
        </form>
      )}
    </div>
  );
};

export default SmsAuth;
