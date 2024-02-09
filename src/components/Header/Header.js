import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <Link className='p-4 border-2 mb-2 btn btn-ghost' to='/'>Home</Link>
              <Link className='p-4 border-2 mb-2 btn btn-ghost' to='/showcontests'>Contests</Link>
              <Link className='p-4 border-2 mb-2 btn btn-ghost' to='showteams'>Team Formation</Link>
              <Link className='p-4 border-2 mb-2 btn btn-ghost' to='/login'>Login As Admin</Link>
              
            </ul>
          </div>
        </div>
        <div className="navbar-center text-center">
          <a className="btn btn-ghost text-xl text-center">HSTU Contest Management System</a>
        </div>
        <div className="navbar-end">
    
  </div>
      </div>
    );
};

export default Header;