import React, { useEffect, useState } from 'react';

const ShowTeams = () => {
    const [teams,setTeams]=useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/getTeams')
        .then(res=>res.json())
        .then(data=>setTeams(data.contest))
        
        },[])
    return (
        <div className='flex flex-wrap'>
            {
                teams.map(team=><div className='grid grid-rows-3 ml-24'>
                    <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Team Name : {team.name}</h2>
                  <p>Member 1 : {team.member1}</p>
                  <p>Member 2 : {team.member2}</p>
                  <p>Member 3 : {team.member3}</p>
                  <div className="card-actions justify-end">
                   
                  </div>
                </div>
              </div>
                </div>
                )
            }
        </div>
    );
};

export default ShowTeams;

{/* <div className='border-4 p-2 mb-4'>
                    Team Name : {team.name} <br />
                    Member 1 : {team.member1} <br />
                    Member 2 : {team.member2} <br />
                    Member 3 : {team.member3} <br />
                </div> */}