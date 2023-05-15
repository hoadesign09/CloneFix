import { createContext,useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth,db} from "../Firebase.js"
import {setDoc,doc} from "firebase/firestore"
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider ({children}){
    const [user,setUser]= useState({})

    
    async function signUp(email, password, ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const { email: email_1, password: password_1 } = userCredential.user;
        const uid = userCredential.user.uid;
        return await axios.post("http://localhost:3132/users", { email, password, uid });
      } catch (error) {
        console.log(error);
      }
    }
    

    function logIn (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth (){
    return useContext(AuthContext)
}