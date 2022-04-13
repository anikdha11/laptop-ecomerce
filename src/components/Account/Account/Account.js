import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='mb-5 mt-5'>
            <h1 className='text-xl text-center mb-5'>Account</h1>
          <div className='flex flex-row flex-wrap justify-center gap-4'>
          <div className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded'>
                <Link  to="/login"><p className='mt-8'><i className="far fa-user"></i></p> <p>Login</p></Link>
            </div>
            <div className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded '>
                <Link to="/register"> <p  className='mt-8'><i className="far fa-registered"></i></p> <p>Registration</p></Link>
            </div>
            <div className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded'>
                <Link to="/resetpassword"> <p  className='mt-8'><i className="fas fa-undo"></i></p> <p>Restore Password</p> </Link>
            </div>
          </div>
        </div>
    );
};

export default Account;