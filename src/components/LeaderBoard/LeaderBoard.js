import React, { useEffect, useState } from 'react';

const LeaderBoard = () => {

    const [leaderboardlist,setLeaderboardlist]=useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/getLeaderboard')
            .then(res=>res.json())
            .then(data=>setLeaderboardlist(data));
    
    },[])
    return (
        <div className='mt-8 flex flex-col justify-center items-center'>
            
            {leaderboardlist.map(list=><div className='mb-4 '>
                <div className="card w-96 bg-neutral text-neutral-content ">
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Student ID :{list.name}</h2>
    <p>Point : {list.point}</p>
    
  </div>
</div>
            </div>)}

        </div>
    );
};

export default LeaderBoard;