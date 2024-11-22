import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
const Navbar = () => {
  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 md:p-0 ";
  const inActivClass = "block py-2 px-3 text-[#2c3131] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ";

  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      console.log('Metamask not found');
    }
  }

  

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
                <div className='flex gap-2'>
                  <img src='/assets/profile.png' className='size-10 mt-2'/>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mt-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
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
                        <button className='border-2 rounded-xl border-solid md:text-base text-sm  border-[#2752E7] md:px-6 md:py-3 p-2 justify-center items-center text-[#2752E7] font-semibold hover:bg-[#2752E7] hover:text-white' onClick={connectWallet}>
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
