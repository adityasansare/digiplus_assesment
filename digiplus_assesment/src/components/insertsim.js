import React, { useState } from 'react';
import axios from 'axios';

const InsertSimCard = () => {
  const [simCardNumber, setSimCardNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleInsert = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add-sim', { simCardNumber });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error inserting SIM card');
    }
  };

  return (
    <div>
      <h2>Insert New SIM Card</h2>
      <input
        type="text"
        placeholder="SIM Card Number"
        value={simCardNumber}
        onChange={(e) => setSimCardNumber(e.target.value)}
      />
      <button onClick={handleInsert}>Insert SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default InsertSimCard;
