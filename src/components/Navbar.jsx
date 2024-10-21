import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo';
import { auth } from './firebase';

const Navbar = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="fixed z-50 bg-white top-0 w-full h-16 px-4 border-b shadow-lg flex items-center" >
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between" >
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full" >
          {user ?
            <button size="sm"
              className='hover:bg-black hover:text-white  border-gray-300 rounded-lg pt-2 pl-3 pr-3 pb-2 border-x-2 border-y-2'>
              <Link to="/profile">
                Profile
              </Link>
            </button>
            :
            <>
              <button size="sm"
                className='hover:bg-black hover:text-white  border-gray-300 rounded-lg pt-2 pl-3 pr-3 pb-2 border-x-2 border-y-2'>
                <Link to="/login">
                  Login
                </Link>
              </button>
              <button size="sm"
                className='hover:bg-black hover:text-white  border-gray-300 rounded-lg pt-2 pl-3 pr-3 pb-2 border-x-2 border-y-2'>
                <Link to="/details">
                  Get for free
                </Link>
              </button>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar