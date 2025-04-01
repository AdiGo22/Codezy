import { useState } from "react";
//import { Navigate } from "react-router-dom";
//import axiosInstance from '../../axiosConfig';
import styles from "./Login.module.scss"; 
//import { getCookie } from "../utils/cookieUtils";
//import { ACCESS_TOKEN, LOGIN_URL, HOME } from "../constants/constants";
//import backgroundImage from '../../assets/backgroundImage.svg';
//add background images in assets
//import { LOGIN_URL } from "../constants/constants";
import { HOME, REGISTER } from "../constants/constants";
import {useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import axios from "axios";
const Login = () => {
    //navigation and dispatch 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    //const token = getCookie(ACCESS_TOKEN); //
    const navigate  = useNavigate();
    //sending payload to the API
    const signIn = async (event) => {
        event.preventDefault(); // Prevent page reload
        
        const requestBody = { 
            email: email,
            password: password,
        };
    
        try {
            const response = await axios.post("http://localhost:4000/api/login", requestBody, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (response.data.token) { 
                console.log("Login successful!", response.data);
                Cookies.set("token", response.data.token,{expires : 2}); // Store JWT token
                navigate(`${HOME}`);
            } else {
                console.log("Login failed. Check your credentials.");
            }
        } catch (error) {
            console.error("Error during login:", error.response?.data || error.message);
        }
    };
        

    // if(token) { 
    //     return <Navigate to ={`/${HOME}`}/>;
    // }
   
    const registerHandler = () => {
       navigate(`${REGISTER}`);  
    };

 return(
 <div className={styles["login-container"]}>
    <div className={styles["login-box"]}>
        <div className={styles["login-left"]}>
            <div className={styles["login-header"]}>
                <img
                src=""
                className={styles["logo"]} />
                 <img
                src=""
                className={styles["login-leftImage"]} />
            </div>
            <div className={styles["login-content"]}>
               <div className={styles["login-title"]}>Codezy</div> 
               <div className={styles["login-form"]}>
                <form onSubmit={signIn}>
                <div style={{
                  fontSize:'80%',
                  fontWeight: '600',
                  marginBottom: '-4%',
                  textAlign: 'center'
                }}>Use your system credentials to login</div>
                <input
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 placeholder="UserName"
                 required
                 className={styles["input-field"]}
                />
                <input
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 placeholder="Password"
                 type = "password"
                 required
                 autoComplete="new-password"
                 className={styles["input-field"]}
                />
                <button 
                className={styles["login-button"]}
                 ></button>
                
                </form>
                <button onClick={registerHandler}
                className={styles["register-button"]}
                 >Register? </button>
                </div>
                {/*error-texts*/} 
            </div>
        </div>
        <div className={styles["login-right"]}>
            {/* style={{backgroundImage: `url(${backgroundImage})`}} > */}
         </div>       
        
    </div>
 </div>
 );
};

export default Login;