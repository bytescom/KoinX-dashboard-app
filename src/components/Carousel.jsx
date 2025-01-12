import React from "react";
import CoinCard from "./coincard";

const Carousel = ({ title, coins }) => {
  return (
    <div className="my-6">
      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* Horizontal Scrollable Container */}
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {coins.map((coin, index) => (
          <CoinCard key={index} coin={coin} />
        ))}
      </div>

    </div>
  );
};

export default Carousel;
