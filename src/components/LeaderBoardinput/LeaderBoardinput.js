import React, { useRef, useState } from 'react';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

const LeaderBoardinput = () => {
const studentIDref=useRef();
const pointref=useRef();

const [point, setPoint] = useState(0); // Initialize state with 0

  const handleInputChange = (e) => {
    setPoint(parseInt(e.target.value)); // Parse input value as integer and update state
  };


    const handlePoints=()=>{


        const studentID=studentIDref.current.value;
        

        if(studentID){

            fetch('http://localhost:5000/addPoints',{
                method:'POST',
                headers: {
                    
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify({studentID,point})
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    
            }
            });

            alert('Successfully Added.');

        }
        else{
            alert('Type Student ID correctly');
        }

        studentIDref.current.value='';
       setPoint(0);
       pointref.current.value=0;


       window.location.reload();


    }

    return (
        <div>
            <input ref={studentIDref} placeholder='Student ID' className='border-4 mr-4' type="text" name="" id="" />
            <input ref={pointref} onChange={handleInputChange} placeholder='points' className='border-4 mr-4' type="number" name="" id="" />
            <button onClick={handlePoints} className='btn'>ADD POINTS</button>
            <LeaderBoard></LeaderBoard>
        </div>
    );
};

export default LeaderBoardinput;