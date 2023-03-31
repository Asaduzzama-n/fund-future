import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [donations, setDonations] = useState([]);


    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const userLoginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const verifyUser = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        fetch('http://localhost:5000/donations')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser?.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);

        });

        return () => unsubscribe();
    }, [])


    
    const getDonationProgress = (id, target) => {
        console.log(id,target);

        const selectedDonation = donations.filter(donation => donation.campaign_id === id);
        
        let totalDonation = 0;
        selectedDonation?.map(donation => totalDonation = donation.amount + totalDonation)

        const progressAmount = totalDonation;
        console.log('ddd',totalDonation);
    
        let progressPercent = 0;

        if (progressAmount > parseFloat(target)) {
            progressPercent = 100;
        } else {
            progressPercent = (progressAmount / parseFloat(target)) * 100;
        }
        const donationInfo = {
            donationProgress: progressPercent,
            totalDonation: totalDonation,
            donationCount: selectedDonation.length,
            selectedDonation: selectedDonation

        }
        return donationInfo;
    }





    const authInfo = {
        createUserWithEmail,
        updateUserProfile,
        userLoginWithEmail,
        googleLogin,
        verifyUser,
        passwordReset,
        setLoading,
        logOut,
        getDonationProgress,
        loading,
        user,
        donations,


    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;