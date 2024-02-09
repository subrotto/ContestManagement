import React, { useEffect, useState } from 'react';

const ShowTeams = () => {
    const [teams,setTeams]=useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/getTeams')
        .then(res=>res.json())
        .then(data=>setTeams(data.contest))
        
        },[])
    return (
        <div>
            {
                teams.map(team=><div className='border-4 p-2 mb-4'>
                    Team Name : {team.name} <br />
                    Member 1 : {team.member1} <br />
                    Member 2 : {team.member2} <br />
                    Member 3 : {team.member3} <br />
                </div>
                )
            }
        </div>
    );
};

export default ShowTeams;