import { toast } from 'react-hot-toast';
import { Icon } from '@iconify/react';

export function success(message) {
    toast.success(message, {
        position: 'top-right',
    });
}

export function error(message) {
    toast.error(message, {
        position: 'top-right',
    });
}
