import { useSelector } from 'react-redux';
import Logo from './Logo';
import { error, success } from '../helpers/toastHelper';

function Navigation() {
    const user = useSelector((state) => state.auth.user);

    return (
        <>
            <nav
                className='
        p-3 bg-surface-light/60 backdrop-blur-lg border-b
    '
            >
                <div className='max-w-6xl mx-auto flex items-center justify-between'>
                    <div>
                        <Logo />
                    </div>

                    <div className='flex items-center gap-2'>
                        <div
                            className={`rounded-full w-10 h-10 flex items-center justify-center ${
                                !user?.imgUrl && 'bg-secondary-light text-white font-bold text-lg'
                            }`}
                        >
                            {user?.imgUrl && (
                                <img src={user?.imgUrl} alt='Profile' className='rounded-full ' />
                            )}
                            {!user?.imgUrl && user?.name[0].toUpperCase()}
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='font-bold text-text-light font-headings'>
                                {user?.name}
                            </h3>
                            <p className='-mt-1 text-sm text-text-secondary-light'>{user?.email}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
