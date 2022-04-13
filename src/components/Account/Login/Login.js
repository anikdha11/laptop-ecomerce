import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='mb-8 mt-5'>
            <h1 className='text-xl text-center'>Account</h1>
            <div className='flex bg-gray-bg1'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border-primaryBorder shadow-default py-5 px-16'>
                    <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        ALREADY REGISTERED? <Link title='Close' to="/account"><i class="far fa-times-circle"></i></Link>
                    </h1>

                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='email'
                                placeholder='Your Email'
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='password'
                                placeholder='Your Password'
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
            <button className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:border-gray-400`}>
                <i className="fab fa-google"></i>
            </button>
        </div>
    );
};

export default Login;