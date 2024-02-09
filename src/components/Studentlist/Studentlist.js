import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificStudent from '../SpecificStudent/SpecificStudent';

const Studentlist = () => {
    const {contestId}=useParams();
    const studentref=useRef();
    const rankref=useRef();
    const [contestdetails,setContestdetails]=useState([]);


const handleDetails=()=>{
const studentName=studentref.current.value;
const rank=rankref.current.value;

fetch(`http://localhost:5000/addContest/${contestId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({studentName,rank})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});

        studentref.current.value='';
        rankref.current.value='';


}

useEffect(()=>{
    fetch(`http://localhost:5000/getContest/${contestId}`)
    .then(res=>res.json())
    .then(data=>{
        setContestdetails(data.contestdetails);
     
    });
},[]);

    return (
        <div>
            <input className='border mr-2' placeholder='Type Student ID' type="text" name="" id="" ref={studentref} />
            <input className='border mr-2' placeholder='Type Rank' type="text" name="" id="" ref={rankref}/>
            <button className='btn ' onClick={handleDetails}>ADD Details</button>


<div className='flex flex-wrap'>
{

contestdetails.map(details=><div className="grid grid-rows-4"><SpecificStudent details={details}></SpecificStudent></div> )

}
</div>
</div>

      
    );
};

export default Studentlist;
