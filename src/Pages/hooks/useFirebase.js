
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.init';



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsloading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth()

    // Register User with email and password
    const registerUser = (email, password) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, password};
            setUser(newUser);
            // save user to the database
            saveUser(email, password);
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsloading(false));
    }

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            sessionStorage.setItem('username', result.user.displayName);
        })
        .catch(error => {
            setError(error.message);
        })

    }
    // for admin authentication
    useEffect(() => {
        fetch(`https://hidden-reaches-55205.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        signOut(auth)
        .then(() =>{
            setUser({});
        })        
    }
    const saveUser = (email, password) => {
        const user = {email, password};
        fetch('https://hidden-reaches-55205.herokuapp.com/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
        .then()

    }
    // useEffect for google user
    /* useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user);
            }
        })        
    },[]) */

    // User Login with email and pass
    const loginUser = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsloading(false));
    }

    // useEffect for Email user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);                
            }
            else {
                setUser({});
            }
            setIsloading(false);
        })
        return unsubscribe;
    },[])

    const emailLogOut = () => {
        setIsloading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsloading(false));
    }
    return {
        user,
        admin,
        isloading,
        error,
        signInUsingGoogle, 
        loginUser,
        logout,
        authError,
        registerUser,
        emailLogOut
    }

}


export default useFirebase;