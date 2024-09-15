import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './features/auth/Register';
import Login from './features/auth/Login';
import ResetPassword from './features/auth/ResetPassword';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import '@theme-toggles/react/css/Within.css';

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
import ForgotPassword from './features/auth/ForgotPassword';
import CreateEvent from './features/event/Create Event';
import LandingPage from './pages/LandingPage';

export const queryClient = new QueryClient();

function App() {
    const dispatch = useDispatch();
    useEffect(function () {
        const token = localStorage.getItem('token');
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') document.getElementsByTagName('html')[0].classList.add('dark');
        else document.getElementsByTagName('html')[0].classList.remove('dark');

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
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/reset-password/:token' element={<ResetPassword />} />
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

                    <Route
                        path='/event/create'
                        element={
                            <RequireAuth>
                                <CreateEvent />
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
