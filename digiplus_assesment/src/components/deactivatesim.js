import React, { useState } from 'react';
import axios from 'axios';

const DeactivateSimCard = () => {
  const [simCardNumber, setSimCardNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleDeactivate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/deactivate', { simCardNumber });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error deactivating SIM card');
    }
  };

  return (
    <div>
      <h2>Deactivate SIM Card</h2>
      <input
        type="text"
        placeholder="SIM Card Number"
        value={simCardNumber}
        onChange={(e) => setSimCardNumber(e.target.value)}
      />
      <button onClick={handleDeactivate}>Deactivate SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default DeactivateSimCard;
