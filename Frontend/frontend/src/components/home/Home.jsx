import {useState,useEffect} from "react";
import Cookies from "js-cookie";

const Home = () => {
   const[name,setName] = useState('');

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
 return(
    <>
    <h1>Welcome Home!, {name} </h1>
    </>
 );
};

export default Home;