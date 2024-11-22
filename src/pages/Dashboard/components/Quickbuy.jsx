import React, { useState } from "react";
import { useSelector } from "react-redux";

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

  const userAddress = useSelector((state) => state.wallet.userAddress);
  const userBalance = useSelector((state) => state.wallet.userBalance);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center items-center mb-6">
        </div>
        <div className="text-center mb-6">
          <p className="text-[#A9A9A9] text-sm">Ethereum Price</p>
          <h1 className="text-lg font-semibold">$3,110.31</h1>
        </div>
        <div className="space-y-2 ">
          {/* ETH Input */}
          <div>
            <p>Connected Address: {userAddress}</p>
            <button>Get Balance: </button>
            {userBalance && <p>Balance: {userBalance} ETH</p>}
          </div>
        </div>
        {/* <button className="mt-6 w-full bg-[#2752E7] text-white py-2 rounded font-semibold">
          Buy ETH
        </button> */}
      </div>
    </div>
  );
};

export default Quickbuy;
