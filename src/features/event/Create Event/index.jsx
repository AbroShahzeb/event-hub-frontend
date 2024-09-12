import AuthLayout from '../../auth/layout';
import { Icon } from '@iconify/react';

function CreateEvent() {
    return (
        <AuthLayout>
            <main className='max-w-lg  z-30 self-start mx-auto  w-full flex flex-col gap-4'>
                <div className='flex items-center gap-5'>
                    <Icon icon='ion:arrow-back-outline' className='text-2xl' />
                    <h3 className='text-2xl font-semibold font-headings'>Create Event</h3>
                </div>

                <div>
                    <p className='text-lg text-text-secondary-light dark:text-text-secondary-dark font-bold'>
                        Fill in all the below given details to create an event
                    </p>
                </div>

                <div className='w-full h-48 bg-input-bg-light/20 dark:bg-surface-dark/20 rounded-xl border-2 border-dashed border-text-secondary-light dark:border-text-secondary-dark backdrop-blur-sm text-primary-500 flex items-center justify-center gap-2 flex-col'>
                    <Icon icon='fa:picture-o' className='text-5xl' />
                    <p className='text-text-secondary-light dark:text-text-secondary-dark'>
                        Add images or drag and drop them
                    </p>
                    <button className='p-1 px-2 rounded-md text-link-light dark:text-link-dark font-semibold'>
                        Browse
                    </button>
                </div>
            </main>
        </AuthLayout>
    );
}

export default CreateEvent;
