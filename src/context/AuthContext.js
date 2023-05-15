import { createContext,useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth,db} from "../Firebase.js"
import {setDoc,doc} from "firebase/firestore"
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider ({children}){
    const [user,setUser]= useState({})

    
    function signUp(email, password, ) {
      const user = {
        email: email
      };
      createUserWithEmailAndPassword(auth, email, password)
      axios.post('http://localhost:3132/users/', user)
        .then(response => {
          console.log(response.data)
            .then((userCredential) => {
              // Handle successful sign up
              console.log(userCredential);
            })
            .catch((error) => {
              // Handle error
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
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