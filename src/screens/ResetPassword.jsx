import { useForm } from 'react-hook-form';
import Logo from '../components/Logo';
import { useEffect, useState } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { usePasswordReset } from '../services/authHooks';
import BouncingDotsLoader from '../components/BouncingDotsLoader';

function ResetPassword() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const { token } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(function () {
        document.title = 'Reset Password | Event Hub';
    }, []);

    const { isPending, mutate } = usePasswordReset();

    function handleResetPassword(data) {
        data['token'] = token;
        mutate(data);
    }

    return (
        <main className='w-full min-h-screen flex flex-col gap-8 justify-start items-center px-4 text-text-light relative'>
            <BackgroundEffect />
            <div className='z-30 self-start mt-4 justify-self-start h-full'>
                <Logo />
            </div>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white bg-opacity-75 backdrop-blur-lg z-10'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold leading-tight tracking-tight font-headings'>
                        Reset Password
                    </h2>
                    <p className=' text-secondary-light leading-normal'>
                        Enter your new password, try to keep it in mind this time :)
                    </p>
                </div>

                <form
                    className='w-full flex flex-col gap-2'
                    onSubmit={handleSubmit(handleResetPassword)}
                >
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
                        {isPending ? 'Loading' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </main>
    );
}
export default ResetPassword;
