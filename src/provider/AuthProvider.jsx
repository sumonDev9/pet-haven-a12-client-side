import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
     const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }

       // login
    const userLogin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const userLogout = () => {
        // setLoading(true);
        return signOut(auth);
    }

     // updateprofile
     const UserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
            //  setLoading(false);
         })
         return () => {
             unsubscribe();
         }
     }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        userLogin,
        userLogout,
        UserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;