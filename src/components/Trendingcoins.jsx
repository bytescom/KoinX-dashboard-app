import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

const Trendingcoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true"
    )
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((error) => console.error("Error fetching coin data:", error));
  }, []);

  // Function to format numbers with commas
  const formatCurrency = (value) => {
    return `${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div>
      {coins.length > 0 ? (
        <Carousel
          title="Trending Coins"
          coins={coins.slice(0, 5).map((coin) => ({
            ...coin,
            current_price: formatCurrency(coin.current_price), // Format current price
          }))}
        />
      ) : (
        <p className="text-gray-700">Loading coins...</p>
      )}
    </div>
  );
};

export default Trendingcoins;

