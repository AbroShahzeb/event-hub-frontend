import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import Logo from '../components/Logo';
import { useEffect } from 'react';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(function () {
        document.title = 'Reset Password | Event Hub';
    }, []);

    function handleLogin(data) {
        console.log(data);
    }

    return (
        <main className='w-full min-h-screen flex flex-col gap-8 justify-start items-center px-4 text-text-light relative'>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full'
                width='100%'
            />
            <div className='absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
            <div className='z-30 self-start mt-4 justify-self-start h-full'>
                <Logo />
            </div>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white bg-opacity-75 backdrop-blur-lg z-10'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold leading-tight tracking-tight font-headings'>
                        Reset Password
                    </h2>
                    <p className=' text-secondary-light leading-normal'>
                        You lost your password? Don't worry mate. Just Enter your email and we'll
                        send you your password.
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

                    <button className='p-3 bg-primary-500 text-white font-bold rounded-xl self-stretch w-full  hover:shadow-primary-500/20 hover:shadow-xl transition-all'>
                        Reset Password
                    </button>
                </form>
            </div>
        </main>
    );
}
export default Login;
