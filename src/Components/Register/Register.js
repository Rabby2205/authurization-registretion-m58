import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <h3 className='mt-2 text-light'>Registration now !!!</h3>
            <form action="" className='p-2 mt-1'>
                <input className='rounded m-1 px-2 border-0' type="text" name="" placeholder='Name' id="" required />
                <br />
                <input className='rounded m-1 px-2 border-0' type="email" name="" id="" placeholder="Email" required />
                <br />
                <input className='rounded m-1 px-2 border-0' type="password" name="" placeholder="password" id="" required />
                <br />
                <input className='border-0 rounded m-1 px-2' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;