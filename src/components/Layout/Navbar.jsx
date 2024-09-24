import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 md:p-0 ";
  const inActivClass = "block py-2 px-3 text-[#2c3131] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ";

  return (
    <nav className="md:px-12 mt-1 border-black rounded-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center rtl:space-x-reverse">
              <img src="/assets/Logo.png" className="h-8 md:mr-3 mr-2" alt="Portfolio Logo" />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-[#2752e7]">ur</span>
              <span className='text-2xl font-bold text-black'>Ether</span>
          </Link>

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

          <div id='nav-links' className={` items-end justify-end flex md:w-auto md:order-2`}>
              <ul className="flex md:p-0 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse flex-row md:gap-0 gap-2 ">
                  <li>
                      <button className='md:px-6 mt-[1px] md:py-3 p-2 md:text-base text-sm font-semibold text-[#2C3131]'>
                        Sign in
                      </button>
                  </li>
                  <li>
                      <button className='border-2 rounded-xl border-solid md:text-base text-sm  border-[#2752E7] md:px-6 md:py-3 p-2 justify-center items-center text-[#2752E7] font-semibold'>
                        Get Started
                      </button>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
