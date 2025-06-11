import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user } = useAuth()

    return user ? children : <Navigate to='/login' state={location.pathname} />







}


export default PrivateRoute; 