import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='mb-5 mt-5'>
            <h1 className='text-xl text-center mb-5'>Account</h1>
          <div className='flex flex-row flex-wrap justify-center gap-4'>
          <Link to="/login" className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded'>
                <p className='mt-8'><i className="far fa-user"></i></p> <p>Login</p>
            </Link>
            <Link to="/register" className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded '>
                <p  className='mt-8'><i className="far fa-registered"></i></p> <p>Registration</p>
            </Link>
            <Link to="/resetpassword" className='border border-gray-200 w-40 h-28 hover:border-gray-600 cursor-pointer rounded'>
              <p  className='mt-8'><i className="fas fa-undo"></i></p> <p>Restore Password</p>
            </Link>
          </div>
        </div>
    );
};

export default Account;