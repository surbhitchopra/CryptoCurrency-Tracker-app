import React from 'react';
import CryptoList from './CryptoList'; // Correct path based on file location

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p style={{ color: 'grey', fontSize: '1em' }}>
        Click on a cryptocurrency to see its historical data.
      </p>
      <CryptoList />
    </div>
  );
};

export default Dashboard;
