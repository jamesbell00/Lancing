

import  {useState, useEffect} from 'react';
import {getFreelancersByEmail} from '../../api';
import { isFocused } from '@react-navigation/native';


export default function login(email){
    const[userLogged,setUser] = useState([]);
    
    const loadUser=async(email) => {
        const userTypeId=1;
        if(userTypeId==1){
            const data = await getFreelancersByEmail(email);
            setUser(data)
            console.log("hello")
        
        }
        else if (userTypeId==2){
            const data = await getFreelancersByEmail(email);
            setUser(data)
        }
    }
    useEffect(() =>{  
        loadUser(email)
      }, [isFocused]);
    return(userLogged)
}

export function setMainUser(email){ 
localStorage.setItem("user", JSON.stringify(login(email)))
}

