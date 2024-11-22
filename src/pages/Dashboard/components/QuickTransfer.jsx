import React, { useState } from "react";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <h2 className="text-lg font-inter font-semibold mb-4">Quick Transfer</h2>
        
        {/* Avatars */}
        <div className="flex items-center space-x-3 mb-6">
          <img
            src="/assets/icons/i-1.png"
            alt="Avatar 1"
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="/assets/icons/i-2.png"
            alt="Avatar 2"
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="/assets/icons/i-1.png"
            alt="Avatar 3"
            className="w-10 h-10 rounded-full object-cover"
          />
          {/* <img
            src="https://via.placeholder.com/40"
            alt="Avatar 4"
            className="w-10 h-10 rounded-full object-cover"
          /> */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white bg-black">
            +
          </button>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label htmlFor="amount" className="block text-gray-500 text-sm mb-1">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="$1,500"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Transfer Button */}
        <button
          className="w-full bg-[#2752E7] text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition"
        >
          <span>Transfer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
