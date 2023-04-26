import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext);
    const location = useLocation();
    if(loading) return <div>....Loading!</div>
    if(user) return children;

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>


};

export default PrivateRoute;