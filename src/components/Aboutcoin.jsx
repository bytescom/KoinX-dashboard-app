import React, { useEffect, useState } from "react";

const Aboutcoin = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true")
      .then((response) => response.json())
      .then((data) => {
        setBitcoinData(data.bitcoin);
      })
      .catch((error) => console.error("Error fetching Bitcoin data:", error));
  }, []);

  return (
    <div>
      <div className="h-full w-full p-4 sm:p-6 bg-white shadow-md rounded-lg">
        <div className="pb-6 border-b">
          <h1 className="text-2xl font-bold">About Bitcoin</h1>
          {bitcoinData ? (
            <p className="mt-4 text-gray-700">
              Bitcoin's price today is ${bitcoinData.usd.toLocaleString()} with a 24-hour change of
              {bitcoinData.usd_24h_change.toFixed(2)}%. Market cap is ${bitcoinData.usd_market_cap.toLocaleString()}.
            </p>
          ) : (
            <p className="mt-4 text-gray-700">Loading Bitcoin data...</p>
          )}
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatibus. Cupiditate, explicabo perspiciatis optio at aperiam asperiores aspernatur quam, officiis sit illum totam corporis architecto laboriosam cum ut a! Illo, exercitationem atque dolores nobis alias unde provident dolorum rem porro sequi minus nisi! Quam quo quia officia sequi ea numquam tenetur possimus harum amet cupiditate? Nemo, nulla!
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at, laudantium atque eum in harum laboriosam culpa rerum, beatae deleniti eligendi porro neque dolor quisquam recusandae delectus iusto corrupti molestiae nam voluptas consectetur minus?. icta officia dolorum ea? Dolorem, provident eum vel libero distinctio sapiente ipsam nihil dicta, delectus commodi voluptas.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis cumque corporis debitis ea nobis architecto blanditiis suscipit. Asperiores tempore totam quia et aliquid itaque illo dicta maxime iusto mollitia a odit ex nisi voluptate velit nostrum harum blanditiis consequatur nam repellat numquam provident, nesciunt qui nihil. Nulla, earum laborum, dignissimos reiciendis et, aliquid provident accusamus sunt excepturi ad eveniet doloribus iure natus alias dolore totam? Rerum et accusamus, nemo dicta voluptatum eaque provident neque.
          </p>
        </div>

        <div className="pt-6 md:py-6 md:border-b">
          <h2 className="text-xl font-semibold">Already Holding Bitcoin?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-blue-100 rounded-lg text-center shadow">
              <h3 className="text-lg font-medium">Calculate your Profits</h3>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Check Now →
              </button>
            </div>
            <div className="p-4 bg-green-100 rounded-lg text-center shadow">
              <h3 className="text-lg font-medium">Calculate your tax liability</h3>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
                Check Now →
              </button>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae cupiditate velit voluptatem dolores, nemo autem ducimus, modi ea nobis dignissimos sunt quo iusto ratione, sequi deleniti delectus porro maiores rerum molestias illum ad fuga quis. Beatae voluptatem voluptatum facilis quos laborum officiis nesciunt recusandae?</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcoin;
