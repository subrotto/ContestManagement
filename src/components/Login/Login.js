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
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Admin can add teams,contests and edit student list according to his preference.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={usernameref} type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input ref={passwordref} type="text" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;


{/* <label htmlFor="">UserName :</label><input className='border-4 mb-4' ref={usernameref} type="text" name="" id="" placeholder='Enter UserName' /> <br />
<label htmlFor="">Password :</label> <input className='border-4 mb-4' placeholder='Enter Password' ref={passwordref} type="text" name="" id="" /> <br />
 <button className='btn' onClick={handleLogin}>Login As Admin</button> */}