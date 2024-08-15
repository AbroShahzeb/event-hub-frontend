import Google from '../assets/devicon_google.svg';
import { useState } from 'react';
import { Icon } from '@iconify/react';

import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';

import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

function Login() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleLogin(data) {
        console.log(data);
    }

    return (
        <main className='w-full min-h-screen h-full flex gap-8 flex-col justify-start items-center px-4 text-text-light relative'>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                className='absolute inset-0 w-full h-full object-cover'
            />
            <div class='fixed inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
            <div className='z-30 self-start mt-4'>
                <Logo />
            </div>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white bg-opacity-75 backdrop-blur-lg z-10 mb-8'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-headings'>
                        👋 Hello there
                    </h2>
                    <p className=' text-secondary-light leading-normal'>
                        Register and be part of this awesome journey with us
                    </p>
                </div>

                <div className='flex flex-col gap-2 self-stretch'>
                    <div className='flex items-center justify-center p-3 text-base rounded-xl border gap-2 '>
                        <img src={Google} alt='Google Icon' />
                        <p className='text-secondary-light'>Continue with Google</p>
                    </div>

                    <p className='before:content-[""] before:h-[1px] before:w-full after:content-[""] after:h-[1px] after:w-full flex items-center gap-1 text-slate-400 before:bg-slate-400 after:bg-slate-400  text-xs'>
                        OR
                    </p>
                </div>

                <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(handleLogin)}>
                    <div className='flex flex-col gap-1'>
                        <input
                            type='text'
                            placeholder='John Doe'
                            className='p-3 border rounded-xl w-full text-inherit focus:outline-none focus:border-accent-1-light focus:shadow-sm'
                            {...register('name', {
                                required: 'name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name cannot be shorter than 3 characters',
                                },
                            })}
                        />
                        {errors?.name && (
                            <p className='text-secondary-light px-2 text-sm font-semibold'>
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <input
                            type='text'
                            placeholder='example@gmail.com'
                            className='p-3 border rounded-xl w-full text-inherit focus:outline-none focus:border-accent-1-light focus:shadow-sm'
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
                                className='p-3 border rounded-xl w-full focus:outline-none focus:border-[#ff007f] focus:shadow-sm text-inherit'
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
                                className='-ml-10 text-2xl text-text-light hover:text-accent-1-light transition-all cursor-pointer'
                                onClick={() => setIsPasswordShown((prev) => !prev)}
                            />
                        </div>

                        {errors?.password && (
                            <p className='text-secondary-light px-2 text-sm font-semibold'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button className='p-3 bg-accent-1-light text-white font-bold rounded-xl self-stretch w-full  hover:shadow-accent-1-light/20 hover:shadow-xl'>
                        Register
                    </button>
                </form>
                <div className='flex flex-col self-stretch gap-1 items-center'>
                    <p>
                        Already a member?{' '}
                        <Link to='/login' className='text-link-light underline'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
export default Login;
