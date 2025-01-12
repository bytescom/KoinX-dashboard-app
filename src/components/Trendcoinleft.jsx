import React, { useEffect, useState } from "react";

const Trendcoinleft = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((error) => console.error("Error fetching coin data:", error));
  }, []);

  if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full h-[200px]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Trending Coins (24h)
      </h2>
      <ul className="space-y-4">
        {coins.slice(0, 3).map((coin) => (
          <li
            key={coin.id}
            className="flex items-center justify-between text-gray-800"
          >
            <div className="flex items-center space-x-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg font-medium">
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
            </div>
            <span className={`text-base font-semibold text-center rounded-md h-7 w-20 ${coin.priceChange > 0 ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}`}>
              {coin.price_change_percentage_24h > 0 ? "▼" : "▲"}{" "}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trendcoinleft;