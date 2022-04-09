import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header '>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <span className='mx-1'>{user?.displayName && user.displayName}</span>
                {

                    user?.uid
                        ?
                        <button onClick={handleSignOut} className=' rounded bg-salmon'>Sign out</button>
                        :
                        <Link to="/login">Log In</Link>

                }
            </nav>

        </div>
    );
};

export default Header;