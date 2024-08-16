import Google from '../assets/devicon_google.svg';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

import BouncingDotsLoader from '../components/BouncingDotsLoader';
import { useGoogleLogin } from '@react-oauth/google';

import { useGoogleAuth, useLogin } from '../services/authHooks.jsx';

function Login() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    useEffect(function () {
        document.title = 'Login | Event Hub';
    }, []);

    const { isPending, mutate } = useLogin();

    const { isPending: isGooglePending, mutate: googleMutate } = useGoogleAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleLogin(data) {
        mutate(data);
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (data) => {
            googleMutate({ accessToken: data.access_token });
        },
        onError: (err) => console.log(err),
    });

    return (
        <main className='w-full min-h-screen flex flex-col justify-start items-center px-4 text-text-light gap-4 relative'>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full'
                width='100%'
            />
            <div className='absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>

            <div className='z-30 self-start mt-4'>
                <Logo />
            </div>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white bg-opacity-75 backdrop-blur-lg z-10 mb-8'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold leading-tight tracking-tight font-headings'>
                        Login
                    </h2>
                    <p className=' text-secondary-light leading-normal'>
                        Welcome back, login to catch up with missed things
                    </p>
                </div>

                <div className='flex flex-col gap-2 self-stretch'>
                    <div
                        onClick={handleGoogleLogin}
                        className='flex items-center justify-center p-3 text-base rounded-xl border gap-2 hover:bg-slate-100 cursor-pointer'
                    >
                        <img src={Google} alt='Google Icon' />
                        <p className='text-secondary-light'>
                            {isGooglePending ? 'Loading...' : 'Continue with Google'}
                        </p>
                    </div>

                    <p className='before:content-[""] before:h-[1px] before:w-full after:content-[""] after:h-[1px] after:w-full flex items-center gap-1 text-slate-400 before:bg-slate-400 after:bg-slate-400  text-xs'>
                        OR
                    </p>
                </div>

                <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(handleLogin)}>
                    <div className='flex flex-col gap-1'>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='p-3 border rounded-xl w-full text-inherit focus:outline-none focus:border-primary-500 focus:shadow-sm'
                            {...register('email', {
                                required: 'Email is required',
                                validate: (val) => isEmail(val) || 'Please enter a valid email',
                            })}
                        />
                        {errors?.email && (
                            <p className='text-secondary-light px-2 text-sm font-semibold'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <input
                                type={isPasswordShown ? 'text' : 'password'}
                                placeholder='Password'
                                className='p-3 border rounded-xl w-full focus:outline-none focus:border-primary-500 focus:shadow-sm text-inherit'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password cannot be shorter than 8 characters',
                                    },
                                })}
                            />
                            <Icon
                                icon={isPasswordShown ? 'uil:eye-slash' : 'uil:eye'}
                                className='-ml-10 text-2xl text-text-light hover:text-primary-500 transition-all cursor-pointer'
                                onClick={() => setIsPasswordShown((prev) => !prev)}
                            />
                        </div>

                        {errors?.password && (
                            <p className='text-secondary-light px-2 text-sm font-semibold'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        className={`p-3  text-white font-bold rounded-xl self-stretch w-full   hover:shadow-xl transition-all flex items-center gap-2 justify-center ${
                            isPending
                                ? 'bg-secondary-light hover:shadow-secondary-light/20'
                                : 'bg-primary-500  hover:shadow-primary-500/20'
                        }`}
                    >
                        {isPending && <BouncingDotsLoader />}
                        {isPending ? 'Loading' : 'Login'}
                    </button>
                </form>
                <div className='flex flex-col self-stretch gap-1 items-center'>
                    <Link to='/reset-password' className='text-link-light'>
                        Forgot password?
                    </Link>
                    <p>
                        Not a member?{' '}
                        <Link to='/register' className='text-link-light underline'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
export default Login;
