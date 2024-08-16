import { toast } from 'react-hot-toast';
import { Icon } from '@iconify/react';

export function success(message) {
    toast.success(message, {
        position: 'top-right',
        icon: (
            <Icon
                icon='fluent:checkmark-circle-24-regular'
                className='self-center w-6 h-6 text-green-500'
            />
        ),
    });
}

export function error(message) {
    toast.error(message, {
        position: 'top-right',
        icon: <Icon icon='weui:error-filled' className='self-center w-6 h-6 text-red-500' />,
    });
}
