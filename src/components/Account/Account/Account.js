import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <h1 className='text-xl text-center'>Account</h1>
            <div>
                <Link to="/login"><i className="far fa-user"></i> <span>Login</span></Link>
            </div>
            <div>
                <Link to="/registration">Registration</Link>
            </div>
        </div>
    );
};

export default Account;