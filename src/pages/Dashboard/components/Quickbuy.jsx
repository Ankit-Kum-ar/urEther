import React, { useState } from "react";

const Quickbuy = () => {
  const [btcValue, setBtcValue] = useState(0.1824);
  const [ethValue, setEthValue] = useState(0.1824);

  const handleBtcChange = (e) => {
    const value = e.target.value;
    setBtcValue(value);
    setEthValue(value); // Sync with ETH for simplicity
  };

  const handleEthChange = (e) => {
    const value = e.target.value;
    setEthValue(value);
    setBtcValue(value); // Sync with BTC for simplicity
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-center items-center mb-6">
        </div>
        <div className="text-center mb-6">
          <p className="text-[#A9A9A9] text-sm">Ethereum Price</p>
          <h1 className="text-lg font-semibold">$3,110.31</h1>
        </div>
        <div className="space-y-2">
          {/* BTC Input */}
          <div className="flex gap-2 items-center border border-gray-300 rounded-lg p-2">
            <input
              type="number"
              value={btcValue}
              onChange={handleBtcChange}
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
            <img src="/assets/eth-icon.png"/>
            <span className="text-gray-500 font-semibold">ETH</span>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center">
            <button className="text-[#2752E7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l-4-4m0 0l4-4m-4 4h16M16 8l4 4m0 0l-4 4m4-4H4"
                />
              </svg>
            </button>
          </div>

          {/* ETH Input */}
          <div className="flex gap-2 items-center border border-gray-300 rounded-lg p-2">
            <input
              type="number"
              value={ethValue}
              onChange={handleEthChange}
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
            <img src="/assets/eth-icon.png"/>
            <span className="text-gray-500 font-semibold">ETH</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-[#2752E7] text-white py-2 rounded font-semibold">
          Buy ETH
        </button>
      </div>
    </div>
  );
};

export default Quickbuy;
