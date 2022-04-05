import  {useState, useEffect} from 'react';
import {getFreelancersByEmail, getCompanyByEmail} from '../../api';
import { isFocused } from '@react-navigation/native';


export default function login(email,userType){
    const[userLogged,setUser] = useState([]);
    
    const loadUser=async(email) => {
        if(userType==1){
            const data = await getFreelancersByEmail(email);
            setUser(data)
            
        }
        else if (userType==2){
            
            const data = await getCompanyByEmail(email);
            setUser(data)
            
        }
    }
    useEffect(() =>{  
        loadUser(email)
      }, [isFocused]);
    return(userLogged)
}

export function setMainUser(){ 
    const emailUnparsed = localStorage.getItem("email")
    const email = JSON.parse(emailUnparsed);
    const userTypeUnparsed = localStorage.getItem("userType")
    const userType = JSON.parse(userTypeUnparsed);
    localStorage.setItem("user", JSON.stringify(login(email,userType)))
    localStorage.setItem("userType", JSON.stringify(userType))
    
}

