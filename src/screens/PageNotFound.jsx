import Logo from '../components/Logo';
import PageNotFoundIllustration from '../assets/page-not-found.svg';
import BackgroundEffect from '../components/BackgroundEffect';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Layout from '../features/auth/layout';

import { useState } from 'react';

import Model from '../components/UI/Modal';

function PageNotFound() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Layout>
            <div className='max-w-lg p-8 flex flex-col items-center gap-6 z-10 justify-center'>
                <div className='flex flex-col self-stretch items-center gap-2 text-center'>
                    <div className='h-48'>
                        <img src={PageNotFoundIllustration} className='h-full' />
                    </div>
                    <h2 className='text-3xl md:text-4xl tracking-normal font-extrabold leading-tight font-headings'>
                        Oopsiee! Page not found
                    </h2>
                    <p className=' text-secondary-light dark:text-text-secondary-dark leading-normal text-lg font-semibold'>
                        Page you have been looking for wasn't found. Let us take you back home.
                    </p>
                </div>

                <button onClick={() => setIsModalOpen(true)}>Show Model</button>

                <Model isModalShown={isModalOpen} setIsModalShown={setIsModalOpen} />

                <Link
                    to='/'
                    className={`p-3 px-6 text-white font-bold rounded-xl self-center   hover:shadow-xl
                            bg-primary-500  hover:shadow-primary-500/20 flex items-center gap-2 justify-center
                    }`}
                >
                    <Icon icon='ant-design:home-filled' />
                    Back to Home
                </Link>
            </div>
        </Layout>
    );
}
export default PageNotFound;
