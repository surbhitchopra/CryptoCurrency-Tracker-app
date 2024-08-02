## Cryptocurrency Tracker

# Overview

Cryptocurrency Tracker is a web application designed to provide real-time tracking and historical analysis of cryptocurrencies. The application allows users to view the current prices of top cryptocurrencies, analyze their historical price data through interactive charts, and monitor price changes over different time periods.

# Features

- Real-Time Cryptocurrency Prices: Display current prices of the top cryptocurrencies.
- Historical Data Analysis: View historical price charts for selected cryptocurrencies.
- Interactive Charts: Analyze historical price trends with interactive Line charts.
- Refresh Data: Automatic data refresh every minute to keep information up-to-date values changes after 24 hours
- Responsive Design: Accessible and usable on both desktop and mobile devices.

# Technologies Used

- Frontend: React.js
- Charting Library: Chart.js
- Backend API: CoinGecko API (for real-time and historical cryptocurrency data)
- Styling: Bootstrap and CSS (for styling and layout)



Usage
1.	View Cryptocurrency Prices: Navigate to the Dashboard page by login to see the list of top cryptocurrencies with their current prices, market caps, and 24-hour changes.
2.	Analyze Historical Data: Click on a cryptocurrency to view its historical price data. You can switch between different time periods (e.g., 7 days, 30 days, 90 days, 1 year) to see the historical price trends.
3.	Interactive Charts: Use the Line charts to visually analyze price changes over the selected time period.
4.	Also designed navtab (Home, Dashboard , About and contact)
API Integration
The application uses the CoinGecko API for retrieving real-time and historical cryptocurrency data. The API endpoints used include:
•	Current Market Data: https://api.coingecko.com/api/v3/coins/markets
•	Historical Market Data: https://api.coingecko.com/api/v3/coins/{id}/market_chart
