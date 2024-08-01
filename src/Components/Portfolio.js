import React, { useState } from 'react';

const Portfolio = () => {
  // Sample data for the portfolio, in a real application this would come from an API or state
  const [portfolio, setPortfolio] = useState([
    { id: 1, name: 'Bitcoin', quantity: 2, price: 30000 },
    { id: 2, name: 'Ethereum', quantity: 5, price: 2000 },
  ]);

  const totalValue = portfolio.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Quantity</th>
            <th>Price (USD)</th>
            <th>Total Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>${(item.quantity * item.price).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Portfolio Value: ${totalValue.toLocaleString()}</h3>
    </div>
  );
};

export default Portfolio;
