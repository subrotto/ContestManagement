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
        <div className='mt-4 border-4 p-4'>
            {
                 <div>

                 Student ID : {student.name} <br />
                 Rank : {student.rank}
                 
                 </div> 
            }
        </div>
    );
};

export default SpecificStudent;