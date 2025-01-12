import React, { useEffect, useState } from "react";
import axios from "axios";

const Coinprice = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    // Fetch Bitcoin price data
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "usd,inr",
              include_24hr_change: "true",
            },
          }
        );
        setPriceData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin price data:", error);
      }
    };

    fetchPriceData();
  }, []);

  if (!priceData) {
    return <p>Loading...</p>;
  }

  const { usd, inr, usd_24h_change } = priceData;

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  const getChangeColor = (change) => {
    return change > 0 ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100";
  };

  const getChangeSymbol = (change) => {
    return change > 0 ? "▲" : "▼";
  };

  return (
    <div className="h-[670px] w-full p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" alt="Bitcoin Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Bitcoin BTC</h1>
        <div>
          <span className="text-white bg-gray-500 rounded-lg px-3 py-2">Rank #1</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-start gap-12">
        <div>
          <p className="text-3xl font-bold">${formatNumber(usd)}</p>
          <p className="text-xl text-gray-500">₹ {formatNumber(inr)}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <p
            className={`text-base font-semibold text-center rounded-md px-2 py-1 ${getChangeColor(
              usd_24h_change
            )}`}>
            {getChangeSymbol(usd_24h_change)} {usd_24h_change.toFixed(2)}%
          </p>
          <p className="text-gray-500">(24H)</p>
        </div>
      </div>

      {/* Divider line between price and graph */}
      <div className="bg-gray-300 h-[1px] w-[100%]"></div>

      {/* TradingView Chart */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">Bitcoin Price Chart (USD)</h2>
        <div
          className="tradingview-widget-container"
          style={{ height: "400px" }}
        >
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=BTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&hideideas=1&theme=Light"
            style={{
              width: "100%",
              height: "400px",
              border: "none",
            }}
            title="TradingView BTC Chart"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Coinprice;

