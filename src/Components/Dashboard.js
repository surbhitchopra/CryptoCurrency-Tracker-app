import React from 'react';
import CryptoList from './CryptoList'; // Correct path based on file location

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p style={{ color: 'grey', fontSize: '1em' }}>
        Click on a cryptocurrency name to see its historical data and charts.
      </p>
      <CryptoList />
    </div>
  );
};

export default Dashboard;
