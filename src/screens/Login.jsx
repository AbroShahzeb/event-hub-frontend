import Google from '../assets/devicon_google.svg';

function Login() {
    return (
        <main className='w-full min-h-screen flex justify-center items-center px-4'>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                class='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full'
                width='100%'
            />
            <div class='absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
            <div className='max-w-sm p-8 flex flex-col items-start gap-6 border rounded-2xl shadow-lg bg-white bg-opacity-75 backdrop-blur-lg z-10'>
                <div className='flex flex-col self-stretch gap-2'>
                    <h2 className='text-2xl md:text-3xl font-extrabold text-slate-700 leading-tight tracking-tight text-headings'>
                        Login
                    </h2>
                    <p className=' text-slate-500 leading-normal'>
                        Welcome back, login to catch up with missed things
                    </p>
                </div>

                <div className='flex flex-col gap-2 self-stretch'>
                    <div className='flex items-center justify-center p-3 text-base rounded-xl border gap-2 '>
                        <img src={Google} alt='Google Icon' />
                        <p className='text-slate-600'>Continue with Google</p>
                    </div>

                    <p className='before:content-[""] before:h-[1px] before:w-full after:content-[""] after:h-[1px] after:w-full flex items-center gap-1 text-slate-400 before:bg-slate-400 after:bg-slate-400  text-xs'>
                        OR
                    </p>
                </div>

                <form className='w-full flex flex-col gap-2'>
                    <div>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='p-3 border rounded-xl w-full'
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            className='p-3 border rounded-xl w-full focus:outline-none focus:border-[#ff007f] focus:shadow-sm'
                        />
                    </div>

                    <button className='p-3 bg-[#ff007f] text-white font-bold rounded-xl self-stretch w-full'>
                        Login
                    </button>
                </form>
                <div className='flex flex-col self-stretch gap-1 items-center'>
                    <p className='text-blue-500 font-bold'>Forgot password?</p>
                    <p>
                        Not a member? <span className='text-blue-500 font-bold'>Register</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
export default Login;
