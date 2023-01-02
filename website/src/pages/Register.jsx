

import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth } from '../firebase-config';
   
import InputControl from "../pages/InputControl";



export default function Register() {
  
 
  
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
      
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/home");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };


    const [values2, setValues2] = useState({
      email2: "",
      pass2: "",
    });
    const [errorMsg2, setErrorMsg2] = useState("");
    const [submitButtonDisabled2, setSubmitButtonDisabled2] = useState(false);
  
    const handleSubmission2 = () => {
      if (!values2.email2 || !values2.pass2) {
        setErrorMsg2("Fill all fields");
        return;
      }


      setErrorMsg2("");

      setSubmitButtonDisabled2(true);
      signInWithEmailAndPassword(auth, values2.email2, values2.pass2)
        .then(async (res) => {
          setSubmitButtonDisabled2(false);
          
          navigate("/home");
        })
        .catch((err) => {
          setSubmitButtonDisabled2(false);
          setErrorMsg2(err.message);
        });
    };










    
  
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"/>


    return (
        
        <>
        
        
            
        <div className="main-import-box">
        <div class="main">  	
		<input  className="import-input" type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label className="import-lable" for="chk" aria-hidden="true">Sign up</label>
					
                    <input className="import-input" type="text" name="txt" placeholder="User name" required=""
                     onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                      }
                    />
					
                    <input  className="import-input" type="email" name="email" placeholder="Email" required=""
                     onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                      }/>
					
                    <input   className="import-input" type="password" name="pswd" placeholder="Password" required=""
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                      }
                    />
                    
                        <b className="error">{errorMsg}</b>
                    
					<button onClick={handleSubmission} disabled={submitButtonDisabled}  className="import-button">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label className="import-lable" for="chk" aria-hidden="true">Login</label>
					<input  className="import-input" type="email" name="email" placeholder="Email" required=""
           onChange={(event) =>
            setValues2((prev) => ({ ...prev, email2: event.target.value }))
          }
          />
          
          
					<input  className="import-input" type="password" name="pswd" placeholder="Password" required=""
           onChange={(event) =>
            setValues2((prev) => ({ ...prev, pass2: event.target.value }))
          }
             
         />
					<button disabled={submitButtonDisabled2} onClick={handleSubmission2}   className="import-button" >Login</button>
          <b className="error">{errorMsg2}</b>
				</form>
			</div>
	</div>
        </div>
        </>
    );
}

