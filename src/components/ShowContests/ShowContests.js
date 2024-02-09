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
              {
                    contests.map(contest=><div className='border-4 p-4 mb-4'>
                            {contest.name}
                            <br />
                            <Link className='btn mt-2' to={`/showstudentlist/${contest._id}`}><button>Enter</button></Link>
                    </div>
                    )
                }
        </div>
    );
};

export default ShowContests;