import React from "react";

const CoinCard = ({ coin }) => {
  // Determine class for percentage change (red for negative, green for positive)
  const priceChangeClass =
    coin.price_change_percentage_24h > 0
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";

  return (
    <div className="w-64 p-4 bg-white border-[1.5px] shadow-md rounded-lg">
      {/* Header: Coin Logo and Symbol */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img
            src={coin.image}
            alt={coin.symbol}
            className="w-8 h-8"
          />
          <span className="font-medium text-gray-800">
            {coin.symbol.toUpperCase()}
          </span>
        </div>
        {/* Price Change */}
        <span className={`px-2 py-1 rounded-md text-sm ${priceChangeClass}`}>
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>

      {/* Current Price */}
      <h3 className="text-lg font-semibold text-gray-900">
        ${coin.current_price}
      </h3>

      {/* Price Graph */}
      <div className="mt-2">
        <img
          src={coin.sparkline_in_7d}
          alt="price trend"
          className="w-full h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default CoinCard;
