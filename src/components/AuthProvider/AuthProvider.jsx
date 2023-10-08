
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
     


    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { 
        createUser,
        googleSignIn 
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}