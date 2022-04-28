import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { handleGoogleSignIn, loginUser } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const googleSingIn = () => {
        handleGoogleSignIn(from, navigate)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    return (
        <div className='mb-8 pt-24'>
            <h1 className='text-xl text-center'>Account</h1>
            <div className='flex bg-gray-bg1'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border-primaryBorder shadow-default py-5 px-16'>
                    <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        ALREADY REGISTERED? <Link title='Close' to="/account"><i class="far fa-times-circle"></i></Link>
                    </h1>

                    <form onSubmit={handleLoginSubmit}>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='email'
                                placeholder='Your Email'
                                onBlur={handleOnChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='password'
                                placeholder='Your Password'
                                onBlur={handleOnChange}
                            />
                        </div>

                        <div className='flex justify-center items-center mt-6'>
                            <button
                                className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:border-gray-400`}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <button type='submit' onClick={googleSingIn} className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:border-gray-400`}>
                <i className="fab fa-google"></i>
            </button>
        </div>
    );
};

export default Login;