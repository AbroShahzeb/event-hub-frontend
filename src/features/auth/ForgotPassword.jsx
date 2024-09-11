import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import Logo from '../../components/Logo';
import { useEffect } from 'react';
import BackgroundEffect from '../../components/BackgroundEffect';
import { useForgotPassword } from '../../services/authHooks';
import BouncingDotsLoader from '../../components/BouncingDotsLoader';
import AuthLayout from './layout';

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
        <AuthLayout>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white/75 dark:bg-card-dark/75 dark:border-border-dark/50 backdrop-blur-lg z-10 mb-8'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold leading-tight tracking-tight font-headings'>
                        Forgot Password
                    </h2>
                    <p className=' text-secondary-light dark:text-text-secondary-dark leading-normal'>
                        You lost your password? Don't worry . Just Enter your email and send you a
                        reset link.
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
                            className='p-3 border rounded-xl w-full text-inherit focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:shadow-sm dark:bg-slate-800 dark:border-border-dark/50'
                            {...register('email', {
                                required: 'Email is required',
                                validate: (val) => isEmail(val) || 'Please enter a valid email',
                            })}
                        />
                        {errors?.email && (
                            <p className='text-secondary-light dark:text-text-secondary-dark px-2 text-sm font-semibold'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <button
                        className={`p-3  text-white font-bold rounded-xl self-stretch w-full   hover:shadow-xl transition-all flex items-center gap-2 justify-center ${
                            isPending
                                ? 'bg-secondary-light hover:shadow-secondary-light/20'
                                : 'bg-primary-500  hover:shadow-primary-500/20 dark:hover:shadow-primary-700/20'
                        }`}
                    >
                        {isPending && <BouncingDotsLoader />}
                        {isPending ? 'Loading' : 'Request Reset Link'}
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
export default ForgotPassword;
