import React, { useEffect, useState } from "react";
import axios from "axios";

const Performance = () => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    // Fetch Bitcoin market data
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin",
            },
          }
        );
        setCoinData(response.data[0]);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  if (!coinData) {
    return <p>Loading...</p>;
  }

  const {
    current_price,
    low_24h,
    high_24h,
    market_cap,
    total_volume,
    market_cap_rank,
    price_change_percentage_24h,
    ath,
    ath_date,
    atl,
    atl_date,
    market_cap_change_percentage_24h,
  } = coinData;

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  return (
    <div className="h-full w-full p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Performance Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Today's Low</span>
            <span className="text-lg font-medium text-red-500">{formatNumber(low_24h)}</span>
          </div>
          <div className="w-[75%] mx-4">
            <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 relative">
              <span
                className="absolute w-4 h-4 bg-black rounded-full top-[-4px]"
                style={{
                  left: `${((current_price - low_24h) / (high_24h - low_24h)) * 100}%`,
                }}
              ></span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Today's High</span>
            <span className="text-lg font-medium text-green-500">{formatNumber(high_24h)}</span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Fundamentals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div  className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Bitcoin Price</p>
            <p className="text-lg font-medium">${formatNumber(current_price)}</p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Market Cap</p>
            <p className="text-lg font-medium">${formatNumber(market_cap)}</p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">24h Low / 24h High</p>
            <p className="text-lg font-medium">
              ${formatNumber(low_24h)} / ${formatNumber(high_24h)}
            </p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Market Cap Dominance</p>
            <p className="text-lg font-medium">{market_cap_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">7d Low / 7d High</p>
            <p className="text-lg font-medium">
              ${formatNumber(low_24h)} / ${formatNumber(high_24h)}
            </p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Volume / Market Cap</p>
            <p className="text-lg font-medium">
              {((total_volume / market_cap) * 100).toFixed(2)}%
            </p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Trading Volume</p>
            <p className="text-lg font-medium">${formatNumber(total_volume)}</p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">Market Cap Rank</p>
            <p className="text-lg font-medium">#{market_cap_rank}</p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">All-Time High</p>
            <p className="text-lg font-medium">
              ${formatNumber(ath)}{" "}
              <span
                className={
                  price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                ({price_change_percentage_24h.toFixed(2)}%)
              </span>
            </p>
          </div>
          <div className="border-b-[1px] border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">All-Time Low</p>
            <p className="text-lg font-medium">
              ${formatNumber(atl)}{" "}
              <span
                className={
                  price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                ({price_change_percentage_24h.toFixed(2)}%)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
