import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import Web3 from 'web3';
const Navbar = () => {
  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 md:p-0 ";
  const inActivClass = "block py-2 px-3 text-[#2c3131] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ";

  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  // const [walletAddress, setWalletAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  // const connectWallet = async () => {
  //   if (isConnecting) return; // Prevent multiple requests
  //   setIsConnecting(true); // Set the connecting state
  
  //   if (window.ethereum) {
  //     try {
  //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       setWalletAddress(accounts[0]);
  //       console.log(accounts[0]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     console.log('MetaMask not found');
  //   }
  
  //   setIsConnecting(false); // Reset the connecting state
  // };

  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  // Infura URL for Sepolia test network (replace with your Infura Project ID)
  const infuraUrl = 'https://sepolia.infura.io/v3/4d506bf951754d3e9a57a66dc28cbd4a'; // Replace with your Infura project ID

  useEffect(() => {
    // Initialize Web3 with Infura (for Sepolia network)
    const web3Instance = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    setWeb3(web3Instance);
  }, []);

  // Connect to MetaMask
  const connectMetaMask = async () => {
    if (isConnecting) return; // Prevent multiple requests
    setIsConnecting(true); // Set the connecting state
  
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
  
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          const address = accounts[0];
          setUserAddress(address);
          getBalance(address);
        } else {
          alert('No accounts found. Please check MetaMask.');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('MetaMask connection failed. Please try again.');
      }
    } else {
      alert('MetaMask is not installed or available!');
    }
  
    setIsConnecting(false); // Reset the connecting state
  };

  // Get user balance
  const getBalance = async (address) => {
    if (web3.utils.isAddress(address)) {
      try {
        const balance = await web3.eth.getBalance(address);
        console.log(balance)
        setUserBalance(web3.utils.fromWei(balance, 'ether'));
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    } else {
      console.error('Invalid address provided');
    }
  };

  // Handle sending ether
  const sendEther = async () => {
    if (!recipient || !amount) {
      alert('Please fill out the recipient and amount fields.');
      return;
    }

    if (!web3.utils.isAddress(recipient)) {
      alert('Invalid recipient address');
      return;
    }

    try {
      const amountInWei = web3.utils.toWei(amount, 'ether');
      const transactionParameters = {
        from: userAddress,
        to: recipient,
        value: amountInWei,
        gas: 21000,  // Standard gas for sending Ether
        gasPrice: await web3.eth.getGasPrice(),
      };

      // Request MetaMask to sign and send the transaction
      const txHash = await web3.eth.sendTransaction(transactionParameters);
      console.log('Transaction Hash:', txHash);
      alert(`Transaction successful with hash: ${txHash.transactionHash}`);
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Check console for error.');
    }
  };
  

  return (
    <nav className="md:px-12 mt-1 border-black rounded-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center rtl:space-x-reverse">
              <img src="/assets/Logo.png" className="h-8 md:mr-3 mr-2" alt="Portfolio Logo" />
              <span className="self-center text-4xl font-bold whitespace-nowrap text-[#2752e7]">ur</span>
              <span className='text-4xl font-bold text-black'>Ether</span>
          </Link>

          {
            isDashboard ? (
              <div className='flex-col justify-start items-start'>
                <h1 className='text-lg text-[#000000] font-extrabold leading-6 font-inter mt-3'>Welcome Zarror!</h1>
                <p className='font-inter text-xs font-semibold text-[#626262]' >Hope you are healthy and happy today...</p>
              </div>
            ) : (
              <div id='nav-links' className={` hidden items-center justify-center w-full md:flex md:w-auto md:order-2`}>
                <ul className="flex flex-col z md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                        <NavLink to="/contracts" className={({isActive}) => isActive ? activeClass : inActivClass}>Contracts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/learn" className={({isActive}) => isActive ? activeClass : inActivClass}>Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support" className={({isActive}) => isActive ? activeClass : inActivClass}>Support</NavLink>
                    </li>
                </ul>
              </div>
            )
          }

          {
            isDashboard ? (
              <div className='flex gap-6'>
                <div class="relative mt-3">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-[#CACACA] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
                <img src='/assets/bell.png' className='size-6 mt-4'/>
                {/* <div className='flex gap-2'>
                  <img src='/assets/profile.png' className='size-10 mt-2'/>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mt-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div> */}

                <button
                  className={`border-2 rounded-xl border-solid md:text-base text-sm border-[#2752E7] md:px-6 md:py-3 p-2 justify-center items-center font-semibold ${
                    isConnecting ? 'cursor-not-allowed opacity-50' : 'text-[#2752E7] hover:bg-[#2752E7] hover:text-white'
                  }`}
                  onClick={connectMetaMask}
                  disabled={isConnecting} // Disable button while connecting
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>

              </div>
            ) : (
              <div id='nav-links' className={` items-end justify-end flex md:w-auto md:order-2`}>
                <ul className="flex md:p-0 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse flex-row md:gap-0 gap-2 ">
                    <li>
                        <button className='md:px-6 mt-[1px] md:py-3 p-2 md:text-base text-sm font-semibold text-[#2C3131]'>
                          Sign in
                        </button>
                    </li>
                    <li>
                        <button className='border-2 rounded-xl border-solid md:text-base text-sm  border-[#2752E7] md:px-6 md:py-3 p-2 justify-center items-center text-[#2752E7] font-semibold hover:bg-[#2752E7] hover:text-white' onClick={connectMetaMask}>
                          Get Started
                        </button>
                    </li>
                </ul>
              </div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar


/*
  import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  // Infura URL for Sepolia test network (replace with your Infura Project ID)
  const infuraUrl = 'https://sepolia.infura.io/v3/4d506bf951754d3e9a57a66dc28cbd4a'; // Replace with your Infura project ID

  useEffect(() => {
    // Initialize Web3 with Infura (for Sepolia network)
    const web3Instance = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    setWeb3(web3Instance);
  }, []);

  // Connect to MetaMask
  const connectMetaMask = async () => {
    // Check if MetaMask is available in the window object
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum); // Use MetaMask's provider
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          const address = accounts[0];
          setUserAddress(address);
          getBalance(address);
        } else {
          alert('No accounts found. Please check MetaMask.');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('MetaMask connection failed. Please try again.');
      }
    } else {
      alert('MetaMask is not installed or available!');
    }
  };

  // Get user balance
  const getBalance = async (address) => {
    if (web3.utils.isAddress(address)) {
      try {
        const balance = await web3.eth.getBalance(address);
        console.log(balance)
        setUserBalance(web3.utils.fromWei(balance, 'ether'));
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    } else {
      console.error('Invalid address provided');
    }
  };

  // Handle sending ether
  const sendEther = async () => {
    if (!recipient || !amount) {
      alert('Please fill out the recipient and amount fields.');
      return;
    }

    if (!web3.utils.isAddress(recipient)) {
      alert('Invalid recipient address');
      return;
    }

    try {
      const amountInWei = web3.utils.toWei(amount, 'ether');
      const transactionParameters = {
        from: userAddress,
        to: recipient,
        value: amountInWei,
        gas: 21000,  // Standard gas for sending Ether
        gasPrice: await web3.eth.getGasPrice(),
      };

      // Request MetaMask to sign and send the transaction
      const txHash = await web3.eth.sendTransaction(transactionParameters);
      console.log('Transaction Hash:', txHash);
      alert(Transaction successful with hash: ${txHash.transactionHash});
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Check console for error.');
    }
  };

  return (
    <div>
      <h1>MetaMask Ethereum Interaction on Sepolia Testnet</h1>

      {!userAddress ? (
        <button onClick={connectMetaMask}>Connect MetaMask</button>
      ) : (
        <div>
          <p>Connected Address: {userAddress}</p>
          <button onClick={() => getBalance(userAddress)}>Get Balance</button>
          {userBalance && <p>Balance: {userBalance} ETH</p>}
        </div>
      )}

      {userAddress && (
        <div>
          <h3>Send Ether</h3>
          <label>
            Recipient Address:
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x..."
            />
          </label>
          <br />
          <label>
            Amount (ETH):
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              min="0.01"
            />
          </label>
          <br />
          <button onClick={sendEther}>Send Transaction</button>
        </div>
      )}
    </div>
  );
};

export default App;
 */