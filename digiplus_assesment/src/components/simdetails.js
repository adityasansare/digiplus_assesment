import React, { useState } from 'react';
import axios from 'axios';

const SimDetails = () => {
  const [simCardNumber, setSimCardNumber] = useState('');
  const [simDetails, setSimDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchSimDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/sim-details/${simCardNumber}`);
      setSimDetails(response.data);
      setError('');
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Error fetching SIM details');
      setSimDetails(null);
    }
  };

  return (
    <div>
      <h2>Get SIM Card Details</h2>
      <input
        type="text"
        placeholder="SIM Card Number"
        value={simCardNumber}
        onChange={(e) => setSimCardNumber(e.target.value)}
      />
      <button onClick={fetchSimDetails}>Fetch Details</button>

      {error && <p>{error}</p>}
      {simDetails && (
        <div>
          <h3>SIM Card Information</h3>
          <p>SIM Number: {simDetails.simCardNumber}</p>
          <p>Phone Number: {simDetails.phoneNumber}</p>
          <p>Status: {simDetails.status}</p>
          <p>Activation Date: {simDetails.activationDate}</p>
        </div>
      )}
    </div>
  );
};

export default SimDetails;
