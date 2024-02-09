import React from 'react';
import pic1 from './../images/programmersArena.jpg';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
       <div>

        <Link className='btn mr-4' to='/contest'><button>STUDENT</button></Link>
        <Link className='btn' to='/login'><button>ADMIN</button></Link>

        <div className='mt-8'>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${pic1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">HSTU Programming Contest Management</h1>
      <p className="mb-5">We deal with data of different contests.The students that participate in a particular contest from our university will be stored here and using those data we can assign teams for our university that will help in the future run.</p>
      <Link to='/showcontests'> <button className="btn btn-primary">Show Contests</button></Link>
     
    </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default HomePage;