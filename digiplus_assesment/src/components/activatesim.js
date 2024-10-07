import React, { useState } from 'react';
import axios from 'axios';

const ActivateSimCard = () => {
  const [simCardNumber, setSimCardNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleActivate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/activate', { simCardNumber });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error activating SIM card');
    }
  };

  return (
    <div>
      <h2>Activate SIM Card</h2>
      <input
        type="text"
        placeholder="SIM Card Number"
        value={simCardNumber}
        onChange={(e) => setSimCardNumber(e.target.value)}
      />
      <button onClick={handleActivate}>Activate SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default ActivateSimCard;
