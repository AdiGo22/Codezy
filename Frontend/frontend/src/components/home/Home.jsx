import {useState,useEffect} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
//to display name of the login user
import { READ } from "../constants/constants";
import { WRITE } from "../constants/constants";
const Home = () => {
   const[name,setName] = useState('');
   const navigate =  useNavigate();
   useEffect(()=> {
      const token = Cookies.get('token');
      if(token){
         try{
            const payload = token.split('.')[1];
            console.log(payload);
            const decodePayload = JSON.parse(atob(payload));
            console.log("trimmed paylaod",decodePayload)
            setName(decodePayload.email);
         }catch(e){
            console.error("Problem fetching the name from token",e);
         }
      }
   },[]);
   
   const readHandler = () => {
      //append read to the route
      
      navigate(`${READ}`)

   }
   const writeHandler = () => { 
      //append write to the route
      console.log('Write triggered');
      navigate(`${WRITE}`)
   }
 return(
    <>
    <h1>Welcome Home!, {name} </h1>
    <button onClick={readHandler}>Read</button>
    <button onClick={writeHandler}>Write</button>
    </>
 );
};

export default Home;