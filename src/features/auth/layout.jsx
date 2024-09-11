import BackgroundEffect from '../../components/BackgroundEffect';
import Logo from '../../components/Logo';

import ThemeToggle from '../../components/ThemeToggle';
import Modal from '../../components/UI/Modal';

function AuthLayout({ children }) {
    return (
        <main className='w-full min-h-screen flex flex-col justify-start items-center px-4  gap-4 relative'>
            <BackgroundEffect />

            <Modal />

            <div className='z-30  mt-4 w-full flex justify-between max-w-6xl mb-8 items-center'>
                <div className='z-30 self-start'>
                    <Logo />
                </div>
                <ThemeToggle size='text-4xl' />
            </div>

            {children}
        </main>
    );
}

export default AuthLayout;
