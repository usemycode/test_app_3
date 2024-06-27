import { useState, createContext, useContext, useEffect } from "react";
// import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../firebaseConfig";
// import { doc, getDoc, setDoc } from 'firebase/firestore';

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // const unsub = onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         setIsAuthenticated(true);
        //         setUser(user);
        //     } else {
        //         setIsAuthenticated(false);
        //         setUser(null);
        //     }
        // });
        // return unsub;
        setIsAuthenticated(false)
    }, []);

    const login = async (email, password) => {
        try {
            //await signInWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.error(e);
        }
    };

    const logout = async () => {
        try {
           // await auth.signOut();
        } catch (e) {
            console.error(e);
        }
    };

    const register = async (email, password, username, profileUrl) => {
        try {
            // const response = await createUserWithEmailAndPassword(auth, email, password);
            // console.log('response.user :', response?.user);

            // await setDoc(doc(db, "users", response?.user?.uid), {
            //     username,
            //     userId: response?.user?.uid
            // });

            // return { success: true, data: response?.user };
        } catch (e) {
            //return { success: false, msg: e.message };
        }
    };

    return (
        <Authcontext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </Authcontext.Provider>
    );
};

export const useAuth = () => {
    const value = useContext(Authcontext);
    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
};
