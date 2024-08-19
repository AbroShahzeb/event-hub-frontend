import BackgroundEffect from '../components/BackgroundEffect';
import Navigation from '../components/Navigation';

function Dashboard() {
    return (
        <main className='relative min-h-screen'>
            <BackgroundEffect />
            <Navigation />
            <div className='px-6'>
                <div className='max-w-6xl z-10 relative mx-auto mt-12 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 text-white text-2xl font-extrabold font-headings'>
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
        </main>
    );
}

export default Dashboard;
