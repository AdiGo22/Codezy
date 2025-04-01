import { useState } from "react";
//import { Navigate } from "react-router-dom";
//import axiosInstance from '../../axiosConfig';
import styles from "./Register.module.scss"; 
//import { getCookie } from "../utils/cookieUtils";
//import { ACCESS_TOKEN, LOGIN_URL, HOME } from "../constants/constants";
//import backgroundImage from '../../assets/backgroundImage.svg';
//add background images in assets
//import { LOGIN_URL } from "../constants/constants";
import { LOGIN } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Register = () => {
    //navigation and dispatch 
    const[name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    //const token = getCookie(ACCESS_TOKEN); //
    const navigate  = useNavigate();
    //sending payload to the API
    const signIn = async (event) => {
        event.preventDefault();
        
        const requestBody = {
            name: name,  
            email: email,
            password: password,
        };
    
        try {
            const response = await axios.post("http://localhost:4000/api/register", requestBody, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (response.data?.success || response.status === 201) {
                //Cookies.set("token", response.data.token,{expires : 2});
                //console.log("Token from Register", token)
                console.log("Register successful! kindly login with the same details ", response.data);
            
            } else {
                console.log("Register failed");
            }
        } catch (error) {
            console.error("Error during register:", error.response?.data || error.message);
        }
    };
    const loginHandler = () => {
       navigate(`${LOGIN}`);  
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
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                 placeholder="Name"
                 required
                 className={styles["input-field"]}
                />
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
                <button onClick={loginHandler}
                className={styles["register-button"]}
                 >LOGIN? </button>
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

export default Register;