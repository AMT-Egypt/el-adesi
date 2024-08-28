import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import Cookie from "cookie-universal"
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { addUser } from "../../store/user/userInfo";

interface IData {
    identifier:string;
    password:string
}
export const fetchLogin = (data:IData,setLog:React.Dispatch<React.SetStateAction<boolean>>,myUrl:NavigateFunction,dispatch:Dispatch<UnknownAction>) => {
    axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/auth/local`,{...data})
    .then((res)=>{
        // console.log(res)
        const cook = Cookie()
        cook.set("token",res.data.jwt)
        cook.set("user",JSON.stringify(res.data.user))
        dispatch(addUser(res.data.user))
        setLog(false)
        myUrl("/main")
    })
    .catch((err)=>{
        console.log(err)
        setLog(true)
    })
}