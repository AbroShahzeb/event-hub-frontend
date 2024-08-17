import axios from 'axios';
import api from '../helpers/axiosConfig';

export const loginUser = async (data) => {
    try {
        const res = await api.post('/api/v1/auth/login', data);
        if (res.data.status !== 'success') throw new Error(res.data.message);
        return res.data;
    } catch (err) {
        if (err.response) {
            const errorMessage = err.response.data.message || 'An error occurred during login';
            throw new Error(errorMessage);
        } else {
            throw new Error(err.message || 'An unknown error occurred');
        }
    }
};

export const registerUser = async (data) => {
    try {
        const res = await api.post('/api/v1/auth/register', data);
        if (res.data.status !== 'success') throw new Error(res.data.message);
        return res.data;
    } catch (err) {
        if (err.response) {
            const errorMessage =
                err.response.data.message || 'An error occured during registration';
            throw new Error(errorMessage);
        } else {
            throw new Error(err.message || 'An unknown error occured');
        }
    }
};

export const googleAuth = async (data) => {
    try {
        const res = await api.post('/api/v1/auth/google', data);
        if (res.data.status !== 'success') throw new Error(res.data.message);
        return res.data;
    } catch (err) {
        if (err.response) {
            const errorMessage =
                err.response.data.message || 'An error occured during authentication';
            throw new Error(errorMessage);
        } else {
            throw new Error(err.message || 'An unknown error occured');
        }
    }
};
