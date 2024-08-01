import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';


// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const CryptoDetails = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(30);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        setCrypto(response.data);
        fetchHistoricalData(id, days);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCrypto();
  }, [id, days]);

  const fetchHistoricalData = async (cryptoId, days) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: days,
        },
      });
      setHistoricalData(response.data.prices);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  const handleDaysChange = (days) => {
    setDays(days);
    fetchHistoricalData(id, days);
  };

  const chartData = {
    labels: historicalData.map((data) => new Date(data[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${crypto ? crypto.name : 'Loading...'} Price`,
        data: historicalData.map((data) => data[1]),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container">
      {crypto ? (
        <div>
          <h1>{crypto.name} Details</h1>
          <div className="btn-group mb-3" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={() => handleDaysChange(7)}>7d</button>
            <button type="button" className="btn btn-secondary" onClick={() => handleDaysChange(30)}>30d</button>
            <button type="button" className="btn btn-secondary" onClick={() => handleDaysChange(90)}>90d</button>
            <button type="button" className="btn btn-secondary" onClick={() => handleDaysChange(365)}>1y</button>
          </div>
          <Line data={chartData} />
          <div className="crypto-info mt-4">
            <h3>Current Price: ${crypto.market_data.current_price.usd.toLocaleString()}</h3>
            <h4>Market Cap: ${crypto.market_data.market_cap.usd.toLocaleString()}</h4>
            <h4>24h Change: {crypto.market_data.price_change_percentage_24h.toFixed(2)}%</h4>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CryptoDetails;
