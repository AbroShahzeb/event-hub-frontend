import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './screens/Register';
import Login from './screens/Login';
import ResetPassword from './screens/ResetPassword';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';

import PasswordResetSuccess from './screens/PasswordResetSuccess';
import PageNotFound from './screens/PageNotFound';
import Navigation from './components/Navigation';
import { jwtDecode } from 'jwt-decode';
import Dashboard from './screens/Dashboard';
import { useDispatch } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RequireAuth from './components/RequireAuth';
import { login } from './services/userSlice';

export const queryClient = new QueryClient();

function App() {
    const dispatch = useDispatch();
    useEffect(function () {
        const token = localStorage.getItem('token');
        if (token) queryClient.setQueryData('authToken', token);
    }, []);

    useEffect(() => {
        const handleRefresh = (event) => {
            event.preventDefault();
            const user = localStorage.getItem('user');
            if (user) {
                dispatch(login(JSON.parse(user)));
            }
        };

        // Add the event listener
        window.addEventListener('load', handleRefresh);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleRefresh);
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Router>
                <Toaster />

                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/reset-password' element={<ResetPassword />} />
                    <Route path='/password-reset-success' element={<PasswordResetSuccess />} />
                    <Route
                        path='/dashboard'
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path='/settings'
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
