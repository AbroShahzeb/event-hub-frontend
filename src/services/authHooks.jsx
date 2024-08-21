import { useMutation } from '@tanstack/react-query';
import { forgotPassword, googleAuth, loginUser, registerUser, resetPassword } from './apiAuth';
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
            localStorage.setItem('user', JSON.stringify(data.user));

            dispatch(login(data.user));
            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            navigate(state?.path || '/dashboard');
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
            localStorage.setItem('user', JSON.stringify(data.user));

            dispatch(login(data.user));
            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            navigate(state?.path || '/dashboard');
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
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data.user));

            dispatch(login(data.user));

            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            navigate(state?.path || '/dashboard');
        },
    });

    return { isPending, mutate };
}

export function useForgotPassword() {
    const { isPending, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: forgotPassword,
        onError: (err) => error(err.message),
        onSuccess: () => {
            success(
                'We have sent you a reset password email, please check that and follow the instructions.'
            );
        },
    });

    return { isPending, mutate };
}

export function usePasswordReset() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { isPending, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: resetPassword,
        onError: (err) => error(err.message),
        onSuccess: (data) => {
            console.log(data);
            success('Password Reset Successfully. Redirecting...');

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            dispatch(login(data.user));
            queryClient.setQueryData('authToken', data.token, {
                staleTime: Infinity,
            });

            navigate(state?.path || '/dashboard');
        },
    });

    return { isPending, mutate };
}
