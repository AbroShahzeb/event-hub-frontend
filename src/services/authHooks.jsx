import { useMutation } from '@tanstack/react-query';
import { googleAuth, loginUser, registerUser } from './apiAuth';
import { error, success } from '../helpers/toastHelper';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from './userSlice';
import { queryClient } from '../App';

export function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { isPending, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: loginUser,
        onError: (err) => error(err.message),
        onSuccess: (data) => {
            success('Successfully logged in. Redirecting...');

            localStorage.setItem('token', data.token);

            dispatch(login(data.user));
            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            setTimeout(function () {
                navigate(state?.path || '/dashboard');
            }, 1000);
        },
    });

    return { isPending, mutate };
}

export function useRegisterUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { isPending, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: registerUser,
        onError: (err) => error(err.message),
        onSuccess: (data) => {
            success('Successfully registered. Redirecting...');
            console.log(data);

            localStorage.setItem('token', data.token);

            dispatch(login(data.user));
            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            setTimeout(function () {
                navigate(state?.path || '/dashboard');
            }, 1000);
        },
    });

    return { isPending, mutate };
}

export function useGoogleAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { isPending, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: googleAuth,
        onError: (err) => error(err.message),
        onSuccess: (data) => {
            success('Successfully logged in. Redirecting...');
            localStorage.setItem('token', data.token);

            dispatch(login(data.user));

            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            setTimeout(function () {
                navigate(state?.path || '/dashboard');
            }, 1000);
        },
    });

    return { isPending, mutate };
}
