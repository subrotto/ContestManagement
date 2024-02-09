import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Contests = () => {
const contestref=useRef();
const [contests,setContests]=useState([]);
const navigate=useNavigate();
const handleContest=()=>{
const contestName=contestref.current.value;

if(contestName){
    fetch('http://localhost:5000/addContest',{
        method:'POST',
        headers: {
            
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({contestName})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            
    }
    });

    contestref.current.value='';
            alert('Course Successfully Added');
}
else{
    alert('Please Enter a Course Name');
}


}

useEffect(()=>{

    fetch('http://localhost:5000/getContest')
        .then(res=>res.json())
        .then(data=>setContests(data.contest));

},[])

const handleassignteam=()=>{
    navigate('/teamassign');
}

    return (
        <div>

        <button className='btn mb-12' onClick={handleassignteam}>Assign Teams</button>
        <br />

            <input className='border-4' ref={contestref} type="text" name="" id="" placeholder='Type Contest Name' />
            <button className='btn mb-4 ml-2' onClick={handleContest}>ADD Contest</button>

<br />
<div className='card-container flex flex-wrap justify-between'>
                {
                    contests.map(contest=><div className='card w-96 bg-base-100 shadow-xl mb-4 '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{contest.name}</h2>
                      
                      <div className="card-actions justify-end">
                      <Link className='btn mb-2' to={`/studentadd/${contest._id}`}><button>Enter</button></Link>
                      </div>
                      
                    </div>
                  </div>
                    </div>
                    )
                }
                </div>
        </div>
    );
};

export default Contests;
{/* <div className='border-4 mb-2'>
                            <div className='mt-4'>{contest.name}</div>
                            <br />
                            <Link className='btn mb-2' to={`/studentadd/${contest._id}`}><button>Enter</button></Link>
                    </div> */}