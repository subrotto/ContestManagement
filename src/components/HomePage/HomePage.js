import React from 'react';
import pic1 from './../images/programmersArena.jpg';
import { Link } from 'react-router-dom';
import sumon from './../images/sumon.jpg';
import sourov from './../images/sourov.jpg';
import anik from './../images/anik.jpg';
const HomePage = () => {
    return (
       <div>

        <Link className='btn mr-4' to='/showcontests'><button>STUDENT</button></Link>
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

        <div className='flex flex-wrap mt-4 justify-evenly'>
       <div>
       <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={sumon} />
  </div>
</div>
<div className='font-bold text-center text-cyan-500'>
<br /> Md Suman Sarker 
     
</div>
       </div>

       <div>

       <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={sourov}/>
  </div>
</div>
<div className='font-bold text-cyan-500'>
<br />  Sourav Roy 
   
</div>
       </div>

       <div>
       <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={anik} />
  </div>
</div>
<div className='font-bold text-cyan-500'>
<br />  Anik Raihan 
   
</div>
       </div>
        </div>

       </div>
    );
};

export default HomePage;