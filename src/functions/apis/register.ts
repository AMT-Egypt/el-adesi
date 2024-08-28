import axios from "axios"
import { NavigateFunction } from "react-router-dom";

interface IData {
    username:string;
    email:string;
    password:string;
}
export const fetchRegister = (data:IData,myUrl:NavigateFunction) => {
    axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/auth/local/register`,{...data})
    .then(()=>{
        // console.log(res)
        myUrl("/login")
    })
    .catch((err)=>{
        console.log(err)
    })
}