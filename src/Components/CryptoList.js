import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import './CryptoList.css';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const refreshInterval = 60000; // Refresh data every minute

  // Fetch the list of top 10 cryptocurrencies
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptos(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        setError('Failed to fetch cryptocurrency data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
    const intervalId = setInterval(fetchCryptos, refreshInterval);

    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  // Fetch historical data for the selected cryptocurrency
  const fetchHistoricalData = async (cryptoId) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: '30', // Get historical data for the last 30 days
        },
      });
      const prices = response.data.prices;
      if (prices && prices.length > 0) {
        setHistoricalData(prices);
        setError(null);
      } else {
        setHistoricalData([]); // Clear previous data if no new data is available
        setError('No historical data available.');
      }
    } catch (error) {
      console.error('Error fetching historical data:', error);
      setError('Failed to fetch historical data.');
    }
  };

  // Handle cryptocurrency selection and fetch historical data
  const handleRowClick = (crypto) => {
    setSelectedCrypto(crypto);
    fetchHistoricalData(crypto.id);
  };

  // Prepare chart data
  const chartData = {
    labels: historicalData.map(data => new Date(data[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: historicalData.map(data => data[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)',
        },
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <h1 className="my-4">Cryptocurrency Tracker</h1>
      {loading && <div className="loading-spinner">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id} onClick={() => handleRowClick(crypto)} className="crypto-row">
              <td>{crypto.market_cap_rank}</td>
              <td>{crypto.name}</td>
              <td>${crypto.current_price.toLocaleString()}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td className={crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCrypto && historicalData.length > 0 && (
        <div className="crypto-details">
          <h2>{selectedCrypto.name} - Historical Data</h2>
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoList;

