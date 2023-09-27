/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";


const Header = () => {
  const links = <>
    <li className=" "><NavLink to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
    }
    >Home</NavLink> </li>
    <li><NavLink to="/donate" className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
    }>Donation</NavLink> </li>
    <li><NavLink to='/state' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
    }>Statistics</NavLink> </li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 w-[80%] mx-auto">

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <img src="/image/Logo.png" alt="" srcset="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;