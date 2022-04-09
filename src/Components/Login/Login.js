import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    /**----------------------------------------- */
    const { signInWithGoogle } = useFirebase();


    /**----------------------------------------- */



    return (
        <div className='login'>
            <h3 className='text-light'>Log in </h3>
            <hr />
            <button onClick={signInWithGoogle} className='border-0 m-2 rounded bg-primary text-light px-3'>Sign in google</button>
            <form action="">

                <input className=' border-0 rounded m-1 px-2' type="email" name="" id="" placeholder="Email" required />
                <br />
                <input className='border-0 rounded m-1 px-2' type="password" name="" placeholder="password" id="" required />
                <br />
                <input className='border-0 rounded m-1 px-4' type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;