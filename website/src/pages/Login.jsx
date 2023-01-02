
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth } from '../firebase-config';
   
function Login() {
  
    const [user, setUser] = useState({});
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginEmail, setLoginEmail] = useState("");
  

    onAuthStateChanged(auth,(curentUser)=> {
        setUser(curentUser);
    });

    const login = async () => {

        try {
        const user = await createUserWithEmailAndPassword(
            auth, 
            LoginEmail,
            LoginPassword
           
        );
        console.log(user);
        }catch (error) {
            console.log(error.message);
        }

    };
    
    return (
        <>
        
        <img src="./astronaut.png"  class="background"/>
            
            
            <div class = "home-page"> 
            
                <a href="/Register"  > <h2 class= "switch"></h2> </a>
          
            <div class="login-box">
           
           
                

            
                <input  id="Username" name="Username" type="Username" placeholder="Enter Your Username" 
                onChange={(e)=> {
                    setLoginEmail(e.target.value);
                 }}/>

                
                <input  id="Password" name="gmail" type="Password" placeholder="Enter Your Password"
                    onChange={(e)=> {
                        setLoginPassword(e.target.value);
                 }}/>
                 
               
            {user?.username}

            <button class="LogIn" onClick={login}> Log in </button>


             
        </div>
       </div>
        </>
    );
}

export default Login;