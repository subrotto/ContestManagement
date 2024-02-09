import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificStudent from '../SpecificStudent/SpecificStudent';

const ShowStudentlist = () => {
    const [contestdetails,setContestdetails]=useState([]);
    const {contestId}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/getContest/${contestId}`)
        .then(res=>res.json())
        .then(data=>{
            setContestdetails(data.contestdetails);
         
        });
    },[]);

    return (
        <div>
            <div className='flex flex-wrap'>
            {

    contestdetails.map(details=><div className='grid grid-rows-4'><SpecificStudent details={details}></SpecificStudent></div> )


}
        </div>
        </div>
    );
};

export default ShowStudentlist;