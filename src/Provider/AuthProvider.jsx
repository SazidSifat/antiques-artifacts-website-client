import React, { useEffect, useState } from 'react';
import { AuthCotext } from '../Contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Config/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [authloading, setAuthLoading] = useState(false)

    //signin with google
    const googleProvider = new GoogleAuthProvider()
    const withGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // register
    const createWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //email pass login 
    const emailPassLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //update profile 
    const updateUserProfile = (userDetails) => {
        setLoading(true)
        updateProfile(auth.currentUser, userDetails)
    }


    //logout
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    //observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setAuthLoading(false)
            setUser(currentUser)
        })

        return unsubscribe;

    }, [])





    const authInfo = {
        user,
        loading,
        authloading,
        setLoading,
        withGoogle,
        emailPassLogin,
        createWithEmailPassword,
        updateUserProfile,
        signOutUser,
    }
    return (
        <AuthCotext value={authInfo}>
            {children}
        </AuthCotext>
    );
};

export default AuthProvider;