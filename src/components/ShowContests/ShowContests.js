import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowContests = () => {
    const [contests,setContests]=useState([])
   
   
   
    useEffect(()=>{

        fetch('http://localhost:5000/getContest')
            .then(res=>res.json())
            .then(data=>setContests(data.contest));
    
    },[])
   
    return (
        <div>
            <div className='card-container flex flex-wrap justify-between'>
                {
                    contests.map(contest=><div className='card w-96 bg-base-100 shadow-xl mb-4 '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{contest.name}</h2>
                      
                      <div className="card-actions justify-end">
                      <Link className='btn mb-2' to={`/showstudentlist/${contest._id}`}><button>Enter</button></Link>
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

export default ShowContests;

// {
//     contests.map(contest=><div className='border-4 p-4 mb-4'>
//             {contest.name}
//             <br />
//             <Link className='btn mt-2' to={`/showstudentlist/${contest._id}`}><button>Enter</button></Link>
//     </div>
//     )
// }