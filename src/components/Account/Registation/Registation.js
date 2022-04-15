import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Registation = () => {

    const [loginData, setLoginData] = useState({});

    const {addUser} = useFirebase();

    const nevigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleFormSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        else{
            addUser(loginData.email, loginData.password, loginData.name, nevigate);

        }
        e.preventDefault();
    }

    return (
        <div className='mb-8 mt-5'>
        <h1 className='text-xl text-center mt-5'>Account</h1>
        <div className='flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border-primaryBorder shadow-default py-5 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                   CREATE AN ACCOUNT <Link title='Close' to="/account"><i class="far fa-times-circle"></i></Link>
                </h1>

                <form onSubmit={handleFormSubmit}>
                <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='name'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your Name'
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Confirm Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password2'
                            placeholder='Re-type Password'
                            onBlur={handleOnBlur}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                           type='submit' className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:border-gray-400`}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Registation;