import {  createContext } from "react";


const AuthContext= createContext(null);

const AuthProvider = (card , {Children}) => {
    console.log(card);

    const authInfo = {card};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {Children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;