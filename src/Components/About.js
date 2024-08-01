import React from 'react';
import './About.css'; // Import a CSS file for styling if needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Cryptocurrency Tracker</h1>
      <p>
        Welcome to CryptoTracker, your go-to platform for tracking and analyzing cryptocurrencies. In today’s fast-paced financial markets, keeping up with cryptocurrency prices and trends is crucial for making informed investment decisions. CryptoTracker is designed to provide you with up-to-date information on various cryptocurrencies, including real-time prices, historical data, and market trends.
      </p>
      <h2>Why Cryptocurrency Tracking?</h2>
      <p>
        Cryptocurrency tracking helps investors and enthusiasts stay informed about the latest market movements. By monitoring price changes, market cap, trading volume, and other key metrics, users can make better decisions about buying, selling, or holding their investments. Our platform offers an intuitive interface to track these metrics and view historical price data for detailed analysis.
      </p>
      <h2>Features of CryptoTracker</h2>
      <ul>
        <li><strong>Real-time Prices:</strong> Get the latest price updates for top cryptocurrencies.</li>
        <li><strong>Historical Data:</strong> View and analyze historical price data to identify trends.</li>
        <li><strong>Market Insights:</strong> Understand market cap, trading volume, and 24-hour price changes.</li>
        <li><strong>Interactive Charts:</strong> Visualize price trends with interactive charts and graphs.</li>
      </ul>
      <h2>Getting Started</h2>
      <p>
        To start using CryptoTracker, simply sign in to your account and explore the dashboard. You can select a cryptocurrency from the list to view detailed information and historical data. Use our interactive charts to analyze price trends and make informed investment decisions.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to <a href="/contact">contact us</a>. We’re here to help you with any inquiries or support you might need.
      </p>
    </div>
  );
};

export default About;
