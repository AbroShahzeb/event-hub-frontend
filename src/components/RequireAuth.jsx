import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
    const token = localStorage.getItem('token');

    const authed = token ? true : false;

    const location = useLocation();

    return authed === true ? (
        children
    ) : (
        <Navigate to='/login' replace state={{ path: location.pathname }} />
    );
}

export default RequireAuth;
