import BackgroundEffect from '../components/BackgroundEffect';
import Navigation from '../components/Navigation';
import { Icon } from '@iconify/react';
import { logout } from '../services/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
        navigate('/login');
    }
    return (
        <main className='relative min-h-screen'>
            <BackgroundEffect />
            <Navigation />
            <div className='max-w-6xl z-10 relative mx-auto mt-4 flex items-start gap-12 '>
                <div className='z-10 relative w-[300px] p-4 rounded-lg bg-white border shadow-md h-[calc(100vh-140px)] flex flex-col'>
                    <p className='text-2xl font-headings font-semibold'>Sidebar</p>
                    <div
                        className=' font-semibold transition-all hover:text-primary-500 hover:bg-slate-100 p-3 rounded-md  flex items-center justify-center w-full mt-auto gap-2 cursor-pointer'
                        onClick={handleLogout}
                    >
                        <Icon icon='ion:log-out-outline' fontSize={28} />
                        <p>Sign Out</p>
                    </div>
                </div>
                <div className=''>
                    <div className='max-w-5xl z-10 relative mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 text-white text-2xl font-extrabold font-headings'>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 1
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 2
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 3
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 4
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 5
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 6
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 7
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 8
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 9
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 10
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 11
                        </div>
                        <div className='h-48 bg-white shadow-sm rounded-md flex items-center justify-center text-primary-500 border-2'>
                            item 12
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
