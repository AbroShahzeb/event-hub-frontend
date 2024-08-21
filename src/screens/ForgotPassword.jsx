import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import Logo from '../components/Logo';
import { useEffect } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import { useForgotPassword } from '../services/authHooks';
import BouncingDotsLoader from '../components/BouncingDotsLoader';

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(function () {
        document.title = 'Reset Password | Event Hub';
    }, []);

    const { isPending, mutate } = useForgotPassword();

    function handleForgotPassword(data) {
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
                        Forgot Password
                    </h2>
                    <p className=' text-secondary-light leading-normal'>
                        You lost your password? Don't worry mate. Just Enter your email and we'll
                        send you your password.
                    </p>
                </div>

                <form
                    className='w-full flex flex-col gap-2'
                    onSubmit={handleSubmit(handleForgotPassword)}
                >
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

                    <button
                        className={`p-3  text-white font-bold rounded-xl self-stretch w-full   hover:shadow-xl transition-all flex items-center gap-2 justify-center ${
                            isPending
                                ? 'bg-secondary-light hover:shadow-secondary-light/20'
                                : 'bg-primary-500  hover:shadow-primary-500/20'
                        }`}
                    >
                        {isPending && <BouncingDotsLoader />}
                        {isPending ? 'Loading' : 'Request Reset Link'}
                    </button>
                </form>
            </div>
        </main>
    );
}
export default ForgotPassword;
