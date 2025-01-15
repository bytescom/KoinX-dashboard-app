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


    <div >
      {/* This header section of coin-price section is only visible on mobile */}
      <div className="flex items-center pb-5 space-x-5 block md:hidden">
        <div className="flex items-center gap-1">
          <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" alt="Bitcoin Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">Bitcoin BTC</h1>
        </div>
        <div className="text-white bg-gray-500 w-fit h-fit rounded-lg px-2 py-1">Rank #1</div>
      </div>


      <div className="h-full w-full p-6 bg-white rounded-lg shadow-md">
        {/* This header section of coin-price section is nornamlly for all large devices */}
        <div className="hidden md:flex items-center space-x-4 pb-6">
          <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" alt="Bitcoin Logo" className="w-10 h-10" />
          <h1 className="text-xl md:text-2xl font-bold">Bitcoin BTC</h1>
          <div>
            <span className="text-white bg-gray-500 rounded-lg px-3 py-2">Rank #1</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-start gap-[4vw]">
          <div >
            <p className="text-2xl md:text-3xl font-bold">${formatNumber(usd)}</p>
            <p className="text-sm md:text-base text-gray-500">₹ {formatNumber(inr)}</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <p
              className={`text-sm lg:text-base font-semibold text-center rounded-md px-2 py-1 ${getChangeColor(
                usd_24h_change
              )}`}>
              {getChangeSymbol(usd_24h_change)} {usd_24h_change.toFixed(2)}%
            </p>
            <p className="text-gray-500">(24H)</p>
          </div>
        </div>

        {/* Divider line between price and graph */}
        <div className="bg-gray-300 my-4 md:my-6 h-[1px] w-full"></div>

        {/* TradingView Chart */}
        <div className="">
          <h2 className="font-semibold mb-4">Bitcoin Price Chart (USD)</h2>
          <div className="tradingview-widget-container h-[280px] sm:h-[400px] lg:h-[450px] w-full" >
            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=BTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&hideideas=1&theme=Light"
              className="h-full w-full"
              title="TradingView BTC Chart"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinprice;

