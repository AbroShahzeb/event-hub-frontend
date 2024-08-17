import { useSelector } from 'react-redux';
import Logo from './Logo';

function Navigation() {
    const user = useSelector((state) => state.auth.user);
    return (
        <>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full'
                width='100%'
            />
            <div className='absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
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
