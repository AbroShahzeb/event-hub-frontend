import { Icon } from '@iconify/react';
import { useState } from 'react';

import Backdrop from './Backdrop';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const modelVariants = {
    open: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)',
        display: 'flex',
    },
    closed: {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.2) ',
        display: 'none',
    },
};

function Modal({ isModalShown, setIsModalShown }) {
    return (
        <>
            <Backdrop isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
            <motion.div
                className='z-40 bg-white dark:bg-input-bg-dark absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-2xl border text-text-light dark:text-text-dark shadow-lg dark:border-border-dark  w-[90%] sm:max-w-sm lg:max-w-md xl:max-w-lg flex flex-col gap-4 overflow-hidden transition-all'
                style={{ transformOrigin: 'center' }}
                variants={modelVariants}
                initial={isModalShown ? 'open' : 'closed'}
                animate={isModalShown ? 'open' : 'closed'}
            >
                <div
                    className='self-end mt-4 mr-4 hover:cursor-pointer hover:text-primary-500 transition-all'
                    onClick={() => setIsModalShown(false)}
                >
                    <Icon icon='gg:close-o' fontSize={28} />
                </div>

                <div className=' flex flex-col gap-4'>
                    <div className='px-5 flex flex-col gap-2'>
                        <h3 className='text-2xl'>We think you should login now 😉</h3>
                        <p className='text-base text-text-secondary-light dark:text-text-secondary-dark'>
                            We have noticed violent acitivity in your account, so it may be
                            deactivated at any time. If you think it is not true, then you can talk.
                        </p>
                    </div>

                    <div className=' px-5 py-3 flex items-center justify-end gap-5'>
                        <button
                            className='text-sm font-medium text-link-light underline'
                            onClick={() => setIsModalShown(false)}
                        >
                            No, let me stay here
                        </button>
                        <Link
                            to='login'
                            className='p-2 text-sm rounded-lg bg-primary-500 dark:bg-primary-700 text-white'
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Modal;
