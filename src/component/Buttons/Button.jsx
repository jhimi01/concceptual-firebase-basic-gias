import React, { useState } from 'react';
import { FaGithub,FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/Firebase.config';



const Button = () => {

    const [user, setUser] = useState({})

    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

   

    // ---------------- google login --------------------
    const handlegooglelogin=()=>{
         console.log('google google google')
         signInWithPopup(auth, googleprovider)
         .then(result => {
             const loggedgoogle = result.user;
             setUser(loggedgoogle)
            //  console.log(loggedgoogle)
         }).catch((error) => {
            console.log(error.message)
           });
    }
  
// console.log(user)
    // ------------ github login ------------
      const handlegihublogin=()=>{
        signInWithPopup(auth, githubprovider)
        .then((result) => {
           const user = result.user;
           setUser(user)
          }).catch((error) => {
           console.log(error.message)
          });
      }

    return (
        <div>
            <button onClick={handlegooglelogin}>signin with google <FaGoogle/></button>
            <button onClick={handlegihublogin}>signin with github <FaGithub/></button>
            {/* <p>{user.displayName}</p> */}
        </div>
    );
};

export default Button;