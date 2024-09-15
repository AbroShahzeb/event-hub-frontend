import Layout from '../features/auth/layout';

function LandingPage() {
    return (
        <Layout>
            <main className='z-30 max-w-6xl container'>
                <header className='flex flex-col-reverse md:flex-row items-center mt-8 max-w-6xl mx-auto gap-12'>
                    <div className='text-center md:text-left flex flex-col items-center md:items-start'>
                        <h1 className='text-3xl md:text-6xl  text-text-light dark:text-text-dark leading-7 tracking-tight font-bold font-headings'>
                            All your <span className='text-primary-500'>favourite events</span> just
                            a click away
                        </h1>
                        <p className='text-lg mt-4 text-text-secondary-light dark:text-text-secondary-dark'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
                            sequi odit delectus eum? Delectus facere eos ratione odit vel quo iure
                            atque explicabo ipsa veritatis.
                        </p>
                        <button
                            className={`p-3  text-white font-bold rounded-xl mt-8  hover:shadow-xl transition-all flex items-center gap-2 justify-center ${'bg-primary-500  hover:shadow-primary-500/20 dark:hover:shadow-primary-700/20'}`}
                        >
                            Explore Events <span className='ml-1'>&rarr;</span>
                        </button>
                    </div>
                    <div className='w-full h-64 md:h-96 bg-bg-hero bg-center bg-cover rounded-2xl dark:bg-bg-hero-dark'></div>
                </header>
            </main>
        </Layout>
    );
}

export default LandingPage;
