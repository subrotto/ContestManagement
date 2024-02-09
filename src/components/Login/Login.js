import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate=useNavigate();
const usernameref=useRef();
const passwordref=useRef();
    const handleLogin=()=>{
            const userName=usernameref.current.value;
            const password=passwordref.current.value;

            if(userName=='admin' && password=='1234'){

                    navigate('/contest')

            }
            else{
                alert('Please Try Again')
            }
            usernameref.current.value='';
            passwordref.current.value='';
    }
    return (
        <div>
            <label htmlFor="">UserName :</label><input className='border-4 mb-4' ref={usernameref} type="text" name="" id="" placeholder='Enter UserName' /> <br />
           <label htmlFor="">Password :</label> <input className='border-4 mb-4' placeholder='Enter Password' ref={passwordref} type="text" name="" id="" /> <br />
            <button className='btn' onClick={handleLogin}>Login As Admin</button>
        </div>
    );
};

export default Login;