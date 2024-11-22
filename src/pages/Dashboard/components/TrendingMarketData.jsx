import React from "react";

const TrendingMarket = () => {
  const marketData = [
    {
      token: "BNB",
      symbol: "BNB",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784,393M",
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", // BNB icon
    },
    {
      token: "Bitcoin",
      symbol: "BTC",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784,393M",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Bitcoin icon
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trending Market</h2>
        <a
          href="#"
          className="text-blue-500 text-sm hover:underline"
        >
          View more markets
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2 px-4">Token</th>
              <th className="py-2 px-4">Symbol</th>
              <th className="py-2 px-4">Last Price</th>
              <th className="py-2 px-4">24H Change</th>
              <th className="py-2 px-4">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((item, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 hover:bg-gray-50"
              >
                {/* Token */}
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={item.icon}
                    alt={item.token}
                    className="w-6 h-6 rounded-full mr-3"
                  />
                  {item.token}
                </td>

                {/* Symbol */}
                <td className="py-2 px-4">{item.symbol}</td>

                {/* Last Price */}
                <td className="py-2 px-4">{item.lastPrice}</td>

                {/* 24H Change */}
                <td className="py-2 px-4">
                  <span className="text-green-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-1"
                    >
                      <path d="M12 2L22 12h-7v8H9v-8H2z" />
                    </svg>
                    {item.change}
                  </span>
                </td>

                {/* Market Cap */}
                <td className="py-2 px-4">{item.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingMarket;
