import React, { useContext } from 'react';
import { AuthCotext } from '../Contexts/AuthContext';

const useAuth = () => {
    const info = useContext(AuthCotext)
    return info
};

export default useAuth;