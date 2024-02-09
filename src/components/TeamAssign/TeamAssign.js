import React, { useEffect, useRef, useState } from 'react';

const TeamAssign = () => {
   
    const teamNameref=useRef();
    const member1ref=useRef();
    const member2ref=useRef();
    const member3ref=useRef();

const handleTeam=()=>{
    const teamName=teamNameref.current.value;
    const member1=member1ref.current.value;
    const member2=member2ref.current.value;
    const member3=member3ref.current.value;

    

        fetch(`http://localhost:5000/addteams`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({teamName,member1,member2,member3})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});
        
        teamNameref.current.value='';
        member1ref.current.value='';
        member2ref.current.value='';
        member3ref.current.value='';
        alert('Successfully added');
    

  

}




    return (
        <div>
          <label htmlFor="">Team Name :</label>  <input className='border-4 mt-2 ml-4 p-4' ref={teamNameref} placeholder='Enter Your Team Name' type="text" name="" id="" /> <br />
          <label htmlFor="">Member One :</label>  <input className='border-4 mt-2 ml-4 p-4' ref={member1ref} placeholder='Enter Member One' type="text" name="" id="" /> <br />
          <label htmlFor="">Member Two :</label>   <input className='border-4 mt-2 ml-4 p-4' ref={member2ref} placeholder='Enter Member Two' type="text" name="" id="" /> <br />
          <label htmlFor="">Member Three :</label>   <input className='border-4 mt-2 ml-4 p-4' ref={member3ref} placeholder='Enter Member Three' type="text" name="" id="" /> <br />
            <button className='btn mt-4' onClick={handleTeam}>ADD TEAM</button>



        </div>
    );
};

export default TeamAssign;