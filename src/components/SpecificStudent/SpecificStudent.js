import React, { useEffect, useState } from 'react';

const SpecificStudent = (props) => {
    const {details}=props;
    const [student,setStudent]=useState({});
   

    useEffect(()=>{

        fetch(`http://localhost:5000/getcontestdetails/${details}`)
        .then(res=>res.json())
        .then(data=>setStudent(data))

    },[])

    return (
        <div className="card w-96 bg-neutral text-neutral-content mb-4 mr-4">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Student ID: {student.name}</h2>
            <p>Rank: {student.rank}</p>
            <div className="card-actions justify-end">
                {/* Any actions/buttons can be placed here */}
            </div>
        </div>
    </div>
       
    );
};

export default SpecificStudent;
{/* <div className='mt-4 border-4 p-4'>
{
     <div>

     Student ID : {student.name} <br />
     Rank : {student.rank}
     
     </div> 
}
</div> */}