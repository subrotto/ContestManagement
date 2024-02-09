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
            {

    contestdetails.map(details=><SpecificStudent details={details}></SpecificStudent> )


}
        </div>
    );
};

export default ShowStudentlist;